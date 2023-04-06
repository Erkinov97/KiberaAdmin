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

const activeValue = ref(0)
const CKEditor = CKE.component
const editorData = ref(`<h2>Your HTML Content</h2>`)
const publishDate = ref('')
const status = ref('pending')
const viewType = ref('pageView')
const title = ref('')
const url = ref('')
</script>

<template>
  <div class="page-content-inner">
    <div>
      <div class="is-flex is-justify-content-center">
        <h1 class="mb-4">Создать страницу</h1>
        <VButtons>
          <VButton>Ўзбекча</VButton>
          <VButton>Русский</VButton>
          <VButton>English</VButton>
        </VButtons>
      </div>
      <div>
        <p></p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus?
          Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times.
          Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
          interrete.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus?
          Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times.
          Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
          interrete.
        </p>
      </div>
    </div>
    <div class="columns is-multiline">
      <div class="column is-12">
        <!--Simple Datatable-->
        <div class="columns">
          <div class="column is-9 content">
            <VField>
              <VLabel>Заглавие til</VLabel>
              <VControl>
                <VInput v-model="title" type="text" />
              </VControl>
            </VField>
            <VField>
              <VLabel>URL</VLabel>
              <VControl>
                <VInput v-model="url" type="text" />
              </VControl>
            </VField>
            <VField>
              <VLabel>Содержание</VLabel>
              <VControl>
                <CKEditor v-model="editorData" :editor="ClassicEditor" />
              </VControl>
            </VField>
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
                  <VInput v-model="publishDate" type="date" />
                </VControl>
              </VField>
              <VField>
                <VLabel>Статус</VLabel>
                <VControl>
                  <VSelect v-model="status">
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
