<template>
  <div class="bg-gray-50">
    <Header />

    <main class="w-full max-w-7xl mx-auto p-6">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from './views/site/layout/Header.vue'
import Footer from './views/site/layout/Footer.vue'
import { useStoreHydration } from './composables/useStoreHydration';

useStoreHydration()
</script>
