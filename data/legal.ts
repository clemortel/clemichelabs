import type { LegalSection } from '~/types/content'

// TODO(clement): ajouter adresse et téléphone (LCEN art. 1-1).
export const legalSections: readonly LegalSection[] = [
  {
    title: 'Éditeur du site',
    body: 'Clément Balanger EI, nom commercial Clemiche Labs\nEntrepreneur individuel, SIREN 884 656 109\nE-mail : hello@clemichelabs.com',
  },
  {
    title: 'Responsable de la publication',
    body: 'Clément Balanger.',
  },
  {
    title: 'Hébergement',
    body: 'Firebase Hosting, Google LLC\n1600 Amphitheatre Parkway, Mountain View, CA 94043, États-Unis',
  },
  {
    title: 'Clientèle',
    body: 'Les offres présentées sur ce site s’adressent uniquement aux professionnels.',
  },
  {
    title: 'Propriété intellectuelle',
    body: 'Les textes, images et le code de ce site appartiennent à Clément Balanger, sauf mention contraire. Toute reproduction sans autorisation est interdite.',
  },
  {
    title: 'Données personnelles',
    body: 'Voir la page Confidentialité.',
  },
] as const

export const privacyContent: readonly LegalSection[] = [
  {
    title: 'Ce qui est collecté',
    body: 'Uniquement ce que vous écrivez dans le formulaire de contact : votre nom, votre e-mail et votre message, ainsi que la page d’offre depuis laquelle vous écrivez. Ce site n’utilise ni cookie publicitaire, ni outil de mesure d’audience, ni pixel de suivi.',
  },
  {
    title: 'Pourquoi',
    body: 'Pour répondre à votre demande, sur la base de votre démarche (intérêt légitime à vous répondre). Rien n’est revendu ni utilisé pour de la prospection automatisée.',
  },
  {
    title: 'Où et combien de temps',
    body: 'Les messages sont stockés dans Firebase (Google), qui peut les traiter hors de l’Union européenne dans le cadre du Data Privacy Framework UE–États-Unis. Ils sont conservés 12 mois au plus, puis supprimés.',
  },
  {
    title: 'Vos droits',
    body: 'Vous pouvez demander l’accès, la rectification ou la suppression de vos données en écrivant à hello@clemichelabs.com. Vous pouvez aussi saisir la CNIL (cnil.fr).',
  },
  {
    title: 'Responsable du traitement',
    body: 'Clément Balanger EI, SIREN 884 656 109.',
  },
] as const
