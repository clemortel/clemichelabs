<script setup lang="ts">
import { processSteps } from '~/data/content'
</script>

<template>
  <SectionWrapper
    id="process"
    title="How We Work"
    subtitle="From first call to production in weeks, not months."
  >
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <MotionFadeUp
        v-for="(step, index) in processSteps"
        :key="step.number"
        :delay="index * 150"
      >
        <ProcessStepCard :step="step" />
      </MotionFadeUp>
    </div>
  </SectionWrapper>
</template>
