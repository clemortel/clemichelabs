<script setup lang="ts">
import { aiNote, aiNoteTitle, methodSteps, methodTitle } from '~/data/content'
</script>

<template>
  <SectionBlock id="methode" index="03" label="Méthode" :title="methodTitle">
    <ol class="grid gap-x-12 gap-y-10 sm:grid-cols-2">
      <li v-for="step in methodSteps" :key="step.number" class="max-w-[34ch]">
        <p class="font-mono text-sm text-accent dark:text-accent-dark">
          {{ step.number }}
        </p>
        <h3 class="mt-2 font-serif text-xl tracking-tight">{{ step.title }}</h3>
        <p class="mt-2 leading-relaxed text-soft">{{ step.description }}</p>
      </li>
    </ol>

    <aside
      class="mt-16 max-w-prose border-l-2 border-accent pl-6 dark:border-accent-dark"
    >
      <h3 class="font-serif text-xl italic">{{ aiNoteTitle }}</h3>
      <p class="mt-3 leading-relaxed">{{ aiNote }}</p>
    </aside>
  </SectionBlock>
</template>
