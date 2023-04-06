<script setup lang="ts">
import * as listData from '/@src/data/layouts/flex-list-v2'

export interface ProjectData {
  id: number
  name: string
  employeeName: string
  status: string
  date: string
}

const centeredActionsOpen = ref(false)
const pagesData = listData.pages as ProjectData[]

const props = withDefaults(
  defineProps<{
    activeTab?: 'all' | 'publish' | 'pending'
  }>(),
  {
    activeTab: 'all',
  }
)

const filters = ref('')
const tab = ref(props.activeTab)
const columns = {
  name: 'Name',
  status: 'Status',
  actions: {
    label: 'Actions',
    align: 'end',
  },
} as const

const filteredData = computed(() => {
  if (!filters.value) {
    return pagesData
  } else {
    const filterRe = new RegExp(filters.value, 'i')

    return pagesData.filter((item) => {
      return (
        item.name.match(filterRe) ||
        item.employeeName.match(filterRe) ||
        item.status.match(filterRe) ||
        item.date.match(filterRe)
      )
    })
  }
})
</script>

<template>
  <div>
    <div class="list-flex-toolbar is-reversed">
      <VControl icon="feather:search">
        <input
          v-model="filters"
          class="input custom-text-filter"
          placeholder="Search..."
        />
      </VControl>

      <div class="tabs-inner">
        <div class="tabs">
          <ul class="mr-3">
            <li :class="[tab === 'all' && 'is-active']">
              <a tabindex="0" @keydown.space.prevent="tab = 'all'" @click="tab = 'all'"
                ><span>Все</span></a
              >
            </li>
            <li :class="[tab === 'publish' && 'is-active']">
              <a
                tabindex="0"
                @keydown.space.prevent="tab = 'publish'"
                @click="tab = 'publish'"
                ><span>Опубликованные</span></a
              >
            </li>
            <li :class="[tab === 'pending' && 'is-active']">
              <a
                tabindex="0"
                @keydown.space.prevent="tab = 'pending'"
                @click="tab = 'pending'"
                ><span>В Ожидании</span></a
              >
            </li>
            <li class="tab-naver"></li>
          </ul>
          <VButton color="primary" rounded to="/app/pages/create">
            Создать страницу
          </VButton>
        </div>
      </div>
    </div>

    <div class="flex-list-wrapper flex-list-v2">
      <!--List Empty Search Placeholder -->
      <VPlaceholderPage
        v-if="tab === 'all' && filteredData.length === 0"
        title="We couldn't find any matching results."
        subtitle="Too bad. Looks like we couldn't find any matching results for the
          search terms you've entered. Please try different search terms or
          criteria."
        larger
      >
        <template #image>
          <img
            class="light-image"
            src="/@src/assets/illustrations/placeholders/search-4.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/@src/assets/illustrations/placeholders/search-4-dark.svg"
            alt=""
          />
        </template>
      </VPlaceholderPage>

      <!--Active Tab-->
      <div v-if="tab === 'all'" class="tab-content is-active">
        <VFlexTable
          v-if="filteredData.length"
          :data="filteredData"
          :columns="columns"
          rounded
        >
          <template #body>
            <TransitionGroup name="list" tag="div" class="flex-list-inner">
              <!--Table item-->
              <div v-for="item in filteredData" :key="item.id" class="flex-table-item">
                <VFlexTableCell>
                  <VTag rounded>
                    {{ item.name }}
                  </VTag>
                </VFlexTableCell>
                <VFlexTableCell :column="{ media: true, grow: true }">
                  <div>
                    <span class="item-name dark-inverted">{{ item.employeeName }}</span>
                    <span class="item-meta">
                      <span>
                        {{ item.status }}
                        <i aria-hidden="true" class="iconify" data-icon="feather:clock">
                        </i>
                        {{ item.date }}
                      </span>
                    </span>
                  </div>
                </VFlexTableCell>
                <VFlexTableCell>
                  <VButton color="primary"> Предпросмотр </VButton>
                  <VButton color="info" class="mx-2" to="/app/pages/edit">
                    Редактировать
                  </VButton>
                  <VButton color="danger" @click="centeredActionsOpen = true">
                    Удалить
                  </VButton>
                </VFlexTableCell>
              </div>
            </TransitionGroup>
          </template>
        </VFlexTable>

        <!--Table Pagination-->
        <VFlexPagination
          v-if="filteredData.length > 5"
          :item-per-page="10"
          :total-items="filteredData.length"
          :current-page="3"
          :max-links-displayed="7"
        />
      </div>

      <!--inactive Tab-->
      <div v-else-if="tab === 'publish'" class="tab-content is-active">
        <!--Empty placeholder-->
        <VPlaceholderPage
          title="No closed projects."
          subtitle="Looks like you don't have any closed project yet. When you'll
              start closing off projects, they will be showing up in here."
        >
          <template #image>
            <img
              class="light-image is-larger"
              src="/@src/assets/illustrations/placeholders/projects.svg"
              alt=""
            />
            <img
              class="dark-image is-larger"
              src="/@src/assets/illustrations/placeholders/projects-dark.svg"
              alt=""
            />
          </template>
        </VPlaceholderPage>
      </div>

      <!--inactive Tab-->
      <div v-else-if="tab === 'pending'" class="tab-content is-active">
        <!--Empty placeholder-->
        <VPlaceholderPage
          title="No closed projects."
          subtitle="Looks like you don't have any closed project yet. When you'll
              start closing off projects, they will be showing up in here."
        >
          <template #image>
            <img
              class="light-image is-larger"
              src="/@src/assets/illustrations/placeholders/projects.svg"
              alt=""
            />
            <img
              class="dark-image is-larger"
              src="/@src/assets/illustrations/placeholders/projects-dark.svg"
              alt=""
            />
          </template>
        </VPlaceholderPage>
      </div>
    </div>

    <VModal
      :open="centeredActionsOpen"
      actions="right"
      title="Удаление"
      @close="centeredActionsOpen = false"
    >
      <template #content>
        <VPlaceholderSection title="Удаление" subtitle="Вы хотите удалить страицу" />
      </template>
      <template #action>
        <VButton color="danger">Удалить</VButton>
      </template>
    </VModal>
  </div>
</template>

<style lang="scss">
.has-top-nav {
  .flex-list-wrapper,
  .list-flex-toolbar {
    max-width: 880px;
    margin-right: auto;
    margin-left: auto;
  }
}
.list-flex-toolbar.is-reversed .tabs-inner {
  margin-right: 10px;
  margin-left: 0;
}
.tabs ul,
.tabs-wrapper-alt.is-slider.is-inverted .tabs {
  background: var(--white);
  border-radius: 10px;
  overflow: hidden;
}
.tabs .is-active {
  background-color: var(--primary);
}
.tabs .is-active span {
  color: var(--white);
}
.tabs a {
  margin-bottom: 0;
}
.list-flex-toolbar .tabs-inner .tabs {
  margin-bottom: 0;
  min-width: 170px;
}
.tabs-wrapper.is-slider .tabs,
.tabs-wrapper-alt.is-slider .tabs {
  position: relative;
  background: var(--fade-grey-light-2);
  border: 1px solid var(--fade-grey);
  max-width: 185px;
  height: 35px;
  border-bottom: none;
  border-radius: 500px;
}
.tabs {
  margin-bottom: 20px;
}
.tabs {
  -webkit-overflow-scrolling: touch;
  align-items: stretch;
  display: flex;
  font-size: 1rem;
  justify-content: space-between;
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;
}
</style>
