<script setup lang="ts">
import { brandName } from '~/data/content'
import { legalSections } from '~/data/legal'

const pageTitle: string = 'Mentions légales'

useHead({
  title: `${pageTitle} — ${brandName}`,
  meta: [{ name: 'description', content: 'Mentions légales du site clemichelabs.com' }],
})
</script>

<template>
  <LegalDocument :title="pageTitle" :sections="legalSections" />
</template>
