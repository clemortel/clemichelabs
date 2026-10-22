<script setup lang="ts">
import {
  heroEyebrow,
  heroIntro,
  heroNotice,
  heroNoticeLabel,
  heroNoticeLink,
  heroPrimaryCta,
  heroSecondaryCta,
  heroTitleEmphasis,
  heroTitleLead,
} from '~/data/content'
</script>

<template>
  <section class="mx-auto max-w-content px-5 pb-14 pt-14 sm:px-8 md:pb-20 md:pt-20">
    <p class="label">{{ heroEyebrow }}</p>

    <h1
      class="mt-5 max-w-[24ch] text-4xl font-semibold leading-tight tracking-tight sm:text-5xl"
    >
      {{ heroTitleLead }}
      <span class="text-accent dark:text-accent-dark">{{ heroTitleEmphasis }}</span>
    </h1>

    <p class="mt-6 max-w-prose text-lg leading-relaxed text-soft">
      {{ heroIntro }}
    </p>

    <div class="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
      <a href="#contact" class="button-primary">
        {{ heroPrimaryCta }} <span aria-hidden="true">→</span>
      </a>
      <a href="#offres" class="link text-sm">{{ heroSecondaryCta }}</a>
    </div>

    <aside
      class="mt-12 max-w-prose rounded-md bg-surface p-5 text-sm leading-relaxed dark:bg-surface-dark"
    >
      <p class="font-semibold">{{ heroNoticeLabel }}</p>
      <p class="mt-1">{{ heroNotice }}</p>
      <NuxtLink :to="heroNoticeLink.href" class="link mt-2 inline-block">
        {{ heroNoticeLink.label }} →
      </NuxtLink>
    </aside>
  </section>
</template>
