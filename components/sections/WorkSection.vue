<script setup lang="ts">
import { workItems, workTitle } from '~/data/content'
</script>

<template>
  <SectionBlock id="travaux" index="02" label="Travaux" :title="workTitle">
    <WorkEntry v-for="item in workItems" :key="item.title" :item="item" />
  </SectionBlock>
</template>
