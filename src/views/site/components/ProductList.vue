<template>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
    <ProductItem v-for="item in list" :key="item.id" :data="item" />
  </div>
</template>

<script setup lang="ts">
import type { Product } from '../../../types/product';
import ProductItem from './ProductItem.vue';





defineProps<{
  list: Product[];
}>();
</script>