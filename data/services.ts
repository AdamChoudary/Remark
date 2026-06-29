export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  metric: string;
  desc: string;
}

export interface WorkItem {
  index: string;
  title: string;
  category: string;
  metric: string;
  href: string;
  description: string;
}

export const services: ServiceItem[] = [
  { id: '01', title: 'Website Development', category: 'Web Solutions', metric: '50+ Projects', desc: 'Custom-built, high-conversion websites for property listings, portfolios, businesses, and SaaS platforms optimized for SEO and modern speed standards.' },
  { id: '02', title: 'Digital Marketing', category: 'Growth Marketing', metric: '200+ Campaigns', desc: 'Data-driven performance marketing campaigns designed to scale brand awareness, maximize conversion rates, and deliver high ROI.' },
  { id: '03', title: 'Social Media Management', category: 'Social & Brand', metric: '100+ Brands', desc: 'End-to-end management of your social footprint, crafting custom aesthetics, strategic schedules, and active community engagement.' },
  { id: '04', title: 'Graphic Designing', category: 'Visual Arts', metric: '500+ Designs', desc: 'High-fidelity vector designs, bespoke visual elements, and stunning brand layouts engineered for modern digital and print media.' },
  { id: '05', title: 'Video Production', category: 'Media Production', metric: '300+ Films', desc: 'Professional film production, scripting, and direction for luxury brand commercials, corporate profiles, and promotional media.' },
  { id: '06', title: 'Video Editing', category: 'Post-Production', metric: '1000+ Edits', desc: 'Premium post-production involving cinematic pacing, precise sound design, professional color grading, and dynamic visual effects.' },
  { id: '07', title: 'Branding & Identity', category: 'Brand Architecture', metric: '80+ Brands', desc: 'Developing core visual assets, unified design systems, brand guidelines, and unique logo architectures that establish creative authority.' },
  { id: '08', title: 'Event Management', category: 'Experiential', metric: '60+ Events', desc: 'Seamless coordination and design of corporate conferences, product launches, and luxury brand experiences from concept to execution.' },
  { id: '09', title: 'Content Creation', category: 'Creative Content', metric: '2000+ Assets', desc: 'Bespoke copywriting, captivating imagery, and multi-channel storytelling tailored to resonate with target audiences and drive action.' },
  { id: '10', title: 'Printing & Materials', category: 'Print', metric: '1000+ Prints', desc: 'Premium-grade print architecture, including custom business cards, brochures, posters, and tangible marketing collateral with exquisite finishes.' },
  { id: '11', title: 'Photography', category: 'Studio', metric: '500+ Shoots', desc: 'Ultra-high-definition product and lifestyle photography using studio lighting and editorial staging to present items in their best light.' },
  { id: '12', title: 'Advertising', category: 'Campaigns', metric: '150+ Campaigns', desc: 'Targeted, multi-channel advertising strategy designed to secure premium leads, amplify campaign reach, and track user attribution.' },
  { id: '13', title: 'AI Voice Agents', category: 'Voice AI', metric: '200+ Deployments', desc: 'Intelligent voice agents for automated customer support, seamless call handling, helpline routing, and targeted marketing campaigns.' },
  { id: '14', title: 'Smart Chat Bots', category: 'Conversational AI', metric: '300+ Bots', desc: 'AI-powered conversational chatbots providing 24/7 client support, intelligent user guidance, and instant lead capture across platforms.' },
  { id: '15', title: 'CRM & ERP', category: 'Business Systems', metric: '30+ Systems', desc: 'Complete CRM & ERP implementation and management to streamline operations, boost productivity, and drive growth.' },
];

export const categories = [
  'Digital Presence',
  'Creative Craft',
  'Brand & Experience',
  'Tactical Growth',
  'Intelligent Systems',
];

export const workItems: WorkItem[] = [
  { index: '01', title: 'WEBSITE DEVELOPMENT', category: 'Web Solutions', metric: '50+ Projects', href: '#contact', description: 'Custom-built, high-conversion websites for property listings, portfolios, businesses, and SaaS platforms optimized for SEO and modern speed standards.' },
  { index: '02', title: 'DIGITAL MARKETING', category: 'Growth Marketing', metric: 'SEO • SEM • PPC', href: '#contact', description: 'Data-driven performance marketing campaigns designed to scale brand awareness, maximize conversion rates, and deliver high ROI.' },
  { index: '03', title: 'SOCIAL MEDIA MANAGEMENT', category: 'Social & Brand', metric: 'Strategy • Curation', href: '#contact', description: 'End-to-end management of your social footprint, crafting custom aesthetics, strategic schedules, and active community engagement.' },
  { index: '04', title: 'GRAPHIC DESIGNING', category: 'Visual Arts', metric: 'Vector • UI • Print', href: '#contact', description: 'High-fidelity vector designs, bespoke visual elements, and stunning brand layouts engineered for modern digital and print media.' },
  { index: '05', title: 'VIDEO PRODUCTION', category: 'Media Production', metric: 'Shoots • Direction', href: '#contact', description: 'Professional film production, scripting, and direction for luxury brand commercials, corporate profiles, and promotional media.' },
  { index: '06', title: 'VIDEO EDITING', category: 'Post-Production', metric: 'Cinematic • VFX', href: '#contact', description: 'Premium post-production involving cinematic pacing, precise sound design, professional color grading, and dynamic visual effects.' },
  { index: '07', title: 'BRANDING & IDENTITY', category: 'Brand Architecture', metric: 'Logo • Guidelines', href: '#contact', description: 'Developing core visual assets, unified design systems, brand guidelines, and unique logo architectures that establish creative authority.' },
  { index: '08', title: 'EVENT MANAGEMENT', category: 'Experiential', metric: 'Planning • Execution', href: '#contact', description: 'Seamless coordination and design of corporate conferences, product launches, and luxury brand experiences from concept to execution.' },
  { index: '09', title: 'CONTENT CREATION', category: 'Creative Content', metric: 'Copy • Visuals', href: '#contact', description: 'Bespoke copywriting, captivating imagery, and multi-channel storytelling tailored to resonate with target audiences and drive action.' },
  { index: '10', title: 'PRINT & MARKETING', category: 'Print Architecture', metric: 'Custom Print', href: '#contact', description: 'Premium-grade print architecture, including custom business cards, brochures, posters, and tangible marketing collateral with exquisite finishes.' },
  { index: '11', title: 'PHOTOGRAPHY & SHOOTS', category: 'Studio Photography', metric: 'Commercial • Studio', href: '#contact', description: 'Ultra-high-definition product and lifestyle photography using studio lighting and editorial staging to present items in their best light.' },
  { index: '12', title: 'ADVERTISING & PROMOTION', category: 'Campaign Strategy', metric: 'Omnichannel', href: '#contact', description: 'Targeted, multi-channel advertising strategy designed to secure premium leads, amplify campaign reach, and track user attribution.' },
  { index: '13', title: 'AI VOICE AGENTS', category: 'Voice Intelligence', metric: 'Support • Handling', href: '#contact', description: 'Intelligent voice agents for automated customer support, seamless call handling, helpline routing, and targeted marketing campaigns.' },
  { index: '14', title: 'SMART CHAT BOTS', category: 'Conversational AI', metric: '24/7 Support', href: '#contact', description: 'AI-powered conversational chatbots providing 24/7 client support, intelligent user guidance, and instant lead capture across platforms.' },
  { index: '15', title: 'CRM & ERP MANAGEMENT', category: 'Business Systems', metric: 'End-to-End', href: '#contact', description: 'Complete CRM & ERP implementation and management to streamline operations, boost productivity, and drive growth.' },
];
