export type Service = {
  id: string;
  title: string;
  summary: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export const services: Service[] = [
  {
    id: 'contingent-staffing',
    title: 'Contingent Staffing',
    summary:
      'Full-time engineering talent delivered with precision. You pay a fee only when a successful hire is made.'
  },
  {
    id: 'retained-search',
    title: 'Retained Search',
    summary:
      'Built for organizations with multiple openings or sustained growth plans that require a long-term recruiting partner.'
  }
];

export const clientTestimonial: Testimonial = {
  quote:
    "I had the pleasure of working with Joe while I was Director of Engineering at Ripple, where he served as my Talent Acquisition partner for recruiting engineers to my team. Joe demonstrated exceptional sourcing skills combined with a deep understanding of my technical requirements. Every candidate he shortlisted was top-notch, and the entire hiring process was remarkably smooth thanks to his expertise. What truly sets Joe apart is his ability to listen and act with genuine empathy. He wasn't just a recruiter, he became a trusted sparring partner, helping me navigate hiring negotiations with my VP of Engineering and ensuring we made the right decisions for the team. I would absolutely work with Joe again if the opportunity arises. If you're looking for a recruiter who truly understands talent acquisition at a strategic level, Joe is your person.",
  author: 'Director of Engineering',
  role: 'Ripple'
};

export const peerTestimonial: Testimonial = {
  quote:
    'Joe is one of the most dedicated, diligent, and passionate Talent Acquisition professionals I have had the opportunity to work with. He is not only an exceptional full-stack technical recruiter, but also someone with the technical aptitude and deep understanding of niche skill sets needed to successfully fill even the most complex roles. Joe consistently dives deep into every hire, taking the time to truly understand the business, the technology, and the real impact each role has. This was especially evident in his work with the Liquidity team, where he operated not just as a recruiting partner, but as someone with a genuine understanding of the core business and its critical hiring needs. I also had the opportunity to work closely with Joe on building company-wide interview training. His attention to detail is unmatched, meticulously reviewing every aspect of a live, self-paced training program built in Workday and deployed globally across the organization. Joe Boys is one of the strongest talent resources I have worked with, whether in day-to-day recruiting, partnering with the business, or building scalable, global Talent Acquisition initiatives.',
  author: 'Talent Leadership',
  role: 'Ripple'
};

export const candidateTestimonials: Testimonial[] = [
  {
    quote:
      "I can't recommend Joe highly enough. He is by far and away the best recruiter I have come across. His exceptional communication skills and professionalism are outstanding. It was a pleasure doing business with Joe and I would highly recommend him for future reference.",
    author: 'Candidate',
    role: 'Senior Engineer Placement'
  },
  {
    quote:
      'Super efficient recruiter! First HR from potential company called me in 3 hours after my first call with Joe. All meetings were well-organized and set up in the shortest period of time. Because of his relationship with companies he was able to speed up the interview process significantly. He will be the first recruiter I call should I decide on new opportunities.',
    author: 'Candidate',
    role: 'Engineering Candidate'
  },
  {
    quote:
      'I would highly recommend Joe for your next job search. He was thorough, openly communicative, and ready to go to bat for his prospects. He delivered outstanding results and successfully executed every relevant part of the process.',
    author: 'Candidate',
    role: 'Software Engineer'
  },
  {
    quote:
      'Joe did a great job finding a role for me and negotiating the offer. I am very impressed with his skills and will definitely recommend him to others who are open to a job search.',
    author: 'Candidate',
    role: 'Platform Engineer'
  },
  {
    quote:
      'Joe has excellent communication skills and is fantastic to work with. He helped me find many opportunities and got me interviews with great companies. I highly recommend Joe and look forward to working with him again.',
    author: 'Candidate',
    role: 'Backend Engineer'
  },
  {
    quote:
      'It was great working with Joe. He is a true professional and understands customer needs. I will be pleased to work with him again if the need arises.',
    author: 'Candidate',
    role: 'Technical Candidate'
  }
];

export const clientLogos = [
  'Bloomberg',
  'Sony Interactive Entertainment',
  'Gap Inc',
  'Ripple',
  'MuleSoft',
  'TripAdvisor',
  'Zillow',
  'Postman',
  'Credit Karma',
  'Genentech',
  'Stitch Fix',
  'Harvard Medical',
  'LiveRamp',
  'BioMarin Pharmaceutical',
  'Paraform',
  'IPG Mediabrands',
  'Hachette Book Group',
  'Cengage Learning',
  'iRhythm Technologies',
  'Komodo Health',
  'Kyruus Health',
  'IFTTT',
  'Demandforce',
  'Realogy',
  'Brightcove',
  'BitMEX',
  'Sentient Technologies',
  'CloudCall',
  'Rue La La',
  'Juicero'
];

export const navGroups = [
  {
    title: 'Services',
    items: [
      { label: 'Overview', href: '#services-overview' },
      { label: 'Contingent Staffing', href: '#contingent-staffing' },
      { label: 'Retained Search', href: '#retained-search' },
      { label: 'For Hiring Managers', href: '#hiring-managers' },
      { label: 'For Job Seekers', href: '#for-job-seekers' }
    ]
  },
  {
    title: 'Proof',
    items: [
      { label: 'Client Testimonial', href: '#client-testimonial' },
      { label: 'Candidate Testimonials', href: '#candidate-testimonials' },
      { label: 'Peer Testimonial', href: '#peer-testimonial' },
      { label: 'Past Clients', href: '#past-clients' }
    ]
  },
  {
    title: 'About',
    items: [
      { label: 'Recruitment Process', href: '#recruitment-process' },
      { label: 'Philosophy', href: '#philosophy' },
      { label: 'Talent Bar', href: '#talent-bar' },
      { label: 'Recognitions', href: '#recognitions' }
    ]
  },
  {
    title: 'Contact',
    items: [
      { label: 'For Hiring Teams', href: '#contact-clients' },
      { label: 'For Job Seekers', href: '#contact-candidates' }
    ]
  }
];
