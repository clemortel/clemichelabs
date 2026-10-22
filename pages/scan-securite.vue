<script setup lang="ts">
import { email } from '~/data/content'
import {
  scanChecks,
  scanChecksTitle,
  scanCta,
  scanDeliverables,
  scanDeliverableTitle,
  scanDescription,
  scanEyebrow,
  scanHeadline,
  scanIntro,
  scanMailSubject,
  scanOtherOffers,
  scanPriceLine,
  scanProblem,
  scanProblemTitle,
  scanSteps,
  scanStepsTitle,
  scanTitle,
} from '~/data/scan'

const mailHref: string = `mailto:${email}?subject=${encodeURIComponent(scanMailSubject)}`

useHead({
  title: scanTitle,
  meta: [
    { name: 'description', content: scanDescription },
    { property: 'og:title', content: scanTitle },
    { property: 'og:description', content: scanDescription },
  ],
  link: [{ rel: 'canonical', href: 'https://clemichelabs.com/scan-securite' }],
})
</script>

<template>
  <PageShell>
    <section class="mx-auto max-w-content px-5 pb-16 pt-14 sm:px-8 md:pb-20 md:pt-24">
      <p class="label">{{ scanEyebrow }}</p>
      <h1
        class="mt-6 max-w-[18ch] font-serif text-[2.6rem] leading-[1.06] tracking-tight sm:text-6xl"
      >
        {{ scanHeadline }}
      </h1>
      <p class="mt-8 max-w-prose text-lg leading-relaxed text-soft">
        {{ scanIntro }}
      </p>
      <div class="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
        <a :href="mailHref" class="button-primary">
          {{ scanCta }} <span aria-hidden="true">→</span>
        </a>
        <p class="text-sm text-soft">{{ scanPriceLine }}</p>
      </div>
    </section>

    <SectionBlock id="probleme" index="01" label="Le problème" :title="scanProblemTitle">
      <div class="max-w-prose space-y-5 leading-relaxed">
        <p v-for="paragraph in scanProblem" :key="paragraph">{{ paragraph }}</p>
      </div>
    </SectionBlock>

    <SectionBlock id="controles" index="02" label="Contrôles" :title="scanChecksTitle">
      <div class="grid gap-10 md:grid-cols-3">
        <div v-for="group in scanChecks" :key="group.label">
          <h3 class="label mb-4">{{ group.label }}</h3>
          <ul class="space-y-2 text-sm">
            <li v-for="item in group.items" :key="item" class="flex gap-3">
              <span class="text-soft" aria-hidden="true">—</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </SectionBlock>

    <SectionBlock id="livrable" index="03" label="Livrable" :title="scanDeliverableTitle">
      <ul class="max-w-prose space-y-3">
        <li v-for="item in scanDeliverables" :key="item" class="flex gap-3">
          <span class="text-soft" aria-hidden="true">—</span>
          <span>{{ item }}</span>
        </li>
      </ul>
    </SectionBlock>

    <SectionBlock id="deroule" index="04" label="Déroulé" :title="scanStepsTitle">
      <ol class="grid gap-x-12 gap-y-10 sm:grid-cols-2">
        <li v-for="step in scanSteps" :key="step.number" class="max-w-[34ch]">
          <p class="font-mono text-sm text-accent dark:text-accent-dark">
            {{ step.number }}
          </p>
          <h3 class="mt-2 font-serif text-xl tracking-tight">{{ step.title }}</h3>
          <p class="mt-2 leading-relaxed text-soft">{{ step.description }}</p>
        </li>
      </ol>
      <div class="mt-16 flex flex-wrap items-center gap-x-8 gap-y-4">
        <a :href="mailHref" class="button-primary">
          {{ scanCta }} <span aria-hidden="true">→</span>
        </a>
        <NuxtLink to="/#offres" class="link text-sm">{{ scanOtherOffers }}</NuxtLink>
      </div>
    </SectionBlock>
  </PageShell>
</template>
