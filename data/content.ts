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
    title: 'Agreement to Terms',
    body: 'By accessing or using ClemicheLabs products and services (including digital templates, boilerplates, and consulting services), you agree to be bound by these Terms of Service. If you do not agree, please do not use our products.',
  },
  {
    title: 'Use License',
    body: 'Upon purchase, you receive a non-exclusive, non-transferable license to use our digital products for personal or commercial projects. You may not resell, redistribute, or claim ownership of the original templates or boilerplates.',
  },
  {
    title: 'Products & Services',
    body: 'We offer digital products (Notion templates, code boilerplates), consulting services (fractional CTO), and micro-SaaS products. All products are delivered digitally. Services are rendered remotely unless otherwise agreed.',
  },
  {
    title: 'Intellectual Property',
    body: 'All content, code, designs, and materials provided by ClemicheLabs remain our intellectual property. You receive a license to use, not ownership. You may not reverse-engineer, decompile, or extract proprietary elements for redistribution.',
  },
  {
    title: 'User Responsibilities',
    body: 'You agree to use products and services lawfully and not to violate any applicable regulations. You are responsible for maintaining the confidentiality of any access credentials provided.',
  },
  {
    title: 'Limitation of Liability',
    body: 'ClemicheLabs products and services are provided "as is" without warranties of any kind. We are not liable for any indirect, incidental, or consequential damages arising from the use or inability to use our products.',
  },
  {
    title: 'Modifications to Terms',
    body: 'We reserve the right to modify these terms at any time. Continued use of our products after changes constitutes acceptance of the updated terms.',
  },
  {
    title: 'Governing Law',
    body: 'These terms are governed by French law. Any disputes will be subject to the exclusive jurisdiction of French courts.',
  },
  {
    title: 'Contact',
    body: 'For questions about these terms, contact us at hello@clemichelabs.com',
  },
] as const

export const privacyContent: readonly LegalSection[] = [
  {
    title: 'Information We Collect',
    body: 'We collect information you provide directly (name, email, project details via contact forms) and automatically (analytics data, browser type, device information, IP address).',
  },
  {
    title: 'How We Use Your Information',
    body: 'Personal information is used to:\n• Respond to inquiries and provide customer support\n• Deliver purchased products and services\n• Send product updates and marketing communications (with consent)\n• Improve our products and user experience\n• Comply with legal obligations',
  },
  {
    title: 'Data Storage & Security',
    body: 'Your data is stored securely using Firebase/Google Cloud Platform infrastructure. We implement industry-standard security measures, but no method of transmission over the internet is 100% secure.',
  },
  {
    title: 'Third-Party Services',
    body: 'We use third-party services for analytics (Google Analytics), hosting (Firebase), and payments. These services have their own privacy policies and may collect data independently.',
  },
  {
    title: 'Cookies & Tracking',
    body: 'We use cookies and similar technologies for analytics and functionality. You can control cookie preferences through your browser settings.',
  },
  {
    title: 'Data Retention',
    body: 'We retain personal data only as long as necessary to fulfill the purposes outlined in this policy or as required by law. Contact data from inquiries is typically retained for 2 years.',
  },
  {
    title: 'Your Rights (GDPR)',
    body: 'Under GDPR, you have the right to:\n• Access your personal data\n• Rectify inaccurate data\n• Request deletion of your data\n• Object to processing\n• Data portability\n• Withdraw consent at any time\n\nTo exercise these rights, email hello@clemichelabs.com',
  },
  {
    title: 'International Data Transfers',
    body: 'Your data may be transferred to and processed in countries outside the EU (e.g., USA via Google Cloud). We ensure adequate safeguards are in place for such transfers.',
  },
  {
    title: 'Changes to This Policy',
    body: 'We may update this privacy policy periodically. Significant changes will be communicated via email or website notice.',
  },
  {
    title: 'Contact',
    body: 'For privacy-related questions or to exercise your rights, contact us at hello@clemichelabs.com',
  },
] as const

export const refundsContent: readonly LegalSection[] = [
  {
    title: 'Digital Products (Templates, Boilerplates)',
    body: 'Due to the nature of digital products, all sales are final once you have received access to the files. We cannot offer refunds for downloaded templates or boilerplates.',
  },
  {
    title: 'Quality Guarantee',
    body: 'We stand behind the quality of our products. If a digital product is defective, incomplete, or significantly misrepresented, contact us within 7 days of purchase at hello@clemichelabs.com with details. We will work to resolve the issue or provide a replacement.',
  },
  {
    title: 'Consulting Services (CTO-for-Hire)',
    body: 'Consulting services are billed based on agreed terms (hourly, project-based, or retainer). Refunds are not provided for completed work. If you are unsatisfied with ongoing work, you may terminate the engagement with 14 days notice, and will only be charged for work completed up to that point.',
  },
  {
    title: 'SaaS Products',
    body: 'For subscription-based SaaS products (if applicable), you may cancel your subscription at any time. Cancellations take effect at the end of the current billing period. No refunds are provided for partial billing periods.',
  },
  {
    title: 'Exceptions',
    body: 'Refunds may be considered on a case-by-case basis in exceptional circumstances (e.g., technical issues preventing product use, duplicate purchases). Contact hello@clemichelabs.com with your order details.',
  },
  {
    title: 'Processing Time',
    body: 'If a refund is approved, it will be processed within 7-10 business days to the original payment method.',
  },
  {
    title: 'Chargebacks',
    body: 'If you file a chargeback or payment dispute without first contacting us, your access to all ClemicheLabs products and services will be immediately revoked, and you will be banned from future purchases.',
  },
  {
    title: 'Contact',
    body: 'For refund requests or questions, email hello@clemichelabs.com with your order details and a clear explanation of the issue.',
  },
] as const
