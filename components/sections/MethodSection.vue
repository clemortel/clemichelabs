<script setup lang="ts">
import { aiNote, aiNoteTitle, methodSteps, methodTitle } from '~/data/content'
</script>

<template>
  <SectionBlock id="methode" :title="methodTitle">
    <ol class="grid gap-x-12 gap-y-8 sm:grid-cols-2">
      <li v-for="step in methodSteps" :key="step.number" class="max-w-[36ch]">
        <h3 class="font-semibold">
          <span class="text-accent dark:text-accent-dark">{{ step.number }}.</span>
          {{ step.title }}
        </h3>
        <p class="mt-1 leading-relaxed text-soft">{{ step.description }}</p>
      </li>
    </ol>

    <aside class="mt-12 max-w-prose rounded-md bg-surface p-5 dark:bg-surface-dark">
      <h3 class="font-semibold">{{ aiNoteTitle }}</h3>
      <p class="mt-1 leading-relaxed">{{ aiNote }}</p>
    </aside>
  </SectionBlock>
</template>
