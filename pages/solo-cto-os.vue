<script setup lang="ts">
import { brandName } from '~/data/content'

useHead({
  title: `Solo CTO-OS — ${brandName}`,
  meta: [
    {
      name: 'description',
      content: 'Solo CTO-OS Notion Workspace - Coming Soon',
    },
  ],
})
</script>

<template>
  <PageShell>
    <div class="mx-auto max-w-content px-5 py-16 sm:px-8 md:py-24">
      <h1 class="font-serif text-4xl tracking-tight md:text-5xl">
        Solo CTO-OS
      </h1>
      <p class="mt-4 text-lg text-soft">Coming soon.</p>
      <NuxtLink to="/pricing" class="link mt-10 inline-block text-sm">
        ← Back to products
      </NuxtLink>
    </div>
  </PageShell>
</template>
