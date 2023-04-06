<script setup lang="ts">
const route = useRoute()
const openSideblockLinks = ref('')

watch(
  () => route.path,
  (newVal) => {
    if (newVal) {
      if (newVal.startsWith('/app')) {
        openSideblockLinks.value = ''
      }
      if (newVal.startsWith('/app/pages')) {
        openSideblockLinks.value = 'pages'
      }
      if (newVal.startsWith('/app/publish')) {
        openSideblockLinks.value = 'publish'
      }
      if (newVal.startsWith('/app/mediateka')) {
        openSideblockLinks.value = 'mediateka'
      }
      if (newVal.startsWith('/app/templates')) {
        openSideblockLinks.value = 'templates'
      }
    }
  },
  { immediate: true }
)
const links = ref([
  {
    id: 0,
    link: '/app',
    icon: 'grid',
    name: 'Dashboard',
  },
  {
    id: 1,
    link: '/app/pages',
    icon: 'package',
    name: 'Pages',
  },
  {
    id: 2,
    link: '/app/publish',
    icon: 'grid',
    name: 'Publish',
  },
  {
    id: 3,
    link: '/app/mediateka',
    icon: 'camera',
    name: 'Media',
  },
  {
    id: 4,
    link: '/app/templates',
    icon: 'airplay',
    name: 'Templates',
  },
])
</script>

<template>
  <ul id="sidebar-menu">
    <li v-for="link in links" :key="link.id">
      <RouterLink :to="link.link" class="single-link">
        <span class="icon">
          <i class="iconify" :data-icon="`feather:${link.icon}`"></i>
        </span>
        {{ link.name }}
      </RouterLink>
    </li>

    <!-- physician-therapist -->
    <!-- <VCollapseLinks v-model:open="openSideblockLinks" collapse-id="physician-therapist">
      <template #header>
        <div class="icon">
          <i class="iconify" data-icon="feather:folder-plus" aria-hidden="true"></i>
        </div>
        {{ $t('Physician-therapist') }}
        <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right"></i>
      </template>
      <RouterLink
        to="/app/physician-therapist/donors-for-examination"
        class="is-submenu mb-3"
      >
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Donors-list-for-examination') }}</span>
      </RouterLink>
      <RouterLink
        to="/app/physician-therapist/examined-donors-list"
        class="is-submenu mb-3"
      >
        <i class="iconify" data-icon="feather:minus" aria-hidden="true"></i>
        <span>{{ $t('Examined-donor-register') }}</span>
      </RouterLink>
    </VCollapseLinks> -->
  </ul>
</template>
