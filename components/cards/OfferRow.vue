<script setup lang="ts">
import type { OfferItem } from '~/types/content'
import { offerDetailsLabel } from '~/data/content'

interface Props {
  offer: OfferItem
}

defineProps<Props>()
</script>

<template>
  <article
    :id="`offre-${offer.id}`"
    class="grid gap-6 border-t border-rule py-10 first:border-t-0 first:pt-0 dark:border-rule-dark md:grid-cols-[1fr_11rem] md:gap-12"
  >
    <div class="max-w-prose">
      <h3 class="text-xl font-semibold tracking-tight md:text-2xl">
        {{ offer.title }}
      </h3>
      <p class="mt-2 text-soft">{{ offer.forWho }}</p>
      <p class="mt-5 leading-relaxed">{{ offer.description }}</p>
      <ul class="mt-6 space-y-2 text-sm">
        <li
          v-for="item in offer.deliverables"
          :key="item"
          class="flex gap-3"
        >
          <span class="text-soft" aria-hidden="true">–</span>
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>
    <div class="md:pt-1 md:text-right">
      <p class="text-2xl font-semibold tracking-tight">{{ offer.price }}</p>
      <p class="mt-1 text-sm text-soft">{{ offer.duration }}</p>
      <p v-if="offer.note" class="mt-4 text-sm leading-relaxed text-soft">
        {{ offer.note }}
      </p>
      <NuxtLink
        v-if="offer.detailsHref"
        :to="offer.detailsHref"
        class="link mt-4 inline-block text-sm"
      >
        {{ offerDetailsLabel }} →
      </NuxtLink>
    </div>
  </article>
</template>
