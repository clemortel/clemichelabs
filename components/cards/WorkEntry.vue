<script setup lang="ts">
import type { WorkItem } from '~/types/content'

interface Props {
  item: WorkItem
}

defineProps<Props>()

function displayHost(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
}
</script>

<template>
  <article
    class="grid gap-3 border-t border-rule py-8 first:border-t-0 first:pt-0 dark:border-rule-dark md:grid-cols-[9rem_1fr] md:gap-8"
  >
    <p class="text-sm text-soft md:pt-1">{{ item.period }}</p>
    <div class="max-w-prose">
      <h3 class="text-xl font-semibold tracking-tight">
        <a
          v-if="item.url"
          :href="item.url"
          class="link"
          target="_blank"
          rel="noopener"
        >{{ item.title }}</a>
        <span v-else>{{ item.title }}</span>
      </h3>
      <p class="mt-1 text-sm text-soft">
        {{ item.role }}
        <template v-if="item.url">
          · <span class="font-mono text-xs">{{ displayHost(item.url) }}</span>
        </template>
      </p>
      <p class="mt-4 leading-relaxed">{{ item.description }}</p>
      <p class="mt-4 font-mono text-xs text-soft">
        {{ item.stack.join(' · ') }}
      </p>
    </div>
  </article>
</template>
