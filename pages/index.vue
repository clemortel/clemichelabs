<script setup lang="ts">
import {
  email,
  offers,
  personName,
  siteDescription,
  siteUrl,
} from '~/data/content'
import type { OfferItem } from '~/types/content'

interface OfferSchema {
  readonly '@type': 'Offer'
  readonly name: string
  readonly description: string
}

const offerSchemas: readonly OfferSchema[] = offers.map(
  (offer: OfferItem): OfferSchema => ({
    '@type': 'Offer',
    name: offer.title,
    description: `${offer.description} ${offer.price}, ${offer.duration}.`,
  })
)

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Person',
            '@id': `${siteUrl}/#clement`,
            name: personName,
            jobTitle: 'Ingénieur produit, tech lead Flutter',
            url: siteUrl,
            email: `mailto:${email}`,
            image: `${siteUrl}/images/photo_visage.jpg`,
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Paris',
              addressCountry: 'FR',
            },
            knowsAbout: [
              'Flutter',
              'Dart',
              'Supabase',
              'Firebase',
              'Node.js',
              'TypeScript',
              'LLM integration',
              'Claude Code',
            ],
            sameAs: [
              'https://www.linkedin.com/in/clementbalanger',
              'https://github.com/clemortel',
            ],
          },
          {
            '@type': 'ProfessionalService',
            name: 'Clemiche Labs',
            description: siteDescription,
            url: siteUrl,
            founder: { '@id': `${siteUrl}/#clement` },
            areaServed: ['FR', 'EU'],
            makesOffer: offerSchemas,
          },
        ],
      }),
    },
  ],
})
</script>

<template>
  <PageShell>
    <HeroSection />
    <OffersSection />
    <WorkSection />
    <MethodSection />
    <AboutSection />
    <FaqSection />
    <ContactSection />
  </PageShell>
</template>
