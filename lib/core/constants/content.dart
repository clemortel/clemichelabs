class AppContent {
  // Brand
  static const String brandName = 'ClemicheLabs';
  static const String tagline =
      'Micro-SaaS studio & CTO-for-hire\n'
      'building weird but profitable products.';
  static const String taglineSub =
      'Paris-based, shipping globally. '
      'We turn caffeine into production-ready code.';

  // Stats
  static const List<({String value, String label})> stats = [
    (value: '3+', label: 'Products Shipped'),
    (value: '10+', label: 'Years in Tech'),
    (value: '50+', label: 'Clients Served'),
    (value: '24h', label: 'Response Time'),
  ];

  // Nav items
  static const List<String> navItems = [
    'Services',
    'Portfolio',
    'About',
    'Process',
    'Contact',
  ];

  // Services
  static const List<ServiceItem> services = [
    ServiceItem(
      icon: '🧠',
      title: 'CTO-for-Hire',
      description:
          'Fractional CTO services for startups. '
          'Architecture reviews, tech strategy, team building, '
          'and hands-on leadership without the full-time price tag.',
      features: [
        'Tech stack audits',
        'Architecture design',
        'Team mentoring',
        'Investor-ready tech docs',
      ],
    ),
    ServiceItem(
      icon: '🚀',
      title: 'Micro-SaaS Studio',
      description:
          'We build, launch, and grow small but mighty SaaS products. '
          'From idea validation to MRR, we handle the full lifecycle.',
      features: [
        'Rapid prototyping',
        'MVP in 4 weeks',
        'Growth experiments',
        'Revenue optimization',
      ],
    ),
    ServiceItem(
      icon: '⚡',
      title: 'Automation & AI Systems',
      description:
          'Custom automation pipelines and AI-powered workflows. '
          'We make your ops faster and your data smarter.',
      features: [
        'LLM integration',
        'Workflow automation',
        'Data pipelines',
        'Custom AI agents',
      ],
    ),
  ];

  // Portfolio projects
  static const List<ProjectItem> projects = [
    ProjectItem(
      title: 'Diseed',
      url: 'https://diseed.fr',
      description:
          'AI-powered music discovery platform. '
          'Personalized recommendations that actually understand '
          'your taste beyond the algorithm bubble.',
      tags: ['Flutter', 'Firebase', 'AI/ML', 'Music Tech'],
      status: 'Live',
    ),
    ProjectItem(
      title: 'LineUpVote',
      url: 'https://lineupvote.app',
      description:
          'Festival group voting app. Coordinate festival lineups '
          'with your crew — vote, rank, and build the perfect '
          'schedule together.',
      tags: ['Flutter', 'Firebase', 'Real-time', 'Social'],
      status: 'Live',
    ),
    ProjectItem(
      title: 'CTO Operating System',
      url: null,
      description:
          'A comprehensive playbook and toolkit for fractional CTOs. '
          'Templates, frameworks, and automation for running '
          'multiple engagements.',
      tags: ['Notion', 'Automation', 'Consulting', 'AI'],
      status: 'Building',
    ),
  ];

  // Process steps
  static const List<ProcessStep> processSteps = [
    ProcessStep(
      number: '01',
      title: 'Deep-Dive Call',
      description:
          'We spend 60 minutes understanding your problem, '
          'market, and constraints. No sales pitch — just '
          'honest technical advice.',
    ),
    ProcessStep(
      number: '02',
      title: 'Rapid Prototype',
      description:
          'In 2-4 weeks, we build a working prototype that '
          'tests your core hypothesis. Real code, real users, '
          'real feedback.',
    ),
    ProcessStep(
      number: '03',
      title: 'Validate & Iterate',
      description:
          'We measure what matters, talk to users, and iterate '
          'fast. Data drives every decision — no vanity metrics.',
    ),
    ProcessStep(
      number: '04',
      title: 'Scale or Kill',
      description:
          'If it works, we scale it. If it doesn\'t, we kill it '
          'fast and move on. No ego, no sunk cost fallacy.',
    ),
  ];

  // About / Founder
  static const String founderName = 'Clement';
  static const String founderTitle = 'Founder & CTO — Indie Hacker, AI Builder';
  static const String founderBio =
      'Paris-based engineer with 10+ years building products '
      'at the intersection of code and creativity. '
      'Previously led engineering teams at startups, '
      'now building a portfolio of micro-SaaS products '
      'and helping founders ship faster as a fractional CTO.\n\n'
      'I believe in small teams, fast iterations, and products '
      'that solve real problems. When I\'m not coding, you\'ll '
      'find me at music festivals or diving into the latest '
      'AI research.';
  static const List<String> founderSkills = [
    'Flutter & Dart',
    'Firebase & GCP',
    'AI / LLM Integration',
    'System Architecture',
    'Product Strategy',
    'Team Leadership',
  ];

  // Testimonials (placeholder)
  static const List<TestimonialItem> testimonials = [
    TestimonialItem(
      quote:
          'Clement helped us go from idea to MVP in 3 weeks. '
          'His technical depth and product sense are rare to find '
          'in one person.',
      author: 'Alex R.',
      role: 'Founder, Stealth Startup',
    ),
    TestimonialItem(
      quote:
          'Working with ClemicheLabs transformed our tech stack. '
          'Clean architecture, fast delivery, and always available '
          'when we needed guidance.',
      author: 'Sarah M.',
      role: 'CEO, Music Tech Startup',
    ),
    TestimonialItem(
      quote:
          'The automation systems built by Clement saved us '
          '20+ hours per week. ROI was visible within the first '
          'month.',
      author: 'Thomas K.',
      role: 'Operations Lead, SaaS Company',
    ),
  ];

  // Contact
  static const String contactHeadline = 'Let\'s Build Something';
  static const String contactSub =
      'Got a project in mind? Drop a message and I\'ll get back '
      'to you within 24 hours.';
  static const String email = 'hello@clemichelabs.com';

  // Footer
  static const String footerText = '© 2026 ClemicheLabs. Paris, France.';
  static const String footerTagline = 'Building weird but profitable products.';
  static const String legalLink = 'Mentions légales';

  // Legal / Mentions légales
  static const List<LegalSection> legalSections = [
    LegalSection(
      title: 'Éditeur du site',
      body:
          'Clemiche Labs (activité individuelle)\n'
          'Nom : Clément Balanger\n'
          'Adresse : Paris, France\n'
          'E-mail : hello@clemichelabs.com',
    ),
    LegalSection(
      title: 'Responsable de la publication',
      body:
          'Clément Balanger, en qualité de responsable '
          'de l\'activité.',
    ),
    LegalSection(
      title: 'Hébergement',
      body:
          'Hébergeur : Firebase Hosting (Google LLC)\n'
          'Adresse : Google LLC, 1600 Amphitheatre '
          'Parkway, Mountain View, CA 94043, USA',
    ),
    LegalSection(
      title: 'Propriété intellectuelle',
      body:
          'Le contenu de ce site (textes, images, code, '
          'logo) est la propriété de Clemiche Labs, sauf '
          'mention contraire. Toute reproduction ou '
          'redistribution non autorisée est interdite.',
    ),
    LegalSection(
      title: 'Données personnelles',
      body:
          'Les données collectées via les formulaires '
          '(nom, e-mail, etc.) sont utilisées uniquement '
          'pour répondre aux demandes et communiquer sur '
          'les produits Clemiche Labs.\n\n'
          'Vous pouvez demander l\'accès, la rectification '
          'ou la suppression de vos données en écrivant '
          'à : hello@clemichelabs.com',
    ),
    LegalSection(
      title: 'Cookies',
      body:
          'Ce site peut utiliser des cookies techniques '
          'nécessaires à son fonctionnement. Vous pouvez '
          'configurer votre navigateur pour les refuser.',
    ),
  ];
}

class ServiceItem {
  final String icon;
  final String title;
  final String description;
  final List<String> features;

  const ServiceItem({
    required this.icon,
    required this.title,
    required this.description,
    required this.features,
  });
}

class ProjectItem {
  final String title;
  final String? url;
  final String description;
  final List<String> tags;
  final String status;

  const ProjectItem({
    required this.title,
    required this.url,
    required this.description,
    required this.tags,
    required this.status,
  });
}

class ProcessStep {
  final String number;
  final String title;
  final String description;

  const ProcessStep({
    required this.number,
    required this.title,
    required this.description,
  });
}

class TestimonialItem {
  final String quote;
  final String author;
  final String role;

  const TestimonialItem({
    required this.quote,
    required this.author,
    required this.role,
  });
}

class LegalSection {
  final String title;
  final String body;

  const LegalSection({required this.title, required this.body});
}
