<script setup lang="ts">
import {
  aboutParagraphs,
  aboutTitle,
  photoAlt,
  skillGroups,
  timeline,
} from '~/data/content'
</script>

<template>
  <SectionBlock id="a-propos" index="04" label="À propos" :title="aboutTitle">
    <div class="grid gap-12 md:grid-cols-[1fr_15rem]">
      <div class="max-w-prose space-y-5 leading-relaxed">
        <p v-for="paragraph in aboutParagraphs" :key="paragraph">
          {{ paragraph }}
        </p>
      </div>
      <figure class="order-first md:order-none">
        <NuxtImg
          src="/images/photo_visage.jpg"
          :alt="photoAlt"
          width="240"
          height="281"
          class="w-40 rounded-sm grayscale-[35%] md:w-full"
          loading="lazy"
        />
      </figure>
    </div>

    <div class="mt-16 grid gap-12 md:grid-cols-2">
      <div>
        <h3 class="label mb-4">Parcours</h3>
        <ul class="divide-y divide-rule text-sm dark:divide-rule-dark">
          <li
            v-for="item in timeline"
            :key="item.period + item.place"
            class="grid grid-cols-[6.5rem_1fr] gap-4 py-3"
          >
            <span class="font-mono text-xs leading-6 text-soft">
              {{ item.period }}
            </span>
            <span>
              {{ item.role }}
              <span class="text-soft">· {{ item.place }}</span>
            </span>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="label mb-4">Outils</h3>
        <dl class="divide-y divide-rule text-sm dark:divide-rule-dark">
          <div
            v-for="group in skillGroups"
            :key="group.label"
            class="grid grid-cols-[6.5rem_1fr] gap-4 py-3"
          >
            <dt class="font-mono text-xs leading-6 text-soft">
              {{ group.label }}
            </dt>
            <dd>{{ group.items.join(', ') }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </SectionBlock>
</template>
