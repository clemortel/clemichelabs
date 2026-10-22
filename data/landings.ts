import type { OfferLandingContent } from '~/types/content'

export const storesLanding: OfferLandingContent = {
  path: '/flutter-a-jour',
  metaTitle: 'Mise à jour Flutter pour les stores — Clément Balanger',
  metaDescription:
    'Votre app Flutter ne passe plus sur Google Play ou l’App Store ? Mise à jour Android 16 (API 36), Xcode 26, Swift Package Manager et dépendances. 1 200 € par app, 2 semaines.',
  eyebrow: 'Offre · 1 200 € par app · 2 semaines',
  headline: 'Votre app Flutter doit pouvoir sortir une nouvelle version.',
  intro:
    'Les stores ont relevé leurs exigences en 2026. Une app qui n’a pas suivi ne peut plus publier de correctif. Je la remets à niveau, au forfait, sans toucher à ce qui marche.',
  cta: 'Demander une mise à jour',
  mailSubject: 'Mise à jour Flutter',
  priceLine:
    '1 200 € par app jusqu’à 25 dépendances, TVA non applicable. Agences : 3 apps pour 3 000 €.',
  problemTitle: 'Ce qui a changé cette année.',
  problem: [
    'Depuis le 31 août 2026, Google Play refuse les nouvelles apps et les mises à jour qui ne ciblent pas Android 16 (API 36). Les prolongations accordées expirent le 1er novembre 2026.',
    'Depuis le 28 avril 2026, l’App Store n’accepte que des builds faits avec Xcode 26 et les SDK de la version 26.',
    'Firebase a arrêté de publier ses nouvelles versions sur CocoaPods en octobre 2026 : les projets iOS doivent passer à Swift Package Manager pour suivre les mises à jour.',
  ],
  sources: [
    {
      label: 'Exigences de niveau d’API cible, Google Play',
      href: 'https://developer.android.com/google/play/requirements/target-sdk',
    },
    {
      label: 'Exigences à venir, Apple Developer',
      href: 'https://developer.apple.com/news/upcoming-requirements/',
    },
    {
      label: 'Fin de CocoaPods pour Firebase',
      href: 'https://firebase.google.com/docs/ios/cocoapods-deprecation',
    },
  ],
  checksTitle: 'Ce que je fais.',
  checks: [
    {
      label: 'Android',
      items: [
        'Cible Android 16 (API 36)',
        'Gradle, plugin Android et Kotlin à jour',
        'Permissions et comportements modifiés par Android 16',
      ],
    },
    {
      label: 'iOS',
      items: [
        'Build avec Xcode 26 et le SDK iOS 26',
        'Passage de CocoaPods à Swift Package Manager si besoin',
        'Signature et capacités vérifiées',
      ],
    },
    {
      label: 'Flutter',
      items: [
        'Version de Flutter et de Dart à jour',
        'Dépendances mises à jour ou remplacées',
        'Avertissements de dépréciation traités',
      ],
    },
  ],
  deliverablesTitle: 'Ce que vous recevez.',
  deliverables: [
    'Une branche dans votre dépôt, prête à fusionner',
    'Des builds de test envoyés sur Google Play et TestFlight',
    'Un rapport : ce qui a changé, ce qui a été remplacé, ce qui reste à surveiller',
    'Les écrans principaux vérifiés sur appareil, Android et iOS',
  ],
  stepsTitle: 'Comment ça se passe.',
  steps: [
    {
      number: '1',
      title: 'Un accès au dépôt',
      description:
        'En lecture d’abord. Je vous dis sous 48 h si l’app tient dans le forfait.',
    },
    {
      number: '2',
      title: 'Une proposition écrite',
      description:
        'Prix fixe, calendrier, et la liste des dépendances qui posent problème.',
    },
    {
      number: '3',
      title: 'La mise à jour',
      description:
        'Sur une branche à part, avec un point écrit chaque semaine.',
    },
    {
      number: '4',
      title: 'La soumission',
      description:
        'Builds de test sur les deux stores, puis vous publiez quand vous voulez.',
    },
  ],
  limits:
    'Au-delà de 25 dépendances, ou si l’app utilise du code natif maison, je chiffre l’écart avant de commencer.',
  otherOffers: 'Voir les autres offres',
}

export const securiteLanding: OfferLandingContent = {
  path: '/securite',
  metaTitle: 'Sécurisation Supabase ou Firebase — Clément Balanger',
  metaDescription:
    'Revue de configuration Supabase (RLS) ou Firebase, corrections faites dans votre dépôt puis vérifiées. 890 €, 2 semaines, sur autorisation écrite.',
  eyebrow: 'Offre · 890 € · 2 semaines',
  headline: 'Sécurisation Supabase ou Firebase.',
  intro:
    'Les outils gratuits vous disent qu’une règle manque. Je relis la configuration, je corrige dans votre dépôt, puis je vérifie que les données sont vraiment fermées.',
  cta: 'Demander une sécurisation',
  mailSubject: 'Sécurisation Supabase ou Firebase',
  priceLine:
    '890 €, TVA non applicable. Acompte de 50 % à la commande, solde à la livraison.',
  problemTitle: 'Le problème.',
  problem: [
    'Dans une app Supabase ou Firebase, la clé publique part dans le navigateur ou dans l’app mobile. C’est normal : ce sont les règles d’accès de la base qui protègent les données.',
    'Une règle oubliée, ou posée trop large pour que la démo marche, et une table entière devient lisible. Une règle qui existe ne protège pas forcément ce qu’elle devrait : c’est ce que je vérifie.',
  ],
  sources: [],
  checksTitle: 'Ce que je relis.',
  checks: [
    {
      label: 'Supabase',
      items: [
        'RLS sur chaque table exposée',
        'Policies trop larges sur des données personnelles',
        'Vues et fonctions qui contournent la RLS',
        'Clé service_role côté client ou dans le dépôt',
        'Buckets Storage et leurs policies',
        'Edge Functions : jeton vérifié, secrets hors du code',
      ],
    },
    {
      label: 'Firebase',
      items: [
        'Règles Firestore et Realtime Database',
        'Règles restées en « mode test »',
        'Règles Storage',
        'Cloud Functions appelables sans contrôle',
        'Clés d’API restreintes, App Check',
      ],
    },
    {
      label: 'Les deux',
      items: [
        'Secrets dans le dépôt et l’historique Git',
        'Données renvoyées en trop par l’API',
      ],
    },
  ],
  deliverablesTitle: 'Ce que vous recevez.',
  deliverables: [
    'Les corrections, dans une branche de votre dépôt',
    'Une seconde vérification après les corrections',
    'Un rapport court : ce qui était ouvert, ce qui est fermé, ce qui reste à surveiller',
    'Mes accès rendus et aucune donnée conservée à la fin',
  ],
  stepsTitle: 'Comment ça se passe.',
  steps: [
    {
      number: '1',
      title: 'Une autorisation écrite',
      description:
        'Projets, environnements, dates et actions permises, signés par vous avant toute vérification.',
    },
    {
      number: '2',
      title: 'Un accès limité',
      description:
        'Au projet et au dépôt, sur un environnement de test quand c’est possible, avec un accord de confidentialité.',
    },
    {
      number: '3',
      title: 'Les corrections',
      description:
        'Dans votre dépôt, puis une seconde vérification.',
    },
    {
      number: '4',
      title: 'La restitution',
      description:
        'Rapport écrit et 30 minutes en visio, le midi ou en fin de journée.',
    },
  ],
  limits:
    'C’est une revue de configuration sur une liste de points, à date et sur le périmètre fourni : ni test d’intrusion, ni garantie qu’aucune faille ne subsiste.',
  otherOffers: 'Voir les autres offres',
}
