<script setup lang="ts">
import { brandName, pricingItems } from '~/data/content'

useHead({
  title: `Pricing - ${brandName}`,
  meta: [
    {
      name: 'description',
      content: `Pricing for ${brandName} digital products and templates`,
    },
  ],
})
</script>

<template>
  <GradientBackground>
    <NavBar />
    <main class="px-5 py-16 sm:px-10 md:px-20">
      <div class="mx-auto max-w-content">
        <h1
          class="mb-16 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-5xl"
        >
          Pricing - Clemiche Labs
        </h1>

        <div class="mx-auto max-w-4xl">
          <div class="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-card-dark">
            <table class="w-full">
              <thead>
                <tr class="border-b border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
                  <th class="px-6 py-4 text-left text-sm font-bold text-gray-900 dark:text-white">
                    Product
                  </th>
                  <th class="px-6 py-4 text-left text-sm font-bold text-gray-900 dark:text-white">
                    Price
                  </th>
                  <th class="px-6 py-4 text-left text-sm font-bold text-gray-900 dark:text-white">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, index) in pricingItems"
                  :key="item.paddleProductId"
                  :class="[
                    'border-b border-gray-100 dark:border-gray-700',
                    index === pricingItems.length - 1 ? 'border-b-0' : '',
                  ]"
                >
                  <td class="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                    {{ item.name }}
                  </td>
                  <td class="px-6 py-4 text-sm font-bold text-primary">
                    {{ item.price }}
                  </td>
                  <td class="px-6 py-4">
                    <button
                      class="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-gray-900 transition-all hover:shadow-neon focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:text-bg-dark"
                      @click="() => console.log('Buy:', item.paddleProductId)"
                    >
                      Buy Now
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="mt-12 text-center">
            <div class="flex flex-wrap items-center justify-center gap-4 text-sm text-text-muted-light dark:text-text-muted">
              <NuxtLink
                to="/terms"
                class="hover:text-primary hover:underline"
              >
                Terms
              </NuxtLink>
              <span class="text-gray-400">•</span>
              <NuxtLink
                to="/privacy"
                class="hover:text-primary hover:underline"
              >
                Privacy
              </NuxtLink>
              <span class="text-gray-400">•</span>
              <NuxtLink
                to="/refunds"
                class="hover:text-primary hover:underline"
              >
                Refunds
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </main>
    <SiteFooter />
  </GradientBackground>
</template>
