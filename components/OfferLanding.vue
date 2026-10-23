<script setup lang="ts">
import type { OfferLandingContent } from '~/types/content'
import { siteUrl } from '~/data/content'

interface Props {
  content: OfferLandingContent
}

const props = defineProps<Props>()

useHead({
  title: props.content.metaTitle,
  meta: [
    { name: 'description', content: props.content.metaDescription },
    { property: 'og:title', content: props.content.metaTitle },
    { property: 'og:description', content: props.content.metaDescription },
  ],
  link: [{ rel: 'canonical', href: `${siteUrl}${props.content.path}` }],
})
</script>

<template>
  <PageShell>
    <section class="mx-auto max-w-content px-5 pb-14 pt-14 sm:px-8 md:pt-20">
      <p class="label">{{ content.eyebrow }}</p>
      <h1
        class="mt-5 max-w-[22ch] text-4xl font-semibold leading-tight tracking-tight sm:text-5xl"
      >
        {{ content.headline }}
      </h1>
      <p class="mt-6 max-w-prose text-lg leading-relaxed text-soft">
        {{ content.intro }}
      </p>
      <div class="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
        <!-- Not a mailto: it does nothing for visitors without a desktop
             mail client, which is most webmail users. -->
        <a href="#contact" class="button-primary">
          {{ content.cta }} <span aria-hidden="true">→</span>
        </a>
        <p class="text-sm text-soft">{{ content.priceLine }}</p>
      </div>
    </section>

    <SectionBlock id="probleme" :title="content.problemTitle">
      <div class="max-w-prose space-y-4 leading-relaxed">
        <p v-for="paragraph in content.problem" :key="paragraph">
          {{ paragraph }}
        </p>
      </div>
      <ul v-if="content.sources.length" class="mt-6 space-y-1 text-sm text-soft">
        <li v-for="source in content.sources" :key="source.href">
          <a :href="source.href" class="link" target="_blank" rel="noopener">
            {{ source.label }} ↗
          </a>
        </li>
      </ul>
    </SectionBlock>

    <SectionBlock id="contenu" :title="content.checksTitle">
      <div class="grid gap-10 md:grid-cols-3">
        <div v-for="group in content.checks" :key="group.label">
          <h3 class="label mb-3">{{ group.label }}</h3>
          <ul class="space-y-2 text-sm">
            <li v-for="item in group.items" :key="item" class="flex gap-3">
              <span class="text-soft" aria-hidden="true">–</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </SectionBlock>

    <SectionBlock id="livrable" :title="content.deliverablesTitle">
      <ul class="max-w-prose space-y-2">
        <li v-for="item in content.deliverables" :key="item" class="flex gap-3">
          <span class="text-soft" aria-hidden="true">–</span>
          <span>{{ item }}</span>
        </li>
      </ul>
      <p v-if="content.limits" class="mt-6 max-w-prose text-sm text-soft">
        {{ content.limits }}
      </p>
    </SectionBlock>

    <SectionBlock id="deroule" :title="content.stepsTitle">
      <ol class="grid gap-x-12 gap-y-8 sm:grid-cols-2">
        <li v-for="step in content.steps" :key="step.number" class="max-w-[36ch]">
          <h3 class="font-semibold">
            <span class="text-accent dark:text-accent-dark">{{ step.number }}.</span>
            {{ step.title }}
          </h3>
          <p class="mt-1 leading-relaxed text-soft">{{ step.description }}</p>
        </li>
      </ol>
      <div class="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
        <a href="#contact" class="button-primary">
          {{ content.cta }} <span aria-hidden="true">→</span>
        </a>
        <NuxtLink to="/#offres" class="link text-sm">
          {{ content.otherOffers }}
        </NuxtLink>
      </div>
    </SectionBlock>

    <ContactSection :topic="content.contactTopic" />
  </PageShell>
</template>
