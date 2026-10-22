<script setup lang="ts">
import { faqItems, faqTitle } from '~/data/content'
</script>

<template>
  <SectionBlock id="questions" :title="faqTitle">
    <div class="max-w-prose divide-y divide-rule border-y border-rule dark:divide-rule-dark dark:border-rule-dark">
      <details
        v-for="item in faqItems"
        :key="item.question"
        class="group py-5"
      >
        <summary
          class="flex cursor-pointer list-none items-baseline justify-between gap-6 font-medium [&::-webkit-details-marker]:hidden"
        >
          {{ item.question }}
          <span
            class="text-soft transition-transform group-open:rotate-45"
            aria-hidden="true"
          >+</span>
        </summary>
        <p class="mt-3 leading-relaxed text-soft">{{ item.answer }}</p>
      </details>
    </div>
  </SectionBlock>
</template>
