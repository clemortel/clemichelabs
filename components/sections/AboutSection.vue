<script setup lang="ts">
import { founderName, founderTitle, founderBio, founderSkills } from '~/data/content'
</script>

<template>
  <SectionWrapper
    id="about"
    title="About"
    subtitle="The human behind the code."
  >
    <div class="grid items-start gap-12 md:grid-cols-2">
      <!-- Photo -->
      <MotionFadeUp>
        <div class="overflow-hidden rounded-md">
          <img
            src="/images/photo_portrait.jpg"
            :alt="founderName"
            class="h-auto w-full object-cover object-top"
            loading="lazy"
          />
        </div>
      </MotionFadeUp>

      <!-- Bio -->
      <MotionFadeUp :delay="150">
        <div>
          <h3 class="mb-1 text-2xl font-bold text-gray-900 dark:text-white">
            {{ founderName }}
          </h3>
          <p class="mb-6 text-sm font-medium text-primary">
            {{ founderTitle }}
          </p>
          <p class="mb-8 whitespace-pre-line text-sm leading-relaxed text-text-muted-light dark:text-text-muted">
            {{ founderBio }}
          </p>

          <!-- Skills -->
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in founderSkills"
              :key="skill"
              class="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </MotionFadeUp>
    </div>
  </SectionWrapper>
</template>
