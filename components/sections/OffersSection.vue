<script setup lang="ts">
import { offers, offersFootnotes, offersTitle } from '~/data/content'
</script>

<template>
  <SectionBlock id="offres" :title="offersTitle">
    <OfferRow v-for="offer in offers" :key="offer.id" :offer="offer" />
    <div
      class="mt-6 space-y-2 border-t border-rule pt-8 text-sm text-soft dark:border-rule-dark"
    >
      <p v-for="note in offersFootnotes" :key="note">{{ note }}</p>
    </div>
  </SectionBlock>
</template>
