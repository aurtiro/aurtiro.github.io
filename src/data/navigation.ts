export type NavItem = {
  label: string;
  to: string;
};

export type NavGroup = {
  title: string;
  items: NavItem[];
};

export const navGroups: NavGroup[] = [
  {
    title: 'Services',
    items: [
      { label: 'Service Overview', to: '/services' },
      { label: 'Contingent Staffing', to: '/services#contingent-staffing' },
      { label: 'Retained Search', to: '/services#retained-search' },
      { label: 'For Hiring Managers', to: '/services#hiring-managers' },
      { label: 'For Job Seekers', to: '/services#job-seekers' }
    ]
  },
  {
    title: 'Proof',
    items: [
      { label: 'Testimonials', to: '/testimonials' },
      { label: 'Past Clients', to: '/clients' }
    ]
  },
  {
    title: 'About',
    items: [
      { label: 'Recruitment Process', to: '/about#recruitment-process' },
      { label: 'Philosophy', to: '/about#philosophy' },
      { label: 'Talent Bar', to: '/about#talent-bar' },
      { label: 'Recognitions', to: '/about#recognitions' }
    ]
  },
  {
    title: 'Platform',
    items: [
      { label: 'Candidate Portal', to: '/portal/candidate' },
      { label: 'Client Portal', to: '/portal/client' },
      { label: 'Login', to: '/auth/login' }
    ]
  },
  {
    title: 'Contact',
    items: [{ label: 'Contact Aurtiro', to: '/contact' }]
  }
];
