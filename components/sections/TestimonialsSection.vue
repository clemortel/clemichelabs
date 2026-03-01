<script setup lang="ts">
import { testimonials } from '~/data/content'
</script>

<template>
  <SectionWrapper
    id="testimonials"
    title="What People Say"
    subtitle="Don't take our word for it."
  >
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <MotionFadeUp
        v-for="(testimonial, index) in testimonials"
        :key="testimonial.author"
        :delay="index * 150"
      >
        <TestimonialCard :testimonial="testimonial" />
      </MotionFadeUp>
    </div>
  </SectionWrapper>
</template>
