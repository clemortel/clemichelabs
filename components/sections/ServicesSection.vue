<script setup lang="ts">
import { services } from '~/data/content'
</script>

<template>
  <SectionWrapper
    id="services"
    title="What We Build"
    subtitle="From strategy to shipping — we cover the full stack."
  >
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <MotionFadeUp
        v-for="(service, index) in services"
        :key="service.title"
        :delay="index * 150"
      >
        <ServiceCard :service="service" />
      </MotionFadeUp>
    </div>
  </SectionWrapper>
</template>
