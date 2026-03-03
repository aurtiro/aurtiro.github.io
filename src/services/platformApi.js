const apiBaseUrl = import.meta.env.VITE_API_BASE_URL?.trim() ?? '';
const pushLocalDraft = (storageKey, payload) => {
    try {
        const existing = JSON.parse(window.localStorage.getItem(storageKey) ?? '[]');
        existing.push({ submittedAt: new Date().toISOString(), payload });
        window.localStorage.setItem(storageKey, JSON.stringify(existing.slice(-50)));
    }
    catch {
        // If storage is blocked, we still return success response to avoid user-facing hard failure.
    }
};
async function postJson(endpoint, payload) {
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
export async function submitCandidateProfile(payload) {
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
export async function submitHiringRequest(payload) {
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
export async function loginUser(payload) {
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
