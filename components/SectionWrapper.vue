<script setup lang="ts">
interface Props {
  id?: string
  title?: string
  subtitle?: string
  background?: boolean
}

withDefaults(defineProps<Props>(), {
  id: undefined,
  title: undefined,
  subtitle: undefined,
  background: false,
})
</script>

<template>
  <section
    :id="id"
    class="relative px-5 py-16 sm:px-10 md:px-20 md:py-24"
    :class="background ? 'bg-card-dark/30 dark:bg-card-dark/30' : ''"
  >
    <div class="mx-auto max-w-content">
      <div v-if="title" class="mb-12 text-center">
        <h2
          class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-4xl"
        >
          {{ title }}
        </h2>
        <p
          v-if="subtitle"
          class="mx-auto max-w-2xl text-text-muted-light dark:text-text-muted"
        >
          {{ subtitle }}
        </p>
      </div>
      <slot />
    </div>
  </section>
</template>
