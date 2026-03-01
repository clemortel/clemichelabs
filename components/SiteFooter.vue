<script setup lang="ts">
import { brandName, footerTagline, footerText, legalLink } from '~/data/content'
</script>

<template>
  <footer
    class="border-t border-white/5 px-5 py-12 text-center sm:px-10 md:px-20"
  >
    <div class="mx-auto max-w-content">
      <p class="mb-2 text-lg font-bold text-gray-900 dark:text-white">
        {{ brandName }}
      </p>
      <p class="mb-4 text-sm text-text-muted-light dark:text-text-muted">
        {{ footerTagline }}
      </p>
      <p class="mb-2 text-xs text-text-muted-light dark:text-text-muted">
        {{ footerText }}
      </p>
      <NuxtLink
        to="/legal"
        class="text-xs text-primary underline-offset-4 hover:underline"
      >
        {{ legalLink }}
      </NuxtLink>
    </div>
  </footer>
</template>
