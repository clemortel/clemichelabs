<script setup lang="ts">
import { tagline, taglineSub, stats } from '~/data/content'

function scrollToContact(): void {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}

function scrollToPortfolio(): void {
  document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="hero" class="relative px-5 py-20 sm:px-10 md:px-20 md:py-32">
    <div class="mx-auto max-w-content text-center">
      <!-- Badge -->
      <MotionFadeUp>
        <div
          class="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
        >
          <span class="h-2 w-2 rounded-full bg-primary" />
          Available for new projects
        </div>
      </MotionFadeUp>

      <!-- Headline -->
      <MotionFadeUp :delay="100">
        <h1
          class="mb-6 whitespace-pre-line text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
        >
          {{ tagline }}
        </h1>
      </MotionFadeUp>

      <!-- Subtitle -->
      <MotionFadeUp :delay="200">
        <p
          class="mx-auto mb-10 max-w-2xl text-lg text-text-muted-light dark:text-text-muted"
        >
          {{ taglineSub }}
        </p>
      </MotionFadeUp>

      <!-- CTAs -->
      <MotionFadeUp :delay="300">
        <div
          class="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <NeonButton icon="heroicons:chat-bubble-left-right" @click="scrollToContact">
            Start a Conversation
          </NeonButton>
          <NeonButton outlined icon="heroicons:eye" @click="scrollToPortfolio">
            See Our Work
          </NeonButton>
        </div>
      </MotionFadeUp>

      <!-- Stats -->
      <MotionFadeUp :delay="400">
        <div class="mx-auto grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <p class="text-2xl font-extrabold text-primary md:text-3xl">
              {{ stat.value }}
            </p>
            <p class="mt-1 text-xs text-text-muted-light dark:text-text-muted">
              {{ stat.label }}
            </p>
          </div>
        </div>
      </MotionFadeUp>
    </div>
  </section>
</template>
