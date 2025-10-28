<template>
  <div>
    <Header />
    <div class="w-full max-w-7xl mx-auto p-6">
      <HomeView />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import HomeView from './site/HomeView.vue';
import Footer from './site/layout/Footer.vue';
import Header from './site/layout/Header.vue';

</script>
