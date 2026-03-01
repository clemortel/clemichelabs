<script setup lang="ts">
import { navItems } from '~/data/content'

const sectionIds: readonly string[] = [
  'hero',
  ...navItems.map((item: string) => item.toLowerCase()),
]
const activeSection: Ref<string> = useScrollSpy(sectionIds)

provide('activeSection', activeSection)

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'ClemicheLabs',
        description:
          'Paris-based micro-SaaS studio & fractional CTO. We build weird but profitable products.',
        url: 'https://clemichelabs.com',
        email: 'hello@clemichelabs.com',
        founder: {
          '@type': 'Person',
          name: 'Clement Balanger',
          jobTitle: 'Founder & CTO',
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Paris',
          addressCountry: 'FR',
        },
        areaServed: 'Worldwide',
        serviceType: [
          'Fractional CTO',
          'Micro-SaaS Development',
          'AI & Automation Systems',
        ],
      }),
    },
  ],
})
</script>

<template>
  <GradientBackground>
    <NavBar />
    <main>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
    <SiteFooter />
  </GradientBackground>
</template>
