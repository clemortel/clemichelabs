export function useScrollSpy(sectionIds: readonly string[]): Ref<string> {
  const activeSection: Ref<string> = ref(sectionIds[0] ?? '')

  onMounted(() => {
    const observer: IntersectionObserver = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id
          }
        }
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0,
      }
    )

    for (const id of sectionIds) {
      const el: HTMLElement | null = document.getElementById(id)
      if (el) {
        observer.observe(el)
      }
    }

    onUnmounted(() => {
      observer.disconnect()
    })
  })

  return activeSection
}
