<script setup lang="ts">
import { brandName } from '~/data/content'

useHead({
  title: `Solo CTO-OS - ${brandName}`,
  meta: [
    {
      name: 'description',
      content: 'Solo CTO-OS Notion Workspace - Coming Soon',
    },
  ],
})
</script>

<template>
  <GradientBackground>
    <NavBar />
    <main class="px-5 py-16 sm:px-10 md:px-20">
      <div class="mx-auto max-w-content text-center">
        <h1
          class="mb-8 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-5xl"
        >
          Solo CTO-OS
        </h1>
        <p class="mb-12 text-lg text-text-muted-light dark:text-text-muted">
          Coming Soon
        </p>
        <NuxtLink
          to="/pricing"
          class="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-gray-900 transition-all hover:shadow-neon dark:text-bg-dark"
        >
          <Icon name="heroicons:arrow-left-16-solid" class="h-4 w-4" />
          Back to Pricing
        </NuxtLink>
      </div>
    </main>
    <SiteFooter />
  </GradientBackground>
</template>
