<script setup lang="ts">
import { brandName, termsContent } from '~/data/content'

useHead({
  title: `Terms of Service - ${brandName}`,
  meta: [
    {
      name: 'description',
      content: `Terms of Service for ${brandName} digital products and services`,
    },
  ],
})
</script>

<template>
  <GradientBackground>
    <NavBar />
    <main class="px-5 py-16 sm:px-10 md:px-20">
      <div class="mx-auto max-w-content">
        <NuxtLink
          to="/"
          class="mb-8 inline-flex items-center gap-1 text-sm text-primary hover:underline"
        >
          <Icon name="heroicons:arrow-left-16-solid" class="h-4 w-4" />
          Back to home
        </NuxtLink>

        <h1
          class="mb-12 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-4xl"
        >
          Terms of Service
        </h1>

        <div class="space-y-10">
          <section
            v-for="section in termsContent"
            :key="section.title"
          >
            <h2 class="mb-3 text-xl font-bold text-gray-900 dark:text-white">
              {{ section.title }}
            </h2>
            <p class="whitespace-pre-line text-sm leading-relaxed text-text-muted-light dark:text-text-muted">
              {{ section.body }}
            </p>
          </section>
        </div>
      </div>
    </main>
    <SiteFooter />
  </GradientBackground>
</template>
