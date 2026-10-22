<script setup lang="ts">
import { brandName } from '~/data/content'
import { termsContent } from '~/data/legal'

const pageTitle: string = 'Terms of Service'

useHead({
  title: `${pageTitle} — ${brandName}`,
  meta: [{ name: 'description', content: 'Terms of Service for Clemiche Labs digital products and services' }],
})
</script>

<template>
  <LegalDocument :title="pageTitle" :sections="termsContent" />
</template>
