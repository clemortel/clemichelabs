<script setup lang="ts">
interface Props {
  id: string
  index: string
  label: string
  title?: string
}

withDefaults(defineProps<Props>(), {
  title: undefined,
})
</script>

<template>
  <section
    :id="id"
    class="scroll-mt-4 border-t border-rule dark:border-rule-dark"
  >
    <div
      class="mx-auto max-w-content px-5 py-16 sm:px-8 md:grid md:grid-cols-[9rem_1fr] md:gap-12 md:py-24"
    >
      <p class="label mb-6 md:mb-0 md:pt-3">
        {{ index }} — {{ label }}
      </p>
      <div>
        <h2
          v-if="title"
          class="mb-10 max-w-prose font-serif text-3xl leading-tight tracking-tight md:mb-14 md:text-[2.6rem]"
        >
          {{ title }}
        </h2>
        <slot />
      </div>
    </div>
  </section>
</template>
