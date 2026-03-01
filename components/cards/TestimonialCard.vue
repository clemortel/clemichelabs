<script setup lang="ts">
import type { TestimonialItem } from '~/types/content'

defineProps<{
  testimonial: TestimonialItem
}>()
</script>

<template>
  <div class="rounded-md border border-black/5 bg-white p-6 dark:border-white/5 dark:bg-card-dark">
    <Icon
      name="heroicons:chat-bubble-bottom-center-text"
      class="mb-4 h-8 w-8 text-primary/30"
    />
    <p class="mb-6 text-sm italic leading-relaxed text-gray-700 dark:text-gray-300">
      "{{ testimonial.quote }}"
    </p>
    <div>
      <p class="text-sm font-bold text-gray-900 dark:text-white">
        {{ testimonial.author }}
      </p>
      <p class="text-xs text-text-muted-light dark:text-text-muted">
        {{ testimonial.role }}
      </p>
    </div>
  </div>
</template>
