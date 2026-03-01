<script setup lang="ts">
const colorMode = useColorMode()
</script>

<template>
  <div class="relative min-h-screen overflow-hidden">
    <div
      v-if="colorMode.value === 'dark'"
      class="pointer-events-none fixed inset-0 bg-bg-dark"
    >
      <div
        class="absolute -left-1/4 -top-1/4 h-[150%] w-[150%] bg-[radial-gradient(ellipse_at_top_left,rgba(0,242,255,0.08)_0%,transparent_50%)]"
      />
    </div>
    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>
