<script setup lang="ts">
interface Props {
  delay?: number
}

const props = withDefaults(defineProps<Props>(), {
  delay: 0,
})

const el: Ref<HTMLElement | null> = ref(null)
const isVisible: Ref<boolean> = ref(false)

onMounted(() => {
  if (!el.value) return

  const observer: IntersectionObserver = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setTimeout(() => {
            isVisible.value = true
          }, props.delay)
          observer.unobserve(entry.target)
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
  )

  observer.observe(el.value)

  onUnmounted(() => {
    observer.disconnect()
  })
})
</script>

<template>
  <div
    ref="el"
    class="transition-all duration-700 ease-out"
    :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'"
  >
    <slot />
  </div>
</template>
