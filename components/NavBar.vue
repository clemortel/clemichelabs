<script setup lang="ts">
import { brandName, navItems } from '~/data/content'

const colorMode = useColorMode()
const activeSection = inject<Ref<string>>('activeSection', ref(''))
const isMobileMenuOpen: Ref<boolean> = ref(false)

function toggleTheme(): void {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

function scrollTo(section: string): void {
  isMobileMenuOpen.value = false
  const el: HTMLElement | null = document.getElementById(
    section.toLowerCase()
  )
  el?.scrollIntoView({ behavior: 'smooth' })
}

function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <nav
    class="sticky top-0 z-50 border-b border-white/5 backdrop-blur-md dark:border-white/5"
    :class="
      colorMode.value === 'dark'
        ? 'bg-bg-dark/80'
        : 'bg-white/80'
    "
  >
    <div class="mx-auto flex max-w-content items-center justify-between px-5 py-4 sm:px-10 md:px-20">
      <button
        class="text-lg font-bold tracking-tight text-gray-900 dark:text-white"
        @click="scrollToTop"
      >
        {{ brandName }}
      </button>

      <!-- Desktop nav -->
      <div class="hidden items-center gap-1 md:flex">
        <button
          v-for="item in navItems"
          :key="item"
          class="rounded-full px-4 py-2 text-sm font-medium transition-colors"
          :class="
            activeSection === item.toLowerCase()
              ? 'text-primary'
              : 'text-text-muted-light hover:text-gray-900 dark:text-text-muted dark:hover:text-white'
          "
          @click="scrollTo(item)"
        >
          {{ item }}
        </button>

        <button
          class="ml-4 rounded-full p-2 text-text-muted-light transition-colors hover:text-gray-900 dark:text-text-muted dark:hover:text-white"
          aria-label="Toggle theme"
          @click="toggleTheme"
        >
          <Icon
            :name="
              colorMode.value === 'dark'
                ? 'heroicons:sun-20-solid'
                : 'heroicons:moon-20-solid'
            "
            class="h-5 w-5"
          />
        </button>
      </div>

      <!-- Mobile menu button -->
      <div class="flex items-center gap-2 md:hidden">
        <button
          class="rounded-full p-2 text-text-muted-light transition-colors hover:text-gray-900 dark:text-text-muted dark:hover:text-white"
          aria-label="Toggle theme"
          @click="toggleTheme"
        >
          <Icon
            :name="
              colorMode.value === 'dark'
                ? 'heroicons:sun-20-solid'
                : 'heroicons:moon-20-solid'
            "
            class="h-5 w-5"
          />
        </button>
        <button
          class="rounded-full p-2 text-text-muted-light transition-colors hover:text-gray-900 dark:text-text-muted dark:hover:text-white"
          aria-label="Toggle menu"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <Icon
            :name="
              isMobileMenuOpen
                ? 'heroicons:x-mark-20-solid'
                : 'heroicons:bars-3-20-solid'
            "
            class="h-5 w-5"
          />
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="max-h-0 opacity-0"
      enter-to-class="max-h-96 opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="max-h-96 opacity-100"
      leave-to-class="max-h-0 opacity-0"
    >
      <div
        v-if="isMobileMenuOpen"
        class="overflow-hidden border-t border-white/5 md:hidden"
      >
        <div class="flex flex-col gap-1 px-5 py-4">
          <button
            v-for="item in navItems"
            :key="item"
            class="rounded-sm px-4 py-3 text-left text-sm font-medium transition-colors"
            :class="
              activeSection === item.toLowerCase()
                ? 'text-primary'
                : 'text-text-muted-light dark:text-text-muted'
            "
            @click="scrollTo(item)"
          >
            {{ item }}
          </button>
        </div>
      </div>
    </Transition>
  </nav>
</template>
