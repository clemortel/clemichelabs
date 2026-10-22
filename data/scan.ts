import type { MethodStep, SkillGroup } from '~/types/content'

export const scanTitle: string =
  'Scan sécurité Supabase ou Firebase — Clément Balanger'
export const scanDescription: string =
  'Audit des règles d’accès Supabase (RLS) ou Firebase, de l’authentification et des clés exposées. Failles classées avec leur correctif. 590 €, livré en une semaine.'

export const scanEyebrow: string = 'Offre · 590 € · 1 semaine'
export const scanHeadline: string = 'Scan sécurité Supabase ou Firebase.'
export const scanIntro: string =
  'Votre app est en ligne. Avant qu’un inconnu lise votre base, je vérifie qui peut accéder à quoi, et je vous donne le correctif de chaque faille.'
export const scanCta: string = 'Demander un scan'

export const scanProblemTitle: string = 'La faille la plus courante est aussi la plus bête.'
export const scanProblem: readonly string[] = [
  'Dans une app Supabase ou Firebase, la clé publique part dans le navigateur ou dans l’app mobile. C’est normal : ce sont les règles d’accès de la base qui protègent les données.',
  'Une règle oubliée, ou posée trop large pour que la démo marche, et une table entière devient lisible par n’importe qui. C’est fréquent sur les apps construites vite, à la main comme avec Lovable, Bolt, FlutterFlow ou Cursor.',
] as const

export const scanChecksTitle: string = 'Ce que je vérifie.'
export const scanChecks: readonly SkillGroup[] = [
  {
    label: 'Supabase',
    items: [
      'RLS activée sur chaque table exposée',
      'Policies trop larges sur des données personnelles',
      'Vues et fonctions qui contournent la RLS',
      'Clé service_role côté client ou dans le dépôt',
      'Buckets Storage et leurs policies',
      'Edge Functions : jeton vérifié, secrets hors du code',
      'Réglages d’authentification',
    ],
  },
  {
    label: 'Firebase',
    items: [
      'Règles Firestore et Realtime Database',
      'Règles restées en « mode test »',
      'Règles Storage',
      'Cloud Functions appelables sans contrôle',
      'Clés d’API restreintes, App Check',
      'Secrets dans Remote Config ou dans l’app',
    ],
  },
  {
    label: 'Les deux',
    items: [
      'Secrets dans le dépôt et l’historique Git',
      'Données renvoyées en trop par l’API',
    ],
  },
] as const

export const scanDeliverableTitle: string = 'Ce que vous recevez.'
export const scanDeliverables: readonly string[] = [
  'Un rapport de 4 à 6 pages, lisible par un non-développeur',
  'Chaque faille classée par gravité, avec où elle se trouve et comment la corriger',
  'Les règles ou le code à coller pour les corrections rapides',
  'Ce qui est déjà bien fait, pour ne pas y toucher',
  'Une restitution de 30 minutes en visio',
] as const

export const scanStepsTitle: string = 'Comment ça se passe.'
export const scanSteps: readonly MethodStep[] = [
  {
    number: '01',
    title: 'Une autorisation écrite',
    description:
      'Périmètre, environnements et dates, signés avant tout test. Je ne touche à rien sans elle.',
  },
  {
    number: '02',
    title: 'Un accès en lecture',
    description:
      'Au projet Supabase ou Firebase, au dépôt si possible, et un compte de test créé par vous.',
  },
  {
    number: '03',
    title: 'Le rapport sous une semaine',
    description:
      'Livré par écrit, puis présenté en 30 minutes, le midi ou à 18 h 30.',
  },
  {
    number: '04',
    title: 'Les correctifs, si vous voulez',
    description:
      'On corrige ensemble les failles urgentes, ou je mène un audit complet, déduction faite du scan.',
  },
] as const

export const scanPriceLine: string =
  '590 €, TVA non applicable. Acompte de 30 % à la commande, solde à la livraison du rapport.'
export const scanMailSubject: string = 'Scan sécurité'
export const scanOtherOffers: string = 'Voir les autres offres'
