<script setup lang="ts">
import type { LegalSection } from '~/types/content'
import { backHomeLabel } from '~/data/content'

interface Props {
  title: string
  sections: readonly LegalSection[]
}

defineProps<Props>()
</script>

<template>
  <PageShell>
    <div class="mx-auto max-w-content px-5 py-16 sm:px-8 md:py-24">
      <div class="max-w-prose">
        <NuxtLink to="/" class="link text-sm text-soft">
          ← {{ backHomeLabel }}
        </NuxtLink>
        <h1 class="mb-12 mt-8 font-serif text-4xl tracking-tight md:text-5xl">
          {{ title }}
        </h1>
        <div class="space-y-10">
          <section v-for="section in sections" :key="section.title">
            <h2 class="mb-3 font-serif text-xl">
              {{ section.title }}
            </h2>
            <p class="whitespace-pre-line text-sm leading-relaxed text-soft">
              {{ section.body }}
            </p>
          </section>
        </div>
      </div>
    </div>
  </PageShell>
</template>
