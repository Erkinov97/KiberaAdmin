<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'
import { ref } from 'vue'
import CKE from '@ckeditor/ckeditor5-vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Kibera Pages')

useHead({
  title: 'Kibera - create page',
})

const CKEditor = CKE.component
const editorData = ref(`<h2>Your HTML Content</h2>`)
const viewType = ref('pageView')
</script>

<template>
  <div class="page-content-inner">
    <h1 class="mb-4">Создать страницу</h1>
    <div class="columns is-multiline">
      <div class="column is-12">
        <!--Simple Datatable-->
        <div class="columns">
          <div class="column is-9 content">
            <CKEditor v-model="editorData" :editor="ClassicEditor" />
          </div>
          <div class="column is-3 content">
            <VButtons>
              <VButton color="info"> Создайте </VButton>
              <VButton to="/app/pages"> Отмена </VButton>
            </VButtons>
            <div>
              <VField>
                <VLabel>Опубликован</VLabel>
                <VControl>
                  <VInput type="date" />
                </VControl>
              </VField>
              <VField>
                <VLabel>Статус</VLabel>
                <VControl>
                  <VSelect>
                    <VOption value="pending">В Ожидании</VOption>
                    <VOption value="published">Опубликован</VOption>
                  </VSelect>
                </VControl>
              </VField>
              <VField>
                <VLabel>Вид</VLabel>
                <VControl>
                  <VSelect v-model="viewType">
                    <VOption value="pageView">Page View</VOption>
                  </VSelect>
                </VControl>
              </VField>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
