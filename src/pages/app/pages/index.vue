<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

type TabId = 'all' | 'publish' | 'pending'
const activeTab = ref<TabId>('all')

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Kibera Pages')

useHead({
  title: 'Kibera - Pages',
})
</script>

<template>
  <div class="page-content-inner">
    <FlexListV2 class="is-navbar" :active-tab="activeTab" />
  </div>
</template>
