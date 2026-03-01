<script setup lang="ts">
import type { ProcessStep } from '~/types/content'

defineProps<{
  step: ProcessStep
}>()
</script>

<template>
  <div class="rounded-md border border-black/5 bg-white p-6 dark:border-white/5 dark:bg-card-dark">
    <p class="mb-3 text-4xl font-extrabold text-primary/20">
      {{ step.number }}
    </p>
    <h3 class="mb-2 text-lg font-bold text-gray-900 dark:text-white">
      {{ step.title }}
    </h3>
    <p class="text-sm leading-relaxed text-text-muted-light dark:text-text-muted">
      {{ step.description }}
    </p>
  </div>
</template>
