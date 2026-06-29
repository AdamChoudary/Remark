export interface JobOpening {
  id: string;
  title: string;
  department: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  location: string;
  remote: boolean;
  description: string;
  requirements: string[];
  niceToHave: string[];
}

export const jobOpenings: JobOpening[] = [
  {
    id: '01',
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Islamabad',
    remote: true,
    description: 'We are looking for a senior frontend developer who can craft exceptional web experiences. You will work across client projects, our own platform, and internal tools.',
    requirements: [
      '5+ years of experience in frontend development',
      'Expert-level React, TypeScript, and Next.js',
      'Strong understanding of web performance and Core Web Vitals',
      'Experience with GSAP, Framer Motion, or similar animation libraries',
      'Eye for design and attention to detail',
    ],
    niceToHave: [
      'Experience with Three.js or WebGL',
      'Familiarity with design tools (Figma, Spline)',
      'Open source contributions',
      'Experience with Tailwind CSS and CSS-in-JS',
    ],
  },
  {
    id: '02',
    title: 'UI/UX Designer',
    department: 'Design',
    type: 'Full-time',
    location: 'Islamabad',
    remote: true,
    description: 'We need a designer who thinks in systems, not screens. You will define visual languages, build component libraries, and create cohesive brand experiences.',
    requirements: [
      '4+ years of experience in UI/UX design',
      'Strong portfolio demonstrating editorial-grade web design',
      'Proficiency in Figma and prototyping tools',
      'Understanding of typography, color theory, and layout',
      'Experience with design systems and component libraries',
    ],
    niceToHave: [
      'Motion design skills (After Effects, Lottie)',
      'Basic frontend knowledge (HTML, CSS)',
      'Experience in branding and identity',
      'Photography or art direction background',
    ],
  },
  {
    id: '03',
    title: 'Full-Stack Developer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Islamabad',
    remote: true,
    description: 'You will build end-to-end solutions spanning web applications, AI integrations, and business systems. Comfort across the stack is essential.',
    requirements: [
      '4+ years of full-stack development experience',
      'Proficiency in React, Node.js, and TypeScript',
      'Experience with databases (PostgreSQL, MongoDB)',
      'API design and RESTful service architecture',
      'Understanding of cloud infrastructure (AWS, Vercel)',
    ],
    niceToHave: [
      'Experience with AI/ML integrations',
      'Knowledge of CRM/ERP systems',
      'DevOps and CI/CD experience',
      'GraphQL experience',
    ],
  },
  {
    id: '04',
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    type: 'Full-time',
    location: 'Islamabad',
    remote: false,
    description: 'Drive measurable growth for both our agency and our clients through data-informed marketing strategies across all digital channels.',
    requirements: [
      '3+ years of digital marketing experience',
      'Proven track record with SEO, SEM, and paid advertising',
      'Experience with analytics platforms (Google Analytics, Search Console)',
      'Content strategy and copywriting skills',
      'Social media management experience',
    ],
    niceToHave: [
      'Experience in the agency world',
      'Knowledge of marketing automation tools',
      'Video marketing experience',
      'Email marketing and CRM tools',
    ],
  },
  {
    id: '05',
    title: 'AI Solutions Engineer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Islamabad',
    remote: true,
    description: 'Design and deploy AI-powered solutions including voice agents, chatbots, and intelligent automation systems for our clients.',
    requirements: [
      '3+ years of experience with AI/ML technologies',
      'Experience with NLP and conversational AI',
      'Proficiency in Python and JavaScript',
      'Experience deploying AI solutions to production',
      'Understanding of LLMs and prompt engineering',
    ],
    niceToHave: [
      'Experience with voice AI (Twilio, Vapi)',
      'Knowledge of RAG architectures',
      'Experience with vector databases',
      'Published research or contributions to AI/ML',
    ],
  },
  {
    id: '06',
    title: 'Video Editor & Motion Designer',
    department: 'Creative',
    type: 'Full-time',
    location: 'Islamabad',
    remote: false,
    description: 'Create compelling video content from concept to final delivery. You will handle post-production for client projects and our own brand content.',
    requirements: [
      '3+ years of video editing experience',
      'Proficiency in Premiere Pro, After Effects, and DaVinci Resolve',
      'Strong sense of pacing, sound design, and color grading',
      'Motion graphics and animation skills',
      'Portfolio demonstrating commercial work',
    ],
    niceToHave: [
      'Experience with 3D software (Blender, Cinema 4D)',
      'Photography skills',
      'Experience with social media content',
      'Direction and scripting experience',
    ],
  },
];

export const departments = [
  'Engineering',
  'Design',
  'Marketing',
  'Creative',
];

export const perks = [
  { title: 'Remote-First', description: 'Work from anywhere. We trust you to deliver.' },
  { title: 'Flexible Hours', description: 'No fixed 9-5. Results over hours.' },
  { title: 'Learning Budget', description: 'Annual stipend for courses, conferences, and books.' },
  { title: 'Equipment Setup', description: 'Get the tools you need to do your best work.' },
  { title: 'Health Coverage', description: 'Comprehensive health insurance for you and your family.' },
  { title: 'Annual Retreat', description: 'Team gatherings to collaborate and connect in person.' },
];
