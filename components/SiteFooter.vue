<script setup lang="ts">
import {
  footerCopyright,
  footerIdentity,
  footerLinks,
} from '~/data/content'
</script>

<template>
  <footer class="border-t border-rule dark:border-rule-dark">
    <div
      class="mx-auto flex max-w-content flex-col gap-4 px-5 py-10 text-sm text-soft sm:px-8 md:flex-row md:items-center md:justify-between"
    >
      <p>{{ footerIdentity }}</p>
      <div class="flex flex-wrap items-center gap-x-5 gap-y-2">
        <NuxtLink
          v-for="item in footerLinks"
          :key="item.href"
          :to="item.href"
          class="link"
        >
          {{ item.label }}
        </NuxtLink>
        <span class="font-mono text-xs">{{ footerCopyright }}</span>
      </div>
    </div>
  </footer>
</template>
