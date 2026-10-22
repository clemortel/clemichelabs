import type {
  NavLink,
  HeroFact,
  OfferItem,
  WorkItem,
  MethodStep,
  TimelineItem,
  SkillGroup,
  FaqItem,
  ExternalLink,
  FormLabels,
} from '~/types/content'

export const brandName: string = 'Clemiche Labs'
export const personName: string = 'Clément Balanger'
export const siteUrl: string = 'https://clemichelabs.com'

export const siteTitle: string =
  'Clément Balanger — Ingénieur produit freelance, Flutter et IA, Paris'
export const siteDescription: string =
  'Ingénieur produit et tech lead Flutter à Paris. Scan sécurité Supabase ou Firebase, audit prêt pour la production, fonctionnalités IA\u00A0: au forfait, une mission à la fois.'

export const navLinks: readonly NavLink[] = [
  { label: 'Offres', href: '/#offres' },
  { label: 'Travaux', href: '/#travaux' },
  { label: 'Méthode', href: '/#methode' },
  { label: 'À propos', href: '/#a-propos' },
] as const
export const navContact: NavLink = { label: 'Contact', href: '/#contact' }

// Hero
export const heroEyebrow: string = 'Ingénieur produit · Tech lead · Paris'
export const heroAvailability: string = 'Une mission à la fois, au forfait'
export const heroTitleLead: string = 'Je transforme des idées et des prototypes'
export const heroTitleEmphasis: string = 'en apps qui tournent en production.'
export const heroIntro: string =
  'Tech lead Flutter, j’ai été le premier développeur d’une app de mobilité utilisée chaque jour par 2\u00A0500 chauffeurs, et j’ai cofondé Diseed, une app sociale avec de l’IA en production. J’aide les startups et les PME à livrer un produit fiable, ou à y ajouter de l’IA qui sert vraiment.'
export const heroPrimaryCta: string = 'Parlons de votre produit'
export const heroSecondaryCta: string = 'Voir les offres et les prix'

export const heroFacts: readonly HeroFact[] = [
  {
    value: '2\u00A0500',
    label: 'chauffeurs utilisent chaque jour l’app mobile que j’ai construite',
  },
  {
    value: '3',
    label: 'produits lancés en propre\u00A0: Diseed, Migrea, LineUpVote',
  },
  {
    value: '24\u00A0h',
    label: 'pour vous répondre, même pour dire non',
  },
] as const

// Offers
export const offersTitle: string =
  'Trois portes d’entrée, chacune avec un prix annoncé.'
export const offers: readonly OfferItem[] = [
  {
    id: 'scan',
    title: 'Scan sécurité Supabase ou Firebase',
    forWho:
      'Votre app est en ligne, construite vite (parfois avec Lovable, Bolt ou FlutterFlow), et personne n’a vérifié qui peut lire quoi dans votre base.',
    description:
      'Je passe en revue les règles d’accès aux données, l’authentification, les clés exposées et le stockage de fichiers. Vous recevez la liste des failles classées par gravité, avec le correctif de chacune.',
    deliverables: [
      'Revue des règles d’accès (RLS, règles Firestore et Storage)',
      'Authentification, clés et secrets exposés côté client',
      'Failles classées par gravité, correctif pour chacune',
      'Corrections les plus urgentes faites avec vous si vous le souhaitez',
    ],
    price: '590\u00A0€',
    duration: '1 semaine',
    note: null,
  },
  {
    id: 'audit',
    title: 'Audit «\u00A0prêt pour la production\u00A0»',
    forWho:
      'Votre app Flutter ou votre prototype rame, plante ou n’avance plus, et vous voulez comprendre pourquoi avant de dépenser plus.',
    description:
      'Je lis le code, je fais tourner l’app, je regarde la CI et les stores. Vous repartez avec un diagnostic clair et un plan de reprise chiffré. Si vous me confiez la reprise, je la mène au forfait, jalon par jalon.',
    deliverables: [
      'Rapport écrit\u00A0: architecture, performances, sécurité, tests, CI, publication',
      'Risques classés par urgence',
      'Plan de reprise chiffré, jalon par jalon',
      'Restitution de 45 minutes en visio',
    ],
    price: '1\u00A0500\u00A0€',
    duration: '2 semaines',
    note: 'Déduit du forfait de reprise si vous me la confiez.',
  },
  {
    id: 'ia',
    title: 'Une fonctionnalité IA dans votre produit',
    forWho:
      'Vous voulez un assistant, une recherche intelligente, une extraction de documents ou une catégorisation automatique, sans transformer votre app en démo.',
    description:
      'On commence par un cadrage court\u00A0: ce que l’IA doit faire, comment on saura qu’elle le fait bien, et ce que ça coûtera par utilisateur. Ensuite je l’intègre à votre app ou à votre back-end, avec des critères d’acceptation écrits et un plafond de coût.',
    deliverables: [
      'Cadrage\u00A0: cas d’usage, choix du modèle, jeu d’évaluation, coût estimé',
      'Fonction intégrée, testée et en production',
      'Suivi de la qualité et du coût par requête',
      'Documentation pour votre équipe',
    ],
    price: '900\u00A0€',
    duration: 'Cadrage, 1 semaine',
    note: 'Puis intégration au forfait, dès 5\u00A0000\u00A0€. Le cadrage est déduit si vous poursuivez.',
  },
] as const
export const offersFootnotes: readonly string[] = [
  'Agence ou studio\u00A0? Je prends aussi de la sous-traitance Flutter au forfait, en marque blanche.',
  'Équipe de développeurs\u00A0? J’installe des workflows de développement par agents (Claude Code)\u00A0: règles projet, skills, revues automatisées.',
] as const

// Work
export const workTitle: string = 'Ce que j’ai construit.'
export const workItems: readonly WorkItem[] = [
  {
    period: '2024 — aujourd’hui',
    title: 'App mobile de mobilité',
    url: null,
    role: 'Premier développeur, puis tech lead mobile',
    description:
      'Conçue et construite quasiment seul, l’app Flutter iOS et Android est utilisée chaque jour par 2\u00A0500 chauffeurs professionnels. J’en pilote aujourd’hui la refonte\u00A0: architecture modulaire, design system indépendant, CI/CD et tests de bout en bout.',
    stack: ['Flutter', 'Dart', 'Riverpod', 'CI/CD', 'Maestro'],
  },
  {
    period: '2021 — 2024',
    title: 'Diseed',
    url: 'https://diseed.fr',
    role: 'Cofondateur et développeur',
    description:
      '«\u00A0Le meilleur du pire\u00A0»\u00A0: une app sociale pour partager ses anecdotes, en français et en portugais du Brésil. J’ai conçu le produit, construit l’app et le back-end serverless, et mis des modèles de langage en production pour catégoriser les contenus, traduire d’une langue à l’autre et générer des images.',
    stack: ['Flutter', 'Firebase', 'Cloud Functions', 'LLM'],
  },
  {
    period: '2026',
    title: 'Migrea',
    url: 'https://migrea.fr',
    role: 'Conception et développement',
    description:
      'Une app migraine communautaire, en bêta ouverte sur iOS et Android\u00A0: un suivi simple même en pleine crise, une fenêtre de risque personnelle, et une contribution anonymisée à la recherche, avec l’accord de chacun. Des données de santé, donc le RGPD pris au sérieux dès la conception.',
    stack: ['Flutter', 'Supabase', 'PostgreSQL', 'RGPD'],
  },
  {
    period: '2026',
    title: 'LineUpVote',
    url: 'https://lineupvote.app',
    role: 'Projet personnel',
    description:
      'Pour préparer un festival entre amis\u00A0: chacun vote sur les artistes, le groupe obtient un classement commun en temps réel. Sans compte ni mot de passe, un lien d’invitation suffit.',
    stack: ['Flutter', 'Firebase', 'Temps réel'],
  },
  {
    period: 'Open source',
    title: 'Flutter Product Factory',
    url: 'https://github.com/clemortel/flutter_product_factory',
    role: 'Auteur',
    description:
      'Mon modèle de monorepo Flutter\u00A0: une CLI Dart génère apps et fonctionnalités, sur une architecture en couches indépendante du back-end. C’est la base dont je pars pour démarrer vite et proprement.',
    stack: ['Flutter', 'Dart CLI', 'Melos', 'Riverpod'],
  },
] as const

// Method
export const methodTitle: string = 'Comment se passe une mission.'
export const methodSteps: readonly MethodStep[] = [
  {
    number: '01',
    title: 'Un appel de 30 minutes',
    description:
      'Vous me présentez le produit et ce qui bloque. Je vous dis franchement si je suis la bonne personne, et sinon vers qui aller.',
  },
  {
    number: '02',
    title: 'Une proposition sous 48 heures',
    description:
      'Périmètre, jalons, prix fixe et calendrier, par écrit. Acompte de 30\u00A0% au démarrage, le solde à la livraison.',
  },
  {
    number: '03',
    title: 'Une démo chaque semaine',
    description:
      'Le code vit dans votre dépôt dès le premier jour. Vous voyez avancer le produit, pas un relevé d’heures.',
  },
  {
    number: '04',
    title: 'Une passation propre',
    description:
      'Documentation, tests et déploiement automatisé\u00A0: votre équipe, ou la suivante, reprend sans moi.',
  },
] as const
export const aiNoteTitle: string = 'Et l’IA dans tout ça\u00A0?'
export const aiNote: string =
  'Je développe avec des agents de code au quotidien\u00A0: Claude Code, sessions en parallèle, règles et revues automatisées. Ils prennent la mécanique\u00A0; la conception, la relecture et la responsabilité restent les miennes. Chaque ligne livrée est relue et testée, et votre code ne passe dans aucun outil sans votre accord.'

// About
export const aboutTitle: string =
  'Développeur depuis 2019, ingénieur produit par goût.'
export const aboutParagraphs: readonly string[] = [
  'Je m’appelle Clément. J’ai commencé par des applications web chez GRDF, puis au ministère de la Justice en alternance. En 2021, j’ai cofondé Diseed avec mon meilleur ami\u00A0: trois ans à tout faire nous-mêmes, du design au back-end, en passant par l’IA et les stores.',
  'Depuis 2024, je suis le premier développeur, puis le tech lead mobile, d’une startup de mobilité. J’y ai appris à tenir une app dont des milliers de personnes dépendent pour travailler.',
  'Ce qui me plaît\u00A0: prendre un produit flou, le rendre simple, et le livrer. Je préfère refuser une mission que la faire à moitié.',
] as const
export const photoAlt: string = 'Portrait de Clément Balanger'

export const timeline: readonly TimelineItem[] = [
  {
    period: '2024 —',
    role: 'Premier développeur, puis tech lead mobile',
    place: 'Startup de mobilité, Paris',
  },
  {
    period: '2021 — 2024',
    role: 'Cofondateur et développeur',
    place: 'Diseed',
  },
  {
    period: '2020 — 2021',
    role: 'Développeur en alternance',
    place: 'Ministère de la Justice',
  },
  {
    period: '2019 — 2020',
    role: 'Développeur d’applications web',
    place: 'GRDF',
  },
  {
    period: 'Formation',
    role: 'DUT informatique, licence professionnelle',
    place: 'IUT de Nantes',
  },
] as const

export const skillGroups: readonly SkillGroup[] = [
  {
    label: 'Mobile',
    items: ['Flutter', 'Dart', 'iOS', 'Android', 'Design systems'],
  },
  {
    label: 'Back-end',
    items: ['Node.js', 'TypeScript', 'Firebase', 'Supabase', 'PostgreSQL'],
  },
  {
    label: 'IA',
    items: ['Intégration de LLM', 'Évaluation', 'Claude Code', 'Agents'],
  },
  {
    label: 'Livraison',
    items: ['CI/CD', 'Docker', 'Tests E2E', 'Publication sur les stores'],
  },
] as const

// FAQ
export const faqTitle: string = 'Questions fréquentes.'
export const faqItems: readonly FaqItem[] = [
  {
    question: 'Vous travaillez au forfait ou à la journée\u00A0?',
    answer:
      'Au forfait, sur un périmètre écrit et un prix fixe. Si le besoin change en route, on en parle avant que je facture quoi que ce soit.',
  },
  {
    question: 'Quand pouvez-vous commencer\u00A0?',
    answer:
      'Je prends une seule mission à la fois, pour la faire bien. Le calendrier est annoncé dans la proposition, et je m’y tiens.',
  },
  {
    question: 'Comment se passent les échanges\u00A0?',
    answer:
      'À distance depuis Paris\u00A0: par écrit au fil de l’eau, en visio pour les points, le midi ou à 18\u00A0h\u00A030. Je peux venir sur place en Île-de-France pour le lancement.',
  },
  {
    question: 'À qui appartient le code\u00A0?',
    answer:
      'À vous. Il vit dans votre dépôt dès le premier jour, et les droits vous sont cédés au paiement complet.',
  },
  {
    question: 'Vous ne faites que du Flutter\u00A0?',
    answer:
      'Non. Je fais aussi le back-end (Node.js, TypeScript, Firebase, Supabase, PostgreSQL) et le web. Flutter est simplement l’outil que je connais le mieux pour le mobile.',
  },
  {
    question: 'Comment facturez-vous\u00A0?',
    answer:
      'En entrepreneur individuel (Clemiche Labs), en euros, TVA non applicable. Acompte de 30\u00A0% au démarrage, solde à la livraison.',
  },
] as const

// Contact
export const contactTitle: string = 'Parlez-moi de votre produit.'
export const contactSub: string =
  'Trois lignes suffisent\u00A0: ce que fait votre produit, ce qui bloque, et votre échéance. Je réponds sous 24 heures, même pour dire non.'
export const email: string = 'hello@clemichelabs.com'
export const contactLinks: readonly ExternalLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/clementbalanger',
  },
  { label: 'GitHub', href: 'https://github.com/clemortel' },
] as const

export const formLabels: FormLabels = {
  name: 'Votre nom',
  email: 'Votre e-mail',
  message: 'Votre message',
  messagePlaceholder:
    'Ce que fait votre produit, ce qui bloque, votre échéance.',
  submit: 'Envoyer',
  sending: 'Envoi…',
  sentTitle: 'Message reçu.',
  sentBody: 'Merci. Je vous réponds sous 24 heures.',
  sendAnother: 'Envoyer un autre message',
  orEmail: 'Ou directement par e-mail\u00A0:',
  errorFallback:
    'L’envoi a échoué. Écrivez-moi directement par e-mail, ça marche toujours.',
} as const

// Footer
export const footerIdentity: string =
  'Clemiche Labs — Clément Balanger, entrepreneur individuel, Paris.'
export const footerCopyright: string = '© 2026 Clément Balanger'
export const footerLinks: readonly NavLink[] = [
  { label: 'Mentions légales', href: '/legal' },
  { label: 'Produits', href: '/pricing' },
  { label: 'Confidentialité', href: '/privacy' },
] as const
export const themeToggleLabel: string = 'Changer de thème'
export const backHomeLabel: string = 'Retour à l’accueil'
