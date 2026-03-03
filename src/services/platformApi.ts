export type CandidateProfilePayload = {
  fullName: string;
  email: string;
  location: string;
  targetRole: string;
  linkedinUrl: string;
  summary: string;
  resumeFileName?: string;
};

export type HiringRequestPayload = {
  companyName: string;
  hiringContact: string;
  contactEmail: string;
  roleTitle: string;
  headcountPlan: string;
  notes: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type ApiActionResult = {
  ok: boolean;
  mode: 'api' | 'local-fallback';
  message: string;
};

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL?.trim() ?? '';

const pushLocalDraft = (storageKey: string, payload: unknown) => {
  try {
    const existing = JSON.parse(window.localStorage.getItem(storageKey) ?? '[]') as Array<{
      submittedAt: string;
      payload: unknown;
    }>;

    existing.push({ submittedAt: new Date().toISOString(), payload });
    window.localStorage.setItem(storageKey, JSON.stringify(existing.slice(-50)));
  } catch {
    // If storage is blocked, we still return success response to avoid user-facing hard failure.
  }
};

async function postJson(endpoint: string, payload: unknown) {
  const response = await fetch(`${apiBaseUrl}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response;
}

export async function submitCandidateProfile(payload: CandidateProfilePayload): Promise<ApiActionResult> {
  if (!apiBaseUrl) {
    pushLocalDraft('aurtiro:candidate-submissions', payload);
    return {
      ok: true,
      mode: 'local-fallback',
      message: 'Saved locally as a draft. Connect VITE_API_BASE_URL to send directly to your backend CRM/ATS.'
    };
  }

  await postJson('/portal/candidates', payload);
  return {
    ok: true,
    mode: 'api',
    message: 'Profile submitted successfully.'
  };
}

export async function submitHiringRequest(payload: HiringRequestPayload): Promise<ApiActionResult> {
  if (!apiBaseUrl) {
    pushLocalDraft('aurtiro:client-requests', payload);
    return {
      ok: true,
      mode: 'local-fallback',
      message: 'Saved locally as a draft. Connect VITE_API_BASE_URL to send directly to your backend CRM/ATS.'
    };
  }

  await postJson('/portal/clients', payload);
  return {
    ok: true,
    mode: 'api',
    message: 'Hiring request submitted successfully.'
  };
}

export async function loginUser(payload: LoginPayload): Promise<ApiActionResult> {
  if (!apiBaseUrl) {
    return {
      ok: false,
      mode: 'local-fallback',
      message: 'Login API is not configured yet. Set VITE_API_BASE_URL when auth backend is ready.'
    };
  }

  await postJson('/auth/login', payload);
  return {
    ok: true,
    mode: 'api',
    message: 'Login successful.'
  };
}

export const platformConfig = {
  apiBaseUrl,
  isApiConfigured: apiBaseUrl.length > 0
};
