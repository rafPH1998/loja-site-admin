<template>
  <div :class="isAdminRoute ? 'h-screen' : 'bg-gray-50'">
    <Header v-if="!isAdminRoute" />

    <main :class="!isAdminRoute ? 'w-full max-w-7xl mx-auto p-6' : 'h-full'">
      <router-view />
    </main>

    <Footer v-if="!isAdminRoute" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Header from './views/site/layout/Header.vue'
import Footer from './views/site/layout/Footer.vue'
import { useStoreHydration } from './composables/useStoreHydration';

const route = useRoute()
const isAdminRoute = computed(() => route.path.startsWith('/admin'))

useStoreHydration()
</script>
