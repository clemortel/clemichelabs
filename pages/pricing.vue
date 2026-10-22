<script setup lang="ts">
import { brandName } from '~/data/content'
import { pricingItems } from '~/data/products'

useHead({
  title: `Products — ${brandName}`,
  meta: [
    {
      name: 'description',
      content: `Pricing for ${brandName} digital products and templates`,
    },
  ],
})
</script>

<template>
  <PageShell>
    <div class="mx-auto max-w-content px-5 py-16 sm:px-8 md:py-24">
      <div class="max-w-prose">
        <p class="label">Clemiche Labs</p>
        <h1 class="mb-12 mt-4 font-serif text-4xl tracking-tight md:text-5xl">
          Products
        </h1>

        <table class="w-full text-left text-sm">
          <thead>
            <tr class="border-b border-rule dark:border-rule-dark">
              <th class="label py-3 font-normal">Product</th>
              <th class="label py-3 font-normal">Price</th>
              <th class="label py-3 text-right font-normal">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-rule dark:divide-rule-dark">
            <tr v-for="item in pricingItems" :key="item.paddleProductId">
              <td class="py-4 pr-4">{{ item.name }}</td>
              <td class="py-4 pr-4 font-serif text-lg">{{ item.price }}</td>
              <td class="py-4 text-right">
                <button
                  type="button"
                  class="button-primary !px-4 !py-2"
                  @click="() => console.log('Buy:', item.paddleProductId)"
                >
                  Buy with Paddle
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-sm text-soft">
          <NuxtLink to="/solo-cto-os" class="link">Solo CTO-OS</NuxtLink>
          <NuxtLink to="/terms" class="link">Terms</NuxtLink>
          <NuxtLink to="/privacy" class="link">Privacy</NuxtLink>
          <NuxtLink to="/refunds" class="link">Refunds</NuxtLink>
        </div>
      </div>
    </div>
  </PageShell>
</template>
