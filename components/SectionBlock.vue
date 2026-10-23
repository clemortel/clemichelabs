<script setup lang="ts">
interface Props {
  id: string
  title?: string
}

withDefaults(defineProps<Props>(), {
  title: undefined,
})
</script>

<template>
  <section
    :id="id"
    class="scroll-mt-16 border-t border-rule dark:border-rule-dark"
  >
    <div class="mx-auto max-w-content px-5 py-14 sm:px-8 md:py-20">
      <h2
        v-if="title"
        class="mb-8 max-w-prose text-2xl font-semibold tracking-tight md:mb-10 md:text-3xl"
      >
        {{ title }}
      </h2>
      <slot />
    </div>
  </section>
</template>
