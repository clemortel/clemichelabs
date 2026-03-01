<script setup lang="ts">
interface Props {
  outlined?: boolean
  href?: string
  icon?: string
}

withDefaults(defineProps<Props>(), {
  outlined: false,
  href: undefined,
  icon: undefined,
})

defineEmits<{
  click: [event: MouseEvent]
}>()
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :target="href ? '_blank' : undefined"
    :rel="href ? 'noopener noreferrer' : undefined"
    class="group inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold transition-all duration-300"
    :class="
      outlined
        ? 'border border-primary/30 text-primary hover:border-primary hover:shadow-neon-subtle dark:border-primary/30 dark:text-primary'
        : 'bg-primary text-bg-dark hover:shadow-neon dark:bg-primary dark:text-bg-dark'
    "
    @click="$emit('click', $event)"
  >
    <Icon v-if="icon" :name="icon" class="h-5 w-5" />
    <slot />
  </component>
</template>
