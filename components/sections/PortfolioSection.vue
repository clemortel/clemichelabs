<script setup lang="ts">
import { projects } from '~/data/content'
</script>

<template>
  <SectionWrapper
    id="portfolio"
    title="Our Work"
    subtitle="Real products, real users, real revenue."
  >
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <MotionFadeUp
        v-for="(project, index) in projects"
        :key="project.title"
        :delay="index * 150"
      >
        <ProjectCard :project="project" />
      </MotionFadeUp>
    </div>
  </SectionWrapper>
</template>
