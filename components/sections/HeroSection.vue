<script setup lang="ts">
import {
  heroAvailability,
  heroEyebrow,
  heroFacts,
  heroIntro,
  heroPrimaryCta,
  heroSecondaryCta,
  heroTitleEmphasis,
  heroTitleLead,
} from '~/data/content'
</script>

<template>
  <section class="mx-auto max-w-content px-5 pb-16 pt-14 sm:px-8 md:pb-24 md:pt-24">
    <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
      <p class="label">{{ heroEyebrow }}</p>
      <p class="label flex items-center gap-2 !text-ink dark:!text-ink-dark">
        <span
          class="inline-block h-1.5 w-1.5 rounded-full bg-accent dark:bg-accent-dark"
          aria-hidden="true"
        />
        {{ heroAvailability }}
      </p>
    </div>

    <h1
      class="mt-8 max-w-[19ch] font-serif text-[2.6rem] leading-[1.06] tracking-tight sm:text-6xl md:text-7xl"
    >
      {{ heroTitleLead }}
      <em class="text-accent dark:text-accent-dark">{{ heroTitleEmphasis }}</em>
    </h1>

    <p class="mt-8 max-w-prose text-lg leading-relaxed text-soft">
      {{ heroIntro }}
    </p>

    <div class="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
      <a href="#contact" class="button-primary">
        {{ heroPrimaryCta }} <span aria-hidden="true">→</span>
      </a>
      <a href="#offres" class="link text-sm">{{ heroSecondaryCta }}</a>
    </div>

    <dl
      class="mt-16 grid gap-8 border-t border-rule pt-8 dark:border-rule-dark sm:grid-cols-3 md:mt-24"
    >
      <div v-for="fact in heroFacts" :key="fact.value">
        <dt class="font-serif text-4xl tracking-tight">{{ fact.value }}</dt>
        <dd class="mt-2 max-w-[26ch] text-sm leading-relaxed text-soft">
          {{ fact.label }}
        </dd>
      </div>
    </dl>
  </section>
</template>
