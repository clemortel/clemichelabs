<script setup lang="ts">
import { brandName } from '~/data/content'
import { privacyContent } from '~/data/legal'

const pageTitle: string = 'Privacy Policy'

useHead({
  title: `${pageTitle} — ${brandName}`,
  meta: [{ name: 'description', content: 'Privacy Policy for Clemiche Labs' }],
})
</script>

<template>
  <LegalDocument :title="pageTitle" :sections="privacyContent" />
</template>
