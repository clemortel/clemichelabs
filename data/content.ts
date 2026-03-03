import type {
  StatItem,
  ServiceItem,
  ProjectItem,
  ProcessStep,
  TestimonialItem,
  LegalSection,
} from '~/types/content'

export const brandName: string = 'ClemicheLabs'

export const tagline: string =
  'Micro-SaaS studio & CTO-for-hire\nbuilding weird but profitable products.'

export const taglineSub: string =
  'Paris-based, shipping globally. We turn caffeine into production-ready code.'

export const stats: readonly StatItem[] = [
  { value: '3+', label: 'Products Shipped' },
  { value: '10+', label: 'Years in Tech' },
  { value: '50+', label: 'Clients Served' },
  { value: '24h', label: 'Response Time' },
] as const

export const navItems: readonly string[] = [
  'Services',
  'Portfolio',
  'About',
  'Process',
  'Contact',
] as const

export const services: readonly ServiceItem[] = [
  {
    icon: 'heroicons:cpu-chip',
    title: 'CTO-for-Hire',
    description:
      'Fractional CTO services for startups. Architecture reviews, tech strategy, team building, and hands-on leadership without the full-time price tag.',
    features: [
      'Tech stack audits',
      'Architecture design',
      'Team mentoring',
      'Investor-ready tech docs',
    ],
  },
  {
    icon: 'heroicons:rocket-launch',
    title: 'Micro-SaaS Studio',
    description:
      'We build, launch, and grow small but mighty SaaS products. From idea validation to MRR, we handle the full lifecycle.',
    features: [
      'Rapid prototyping',
      'MVP in 4 weeks',
      'Growth experiments',
      'Revenue optimization',
    ],
  },
  {
    icon: 'heroicons:bolt',
    title: 'Automation & AI Systems',
    description:
      'Custom automation pipelines and AI-powered workflows. We make your ops faster and your data smarter.',
    features: [
      'LLM integration',
      'Workflow automation',
      'Data pipelines',
      'Custom AI agents',
    ],
  },
] as const

export const projects: readonly ProjectItem[] = [
  {
    title: 'Diseed',
    url: 'https://diseed.fr',
    description:
      'AI-powered music discovery platform. Personalized recommendations that actually understand your taste beyond the algorithm bubble.',
    tags: ['Flutter', 'Firebase', 'AI/ML', 'Music Tech'],
    status: 'Live',
  },
  {
    title: 'LineUpVote',
    url: 'https://lineupvote.app',
    description:
      'Festival group voting app. Coordinate festival lineups with your crew — vote, rank, and build the perfect schedule together.',
    tags: ['Flutter', 'Firebase', 'Real-time', 'Social'],
    status: 'Live',
  },
  {
    title: 'CTO Operating System',
    url: null,
    description:
      'A comprehensive playbook and toolkit for fractional CTOs. Templates, frameworks, and automation for running multiple engagements.',
    tags: ['Notion', 'Automation', 'Consulting', 'AI'],
    status: 'Building',
  },
] as const

export const processSteps: readonly ProcessStep[] = [
  {
    number: '01',
    title: 'Deep-Dive Call',
    description:
      'We spend 60 minutes understanding your problem, market, and constraints. No sales pitch — just honest technical advice.',
  },
  {
    number: '02',
    title: 'Rapid Prototype',
    description:
      'In 2-4 weeks, we build a working prototype that tests your core hypothesis. Real code, real users, real feedback.',
  },
  {
    number: '03',
    title: 'Validate & Iterate',
    description:
      'We measure what matters, talk to users, and iterate fast. Data drives every decision — no vanity metrics.',
  },
  {
    number: '04',
    title: 'Scale or Kill',
    description:
      "If it works, we scale it. If it doesn't, we kill it fast and move on. No ego, no sunk cost fallacy.",
  },
] as const

export const founderName: string = 'Clement'
export const founderTitle: string = 'Founder & CTO — Indie Hacker, AI Builder'
export const founderBio: string =
  'Paris-based engineer with 10+ years building products at the intersection of code and creativity. Previously led engineering teams at startups, now building a portfolio of micro-SaaS products and helping founders ship faster as a fractional CTO.\n\nI believe in small teams, fast iterations, and products that solve real problems. When I\'m not coding, you\'ll find me at music festivals or diving into the latest AI research.'
export const founderSkills: readonly string[] = [
  'Flutter & Dart',
  'Firebase & GCP',
  'AI / LLM Integration',
  'System Architecture',
  'Product Strategy',
  'Team Leadership',
] as const

export const testimonials: readonly TestimonialItem[] = [
  {
    quote:
      'Clement helped us go from idea to MVP in 3 weeks. His technical depth and product sense are rare to find in one person.',
    author: 'Alex R.',
    role: 'Founder, Stealth Startup',
  },
  {
    quote:
      'Working with ClemicheLabs transformed our tech stack. Clean architecture, fast delivery, and always available when we needed guidance.',
    author: 'Sarah M.',
    role: 'CEO, Music Tech Startup',
  },
  {
    quote:
      'The automation systems built by Clement saved us 20+ hours per week. ROI was visible within the first month.',
    author: 'Thomas K.',
    role: 'Operations Lead, SaaS Company',
  },
] as const

export const contactHeadline: string = "Let's Build Something"
export const contactSub: string =
  "Got a project in mind? Drop a message and I'll get back to you within 24 hours."
export const email: string = 'hello@clemichelabs.com'

export const footerText: string = '\u00A9 2026 ClemicheLabs. Paris, France.'
export const footerTagline: string = 'Building weird but profitable products.'
export const legalLink: string = 'Mentions l\u00E9gales'

export const legalSections: readonly LegalSection[] = [
  {
    title: '\u00C9diteur du site',
    body: 'Clemiche Labs (activit\u00E9 individuelle)\nNom : Cl\u00E9ment Balanger\nAdresse : Paris, France\nE-mail : hello@clemichelabs.com',
  },
  {
    title: 'Responsable de la publication',
    body: "Cl\u00E9ment Balanger, en qualit\u00E9 de responsable de l'activit\u00E9.",
  },
  {
    title: 'H\u00E9bergement',
    body: 'H\u00E9bergeur : Firebase Hosting (Google LLC)\nAdresse : Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA',
  },
  {
    title: 'Propri\u00E9t\u00E9 intellectuelle',
    body: 'Le contenu de ce site (textes, images, code, logo) est la propri\u00E9t\u00E9 de Clemiche Labs, sauf mention contraire. Toute reproduction ou redistribution non autoris\u00E9e est interdite.',
  },
  {
    title: 'Donn\u00E9es personnelles',
    body: "Les donn\u00E9es collect\u00E9es via les formulaires (nom, e-mail, etc.) sont utilis\u00E9es uniquement pour r\u00E9pondre aux demandes et communiquer sur les produits Clemiche Labs.\n\nVous pouvez demander l'acc\u00E8s, la rectification ou la suppression de vos donn\u00E9es en \u00E9crivant \u00E0 : hello@clemichelabs.com",
  },
  {
    title: 'Cookies',
    body: 'Ce site peut utiliser des cookies techniques n\u00E9cessaires \u00E0 son fonctionnement. Vous pouvez configurer votre navigateur pour les refuser.',
  },
] as const

export const termsContent: readonly LegalSection[] = [
  {
    title: 'Effective',
    body: 'March 3, 2026',
  },
  {
    title: '1. Acceptance',
    body: 'By purchasing digital products from ClemicheLabs, you agree to these terms.',
  },
  {
    title: '2. Digital Products',
    body: 'All sales are final. Products are delivered as downloadable files (Notion templates, boilerplates, ZIP archives).',
  },
  {
    title: '3. License',
    body: 'Personal and commercial use allowed. No resale or redistribution of the original templates.',
  },
  {
    title: '4. Contact',
    body: 'contact@clemichelabs.com',
  },
] as const

export const privacyContent: readonly LegalSection[] = [
  {
    title: 'Data Collection',
    body: 'We collect minimal data for order processing (email, payment info via payment providers).',
  },
  {
    title: 'Storage',
    body: 'Contact form submissions are stored in Firebase. No personal data is stored long-term.',
  },
  {
    title: 'Compliance',
    body: 'Compliant with GDPR/CCPA. You can request data deletion at any time.',
  },
  {
    title: 'Contact',
    body: 'contact@clemichelabs.com',
  },
] as const

export const refundsContent: readonly LegalSection[] = [
  {
    title: 'Policy',
    body: 'Digital products are non-refundable once delivered.',
  },
  {
    title: 'Defective Products',
    body: 'If a product is defective or significantly misrepresented, contact us within 7 days for a replacement.',
  },
  {
    title: 'Contact',
    body: 'contact@clemichelabs.com',
  },
] as const
