<script setup lang="ts">
import {
  navContact,
  navLinks,
  personName,
  themeToggleLabel,
} from '~/data/content'

const colorMode = useColorMode()

function toggleTheme(): void {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <header class="border-b border-rule dark:border-rule-dark">
    <div
      class="mx-auto flex max-w-content items-center justify-between gap-6 px-5 py-5 sm:px-8"
    >
      <NuxtLink to="/" class="font-serif text-lg tracking-tight">
        {{ personName }}
      </NuxtLink>

      <nav class="flex items-center gap-6 text-sm" aria-label="Navigation principale">
        <a
          v-for="item in navLinks"
          :key="item.href"
          :href="item.href"
          class="hidden text-soft transition-colors hover:text-ink dark:hover:text-ink-dark md:inline"
        >
          {{ item.label }}
        </a>
        <a :href="navContact.href" class="link font-medium">
          {{ navContact.label }}
        </a>
        <button
          type="button"
          class="text-soft transition-colors hover:text-ink dark:hover:text-ink-dark"
          :aria-label="themeToggleLabel"
          :title="themeToggleLabel"
          @click="toggleTheme"
        >
          <svg
            viewBox="0 0 16 16"
            class="h-4 w-4"
            aria-hidden="true"
          >
            <circle
              cx="8"
              cy="8"
              r="6.5"
              fill="none"
              stroke="currentColor"
              stroke-width="1.2"
            />
            <path d="M8 1.5a6.5 6.5 0 0 1 0 13z" fill="currentColor" />
          </svg>
        </button>
      </nav>
    </div>
  </header>
</template>
