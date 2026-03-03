import type {
  StatItem,
  ServiceItem,
  ProjectItem,
  ProcessStep,
  TestimonialItem,
  LegalSection,
  PricingItem,
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
    title: 'Effective Date',
    body: 'March 3, 2026',
  },
  {
    title: '1. Agreement to Terms',
    body: 'By accessing or purchasing products and services from ClemicheLabs (the "Service"), you agree to be bound by these Terms of Service. If you do not agree, do not use the Service. We reserve the right to modify these terms at any time. Continued use after changes constitutes acceptance.',
  },
  {
    title: '2. Description of Services',
    body: 'ClemicheLabs offers digital products (including but not limited to code templates, boilerplates, Notion templates, and design assets), software-as-a-service applications, and consulting services. Services are provided remotely and delivered digitally unless otherwise specified.',
  },
  {
    title: '3. License Grant',
    body: 'Upon purchase, you receive a non-exclusive, non-transferable, non-sublicensable license to use our digital products. You may:\n• Use products for personal and commercial projects\n• Modify products for your own use\n• Use in client projects (end products only)\n\nYou may NOT:\n• Resell, redistribute, or share the original files\n• Claim ownership or authorship of the products\n• Extract components to create competing products\n• Use products in more than one project simultaneously without additional licenses (where applicable)',
  },
  {
    title: '4. Account & Subscriptions',
    body: 'For subscription-based services, you agree to provide accurate account information and maintain its confidentiality. Subscriptions automatically renew unless canceled before the renewal date. You are responsible for all activity under your account. We reserve the right to suspend or terminate accounts that violate these terms.',
  },
  {
    title: '5. Payment & Billing',
    body: 'All fees are in the currency specified at checkout. Payment is processed through third-party providers (Stripe, Paddle, or others). You agree to pay all charges incurred. For subscriptions, billing occurs automatically on renewal dates. Price changes will be communicated 30 days in advance.',
  },
  {
    title: '6. Intellectual Property',
    body: 'All content, code, designs, trademarks, and materials provided by ClemicheLabs remain our exclusive property. Your license grants usage rights, not ownership. You retain ownership of any content you create using our products, but cannot claim ownership of the underlying product itself.',
  },
  {
    title: '7. Prohibited Uses',
    body: 'You may not:\n• Violate any laws or regulations\n• Infringe on intellectual property rights\n• Transmit malware or harmful code\n• Attempt to reverse engineer, decompile, or extract source code\n• Use products to create direct competitive offerings\n• Share account credentials or access with unauthorized parties',
  },
  {
    title: '8. Warranties & Disclaimers',
    body: 'THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. We do not guarantee uninterrupted, error-free, or secure operation. We are not responsible for third-party integrations, hosting issues, or compatibility with your specific environment. Use is at your own risk.',
  },
  {
    title: '9. Limitation of Liability',
    body: 'To the maximum extent permitted by law, ClemicheLabs shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities. Our total liability shall not exceed the amount paid by you in the 12 months preceding the claim.',
  },
  {
    title: '10. Termination',
    body: 'We may suspend or terminate your access immediately for violations of these terms, without refund. Upon termination, all licenses granted to you cease, and you must stop using all products. Provisions regarding intellectual property, warranties, and liability survive termination.',
  },
  {
    title: '11. Governing Law & Disputes',
    body: 'These terms are governed by French law. Any disputes shall be subject to the exclusive jurisdiction of the courts of Paris, France. You agree to attempt good-faith resolution before initiating legal proceedings.',
  },
  {
    title: '12. Contact',
    body: 'For questions regarding these terms, contact: contact@clemichelabs.com',
  },
] as const

export const privacyContent: readonly LegalSection[] = [
  {
    title: 'Effective Date',
    body: 'March 3, 2026',
  },
  {
    title: '1. Information We Collect',
    body: 'We collect information you provide directly:\n• Contact information (name, email) via forms\n• Account details (username, profile info) for subscription services\n• Payment information (processed by third-party providers, not stored by us)\n• Communications (emails, support messages)\n\nWe automatically collect:\n• Usage data (pages visited, features used, timestamps)\n• Device information (browser type, IP address, operating system)\n• Cookies and tracking technologies (analytics, preferences)',
  },
  {
    title: '2. How We Use Your Information',
    body: 'Your information is used to:\n• Process purchases and deliver products\n• Provide customer support and respond to inquiries\n• Send transactional emails (receipts, account updates)\n• Send marketing communications (with your consent, opt-out anytime)\n• Improve our products and user experience\n• Detect and prevent fraud or abuse\n• Comply with legal obligations',
  },
  {
    title: '3. Legal Basis for Processing (GDPR)',
    body: 'We process your data based on:\n• Contract performance (delivering products you purchased)\n• Legitimate interests (improving services, fraud prevention)\n• Consent (marketing emails, analytics cookies)\n• Legal obligations (tax records, financial compliance)',
  },
  {
    title: '4. Data Sharing & Third Parties',
    body: 'We share data with:\n• Payment processors (Stripe, Paddle) for transaction processing\n• Hosting providers (Firebase, Google Cloud Platform) for infrastructure\n• Analytics services (Google Analytics) for usage insights\n• Email services (for transactional and marketing emails)\n\nWe do not sell your personal data. Third parties are bound by contracts to protect your information.',
  },
  {
    title: '5. Cookies & Tracking',
    body: 'We use cookies for:\n• Essential functions (authentication, preferences)\n• Analytics (understanding user behavior)\n• Performance (optimizing loading times)\n\nYou can control cookies via browser settings. Disabling cookies may limit functionality.',
  },
  {
    title: '6. Data Retention',
    body: 'We retain personal data only as long as necessary:\n• Contact form submissions: 2 years\n• Purchase records: 7 years (tax compliance)\n• Account data: Until account deletion is requested\n• Analytics data: 14 months (anonymized)\n\nYou can request deletion at any time (subject to legal retention requirements).',
  },
  {
    title: '7. Your Rights (GDPR/CCPA)',
    body: 'You have the right to:\n• Access your personal data\n• Rectify inaccurate information\n• Request deletion ("right to be forgotten")\n• Object to processing or restrict it\n• Data portability (receive your data in a structured format)\n• Withdraw consent at any time\n• Lodge a complaint with a supervisory authority (CNIL in France)\n\nTo exercise your rights, email: contact@clemichelabs.com',
  },
  {
    title: '8. International Data Transfers',
    body: 'Your data may be transferred to and processed in countries outside the EU (e.g., USA via Google Cloud). We ensure adequate safeguards through:\n• Standard Contractual Clauses (SCCs)\n• Adequacy decisions by the European Commission\n• Processor agreements with data protection obligations',
  },
  {
    title: '9. Security',
    body: 'We implement industry-standard security measures including encryption (HTTPS/TLS), access controls, and regular security audits. However, no method of transmission over the internet is 100% secure. You are responsible for maintaining the confidentiality of your account credentials.',
  },
  {
    title: '10. Children\'s Privacy',
    body: 'Our services are not directed to individuals under 16. We do not knowingly collect data from children. If you believe we have collected data from a child, contact us immediately for deletion.',
  },
  {
    title: '11. Changes to This Policy',
    body: 'We may update this policy periodically. Significant changes will be communicated via email or website notice 30 days in advance. Continued use after changes constitutes acceptance.',
  },
  {
    title: '12. Contact & Data Protection Officer',
    body: 'For privacy inquiries or to exercise your rights:\nEmail: contact@clemichelabs.com\nSubject: "Privacy Request"\n\nClémicheLabs\nParis, France',
  },
] as const

export const refundsContent: readonly LegalSection[] = [
  {
    title: 'Effective Date',
    body: 'March 3, 2026',
  },
  {
    title: '1. General Policy',
    body: 'Due to the nature of digital products and services, refunds are subject to the specific terms outlined below. All sales are final unless otherwise stated. We encourage you to review product descriptions carefully before purchase.',
  },
  {
    title: '2. Digital Products (Templates, Boilerplates, Assets)',
    body: 'Digital products are non-refundable once access has been granted or files have been downloaded. This includes:\n• Code templates and boilerplates\n• Notion templates and digital documents\n• Design assets and downloadable files\n\nSince digital products cannot be "returned," all sales are final upon delivery.',
  },
  {
    title: '3. Quality Guarantee for Digital Products',
    body: 'If a digital product is defective, incomplete, or significantly misrepresented:\n• Contact us within 7 days of purchase\n• Provide your order number and detailed description of the issue\n• Include screenshots or documentation of the problem\n\nWe will investigate and may offer:\n• A replacement or updated version\n• Technical support to resolve the issue\n• A refund in exceptional cases (at our discretion)\n\nChange of mind, lack of technical skills, or undisclosed feature expectations are not valid grounds for refunds.',
  },
  {
    title: '4. Subscription Services (SaaS Products)',
    body: 'For subscription-based services:\n• You may cancel your subscription at any time\n• Cancellations take effect at the end of the current billing period\n• No refunds are provided for partial billing periods\n• Access continues until the end of the paid period\n\nIf you are dissatisfied with a subscription service within the first 14 days, contact us for a potential refund (evaluated case-by-case).',
  },
  {
    title: '5. Consulting Services',
    body: 'For consulting and fractional CTO services:\n• Refunds are not provided for completed work or time already rendered\n• If you are unsatisfied with ongoing work, you may terminate the engagement with 14 days notice\n• You will only be charged for work completed up to the termination date\n• Deposits are non-refundable once work has commenced',
  },
  {
    title: '6. Duplicate Purchases & Technical Issues',
    body: 'If you:\n• Accidentally purchased the same product twice\n• Experienced a payment error resulting in duplicate charges\n• Did not receive access to your product due to technical issues\n\nContact us immediately at contact@clemichelabs.com with your order details. We will resolve the issue or process a refund.',
  },
  {
    title: '7. How to Request a Refund',
    body: 'To request a refund:\n1. Email: contact@clemichelabs.com\n2. Subject: "Refund Request - [Order Number]"\n3. Include: Order number, product name, reason for request, supporting documentation\n\nRequests are reviewed within 2-3 business days. We may request additional information to process your claim.',
  },
  {
    title: '8. Refund Processing Time',
    body: 'If a refund is approved:\n• Processing time: 5-7 business days\n• Refunded to original payment method\n• You may be required to confirm deletion of downloaded files or cease use of the product\n\nPayment processor fees are non-refundable.',
  },
  {
    title: '9. Chargebacks & Disputes',
    body: 'If you file a chargeback or payment dispute without first contacting us:\n• Your access to all ClemicheLabs products and services will be immediately revoked\n• You will be banned from future purchases\n• We reserve the right to pursue legal action for fraudulent chargebacks\n\nPlease contact us directly before initiating a dispute. We are committed to resolving issues fairly.',
  },
  {
    title: '10. Exceptions & Discretionary Refunds',
    body: 'In exceptional circumstances (e.g., severe technical defects, misrepresentation, extenuating personal circumstances), we may offer refunds at our sole discretion. Each case is evaluated individually. Contact us with full details for consideration.',
  },
  {
    title: '11. EU Consumer Rights (14-Day Withdrawal)',
    body: 'Under EU law, consumers have a 14-day right of withdrawal for online purchases. However, you explicitly waive this right when downloading digital content, as delivery begins immediately. By completing your purchase, you acknowledge and agree to this waiver.',
  },
  {
    title: '12. Contact',
    body: 'For refund requests or questions:\nEmail: contact@clemichelabs.com\nSubject: "Refund Request"\n\nInclude your order number and a clear explanation of the issue.',
  },
] as const

export const pricingItems: readonly PricingItem[] = [
  {
    name: 'Solo CTO-OS Notion Workspace',
    price: '29€',
    paddleProductId: 'solo-cto-os',
  },
  {
    name: 'CTO OS Developer Boilerplate',
    price: '49€',
    paddleProductId: 'cto-os-boilerplate',
  },
] as const
