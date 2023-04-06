<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Kibera Template')

useHead({
  title: 'Kibera - Template',
})
</script>

<template>
  <div class="page-content-inner">Templates</div>
</template>
