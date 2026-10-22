<script setup lang="ts">
import { brandName } from '~/data/content'
import { privacyContent } from '~/data/legal'

const pageTitle: string = 'Confidentialité'

useHead({
  title: `${pageTitle} — ${brandName}`,
  meta: [
    {
      name: 'description',
      content: 'Données collectées par le formulaire de contact de clemichelabs.com.',
    },
  ],
})
</script>

<template>
  <LegalDocument :title="pageTitle" :sections="privacyContent" />
</template>
