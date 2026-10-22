import type {
  NavLink,
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

export const siteDescription: string =
  'Tech lead Flutter freelance à Paris : mise à jour des apps pour les stores (Android 16, Xcode 26), audit, sécurisation Supabase ou Firebase, fonctionnalités IA. Au forfait, pour les professionnels.'

export const navLinks: readonly NavLink[] = [
  { label: 'Offres', href: '/#offres' },
  { label: 'Travaux', href: '/#travaux' },
  { label: 'Méthode', href: '/#methode' },
  { label: 'À propos', href: '/#a-propos' },
] as const
export const navContact: NavLink = { label: 'Contact', href: '/#contact' }

// Hero
export const heroEyebrow: string = 'Tech lead Flutter · Paris · au forfait'
export const heroTitleLead: string = 'Je mets à jour, je sécurise et je fais avancer'
export const heroTitleEmphasis: string =
  'les apps Flutter que personne n’a le temps de reprendre.'
export const heroIntro: string =
  'Développeur depuis 2019, tech lead mobile dans une startup parisienne depuis 2024, cofondateur de Diseed, une app sociale avec des modèles de langage en production. Je prends des missions courtes et asynchrones, au forfait, réservées aux professionnels.'
export const heroPrimaryCta: string = 'Écrire'
export const heroSecondaryCta: string = 'Voir les offres et les prix'
export const heroNoticeLabel: string = 'En ce moment'
export const heroNotice: string =
  'Depuis le 31 août 2026, Google Play refuse les mises à jour qui ne ciblent pas Android 16 (API 36), et les dernières prolongations expirent le 1er novembre. Côté Apple, Xcode 26 est obligatoire depuis le 28 avril.'
export const heroNoticeLink: ExternalLink = {
  label: 'Ce que je fais pour une app Flutter',
  href: '/flutter-a-jour',
}

// Offers
export const offersTitle: string = 'Quatre offres, chacune avec son prix.'
export const offers: readonly OfferItem[] = [
  {
    id: 'stores',
    title: 'Mise à jour Flutter pour les stores',
    forWho:
      'Votre app Flutter n’a pas bougé depuis des mois, et Google Play ou l’App Store refusent désormais vos nouvelles versions.',
    description:
      'Je mets l’app aux exigences actuelles des stores et je remets les dépendances à jour. Vous récupérez un projet qui compile, testé sur appareil, avec des builds prêts à soumettre.',
    deliverables: [
      'Cible Android 16 (API 36) et build avec Xcode 26',
      'Flutter et dépendances à jour, CocoaPods remplacé par Swift Package Manager si besoin',
      'Builds de test envoyés sur les deux stores',
      'Rapport de ce qui a changé et de ce qui reste à surveiller',
    ],
    price: '1 200 €',
    duration: '2 semaines',
    note: 'Par app, jusqu’à 25 dépendances. Agences : 3 apps pour 3 000 €.',
    detailsHref: '/flutter-a-jour',
  },
  {
    id: 'audit',
    title: 'Audit « prêt pour la production »',
    forWho:
      'Votre app Flutter ou votre prototype rame, plante ou n’avance plus, et vous voulez comprendre pourquoi avant de dépenser plus.',
    description:
      'Je lis le code, je fais tourner l’app, je regarde la CI et les stores. Vous repartez avec un diagnostic écrit et un plan de reprise chiffré. Si vous me confiez la reprise, je la mène au forfait, jalon par jalon.',
    deliverables: [
      'Rapport écrit : architecture, performances, sécurité, tests, CI, publication',
      'Risques classés par urgence',
      'Plan de reprise chiffré, jalon par jalon',
      'Restitution de 45 minutes en visio',
    ],
    price: '1 500 €',
    duration: '2 semaines',
    note: 'Déduit du forfait de reprise si vous me la confiez.',
    detailsHref: null,
  },
  {
    id: 'securite',
    title: 'Sécurisation Supabase ou Firebase',
    forWho:
      'Votre app tourne sur votre propre projet Supabase ou Firebase, elle a été construite vite, et un client ou un investisseur vous demande où en sont vos données.',
    description:
      'Je relis la configuration sur une liste de points précise, je corrige directement dans votre dépôt ce qui doit l’être, puis je vérifie à nouveau. C’est une revue de configuration à date, pas un test d’intrusion.',
    deliverables: [
      'Règles d’accès relues : RLS, règles Firestore et Storage',
      'Authentification, clés et secrets côté client',
      'Corrections faites dans votre dépôt, puis vérifiées',
      'Rapport court : ce qui était ouvert, ce qui est fermé, ce qui reste à surveiller',
    ],
    price: '890 €',
    duration: '2 semaines',
    note: 'Sur autorisation écrite et accord de confidentialité.',
    detailsHref: '/securite',
  },
  {
    id: 'ia',
    title: 'Une fonctionnalité IA dans votre produit',
    forWho:
      'Vous voulez un assistant, une recherche, une extraction de documents ou une catégorisation automatique qui tienne en production.',
    description:
      'On commence par un cadrage court : ce que l’IA doit faire, comment mesurer qu’elle le fait bien, et ce que ça coûtera par utilisateur. Ensuite je l’intègre à votre app ou à votre back-end, avec des critères d’acceptation écrits et un plafond de coût.',
    deliverables: [
      'Cadrage : cas d’usage, choix du modèle, jeu d’évaluation, coût estimé',
      'Fonction intégrée, testée et en production',
      'Information des utilisateurs exigée par l’AI Act',
      'Suivi de la qualité et du coût par requête',
    ],
    price: '900 €',
    duration: 'Cadrage, 1 semaine',
    note: 'Puis intégration au forfait, dès 5 000 €. Le cadrage est déduit si vous poursuivez.',
    detailsHref: null,
  },
] as const
export const offerDetailsLabel: string = 'Le détail'
export const offersFootnotes: readonly string[] = [
  'Agence ou studio ? Je prends de la sous-traitance Flutter au forfait, en marque blanche, et je ne contacte jamais vos clients.',
  'Vous recrutez un développeur Flutter ? J’évalue vos candidats : exercice relu, entretien technique d’une heure, avis écrit sous 48 h. 250 € par candidat.',
] as const

// Work
export const workTitle: string = 'Ce que j’ai construit.'
export const workItems: readonly WorkItem[] = [
  {
    period: '2021 — 2024',
    title: 'Diseed',
    url: 'https://diseed.fr',
    role: 'Cofondateur et développeur',
    description:
      '« Le meilleur du pire » : une app sociale pour partager ses anecdotes, en français et en portugais du Brésil. J’ai conçu le produit, construit l’app et le back-end serverless, et mis des modèles de langage en production pour catégoriser les contenus, traduire d’une langue à l’autre et générer des images.',
    stack: ['Flutter', 'Firebase', 'Cloud Functions', 'LLM'],
  },
  {
    period: '2026',
    title: 'Migrea',
    url: 'https://migrea.fr',
    role: 'Conception et développement',
    description:
      'Une app migraine communautaire, en bêta ouverte sur iOS et Android : un suivi simple même en pleine crise, une fenêtre de risque personnelle, et une contribution anonymisée à la recherche, avec l’accord de chacun. Des données de santé, donc des règles d’accès Supabase écrites dès le premier jour.',
    stack: ['Flutter', 'Supabase', 'PostgreSQL', 'RGPD'],
  },
  {
    period: '2026',
    title: 'LineUpVote',
    url: 'https://lineupvote.app',
    role: 'Projet personnel',
    description:
      'Pour préparer un festival entre amis : chacun vote sur les artistes, le groupe obtient un classement commun en temps réel. Sans compte ni mot de passe, un lien d’invitation suffit.',
    stack: ['Flutter', 'Firebase', 'Temps réel'],
  },
  {
    period: 'Open source',
    title: 'Flutter Product Factory',
    url: 'https://github.com/clemortel/flutter_product_factory',
    role: 'Auteur',
    description:
      'Un modèle de monorepo Flutter publié en open source : une CLI Dart génère apps et fonctionnalités, sur une architecture en couches indépendante du back-end.',
    stack: ['Flutter', 'Dart CLI', 'Melos', 'Riverpod'],
  },
] as const

// Method
export const methodTitle: string = 'Comment se passe une mission.'
export const methodSteps: readonly MethodStep[] = [
  {
    number: '1',
    title: 'Un appel de 30 minutes',
    description:
      'Vous me présentez l’app et ce qui bloque. Si ce n’est pas pour moi, je vous le dis et je vous oriente.',
  },
  {
    number: '2',
    title: 'Une proposition écrite sous 48 heures',
    description:
      'Périmètre, livrables, prix fixe et calendrier. Acompte de 50 % jusqu’à 2 000 €, de 30 % au-delà.',
  },
  {
    number: '3',
    title: 'Un travail asynchrone',
    description:
      'Le code vit dans votre dépôt dès le premier jour, avec un point écrit chaque semaine. Je ne prends pas de mission qui demande une astreinte.',
  },
  {
    number: '4',
    title: 'Une passation propre',
    description:
      'Documentation, tests et déploiement automatisé : votre équipe, ou la suivante, reprend sans moi.',
  },
] as const
export const aiNoteTitle: string = 'Les agents de code'
export const aiNote: string =
  'Je développe avec des agents de code (Claude Code) : ils prennent la mécanique, je garde la conception, la relecture et la responsabilité. Votre code et vos données ne passent dans aucun outil d’IA sans votre accord écrit.'

// About
export const aboutTitle: string =
  'Développeur depuis 2019, tech lead Flutter depuis 2024.'
export const aboutParagraphs: readonly string[] = [
  'Je m’appelle Clément. J’ai commencé par des applications web chez GRDF, puis au ministère de la Justice en alternance. En 2021, j’ai cofondé Diseed avec mon meilleur ami : trois ans à tout faire nous-mêmes, du design au back-end, en passant par l’IA et les stores.',
  'Depuis 2024, je suis tech lead mobile dans une startup parisienne. En parallèle, je prends une mission freelance à la fois, en dehors de son secteur.',
  'Ce qui me plaît : reprendre une app que plus personne n’ose toucher et la remettre en état de marche.',
] as const
export const photoAlt: string = 'Portrait de Clément Balanger'
export const aboutTimelineLabel: string = 'Parcours'
export const aboutSkillsLabel: string = 'Outils'

export const timeline: readonly TimelineItem[] = [
  {
    period: '2024 —',
    role: 'Tech lead mobile',
    place: 'Startup, Paris',
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
    question: 'Vous travaillez au forfait ou à la journée ?',
    answer:
      'Au forfait, sur un périmètre écrit et un prix fixe. Si le besoin change en route, on chiffre l’écart par écrit avant d’aller plus loin.',
  },
  {
    question: 'Comment se passent les échanges ?',
    answer:
      'Par écrit au fil de l’eau, et en visio le midi ou en fin de journée pour les points. Je ne prends pas de mission qui demande des réunions quotidiennes.',
  },
  {
    question: 'Qu’en est-il de vos accès et de vos données ?',
    answer:
      'J’accède à vos systèmes seulement avec une autorisation écrite et un accord de confidentialité, sur un environnement de test quand c’est possible. Je ne copie aucune donnée et je rends mes accès à la fin.',
  },
  {
    question: 'À qui appartient le code ?',
    answer:
      'À vous. Il vit dans votre dépôt dès le premier jour, et les droits vous sont cédés au paiement complet.',
  },
  {
    question: 'Comment facturez-vous ?',
    answer:
      'En entrepreneur individuel (Clément Balanger EI), en euros, TVA non applicable selon l’article 293 B du CGI. Mes offres s’adressent uniquement aux professionnels.',
  },
] as const

// Contact
export const contactTitle: string = 'Parlez-moi de votre app.'
export const contactSub: string =
  'Trois lignes suffisent : ce que fait votre app, ce qui bloque, et votre échéance. Je réponds sous 24 heures ouvrées.'
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
    'Ce que fait votre app, ce qui bloque, votre échéance.',
  submit: 'Envoyer',
  sending: 'Envoi…',
  sentTitle: 'Message reçu.',
  sentBody: 'Merci. Je vous réponds sous 24 heures ouvrées.',
  sendAnother: 'Envoyer un autre message',
  errorFallback:
    'L’envoi a échoué. Écrivez-moi directement par e-mail.',
  privacyNote:
    'Votre message sert uniquement à vous répondre. Il est conservé 12 mois au plus.',
  privacyLinkLabel: 'Confidentialité',
} as const

// Footer
export const footerIdentity: string =
  'Clément Balanger EI (Clemiche Labs), Paris. Offres réservées aux professionnels.'
export const footerCopyright: string = '© 2026 Clément Balanger'
export const footerLinks: readonly NavLink[] = [
  { label: 'Mentions légales', href: '/legal' },
  { label: 'Confidentialité', href: '/privacy' },
] as const
export const themeToggleLabel: string = 'Changer de thème'
export const backHomeLabel: string = 'Retour à l’accueil'
