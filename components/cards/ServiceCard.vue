<script setup lang="ts">
import type { ServiceItem } from '~/types/content'

defineProps<{
  service: ServiceItem
}>()
</script>

<template>
  <div
    class="group rounded-md border border-black/5 bg-white p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-neon-subtle dark:border-white/5 dark:bg-card-dark"
  >
    <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-sm bg-primary/10 text-primary">
      <Icon :name="service.icon" class="h-6 w-6" />
    </div>
    <h3 class="mb-3 text-lg font-bold text-gray-900 dark:text-white">
      {{ service.title }}
    </h3>
    <p class="mb-4 text-sm leading-relaxed text-text-muted-light dark:text-text-muted">
      {{ service.description }}
    </p>
    <ul class="space-y-2">
      <li
        v-for="feature in service.features"
        :key="feature"
        class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
      >
        <Icon name="heroicons:check-16-solid" class="h-4 w-4 shrink-0 text-primary" />
        {{ feature }}
      </li>
    </ul>
  </div>
</template>
