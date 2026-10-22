<script setup lang="ts">
import { brandName } from '~/data/content'
import { refundsContent } from '~/data/legal'

const pageTitle: string = 'Refund Policy'

useHead({
  title: `${pageTitle} — ${brandName}`,
  meta: [{ name: 'description', content: 'Refund Policy for Clemiche Labs digital products' }],
})
</script>

<template>
  <LegalDocument :title="pageTitle" :sections="refundsContent" />
</template>
