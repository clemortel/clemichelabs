<script setup lang="ts">
import type { ProjectItem } from '~/types/content'

defineProps<{
  project: ProjectItem
}>()
</script>

<template>
  <component
    :is="project.url ? 'a' : 'div'"
    :href="project.url ?? undefined"
    :target="project.url ? '_blank' : undefined"
    :rel="project.url ? 'noopener noreferrer' : undefined"
    class="group block rounded-md border border-black/5 bg-white p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-neon-subtle dark:border-white/5 dark:bg-card-dark"
    :class="project.url ? 'cursor-pointer' : ''"
  >
    <div class="mb-3 flex items-center justify-between">
      <h3 class="text-lg font-bold text-gray-900 dark:text-white">
        {{ project.title }}
      </h3>
      <span
        class="rounded-full px-3 py-1 text-xs font-bold"
        :class="
          project.status === 'Live'
            ? 'bg-success/10 text-success'
            : 'bg-primary/10 text-primary'
        "
      >
        {{ project.status }}
      </span>
    </div>
    <p class="mb-4 text-sm leading-relaxed text-text-muted-light dark:text-text-muted">
      {{ project.description }}
    </p>
    <div class="flex flex-wrap gap-2">
      <span
        v-for="tag in project.tags"
        :key="tag"
        class="rounded-full bg-accent-dark/50 px-3 py-1 text-xs font-medium text-text-muted dark:bg-accent-dark dark:text-text-muted"
      >
        {{ tag }}
      </span>
    </div>
    <div
      v-if="project.url"
      class="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100"
    >
      Visit project
      <Icon name="heroicons:arrow-top-right-on-square-16-solid" class="h-4 w-4" />
    </div>
  </component>
</template>
