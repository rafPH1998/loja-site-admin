<template>
  <div class="w-full max-w-7xl mx-auto p-6">
    <Banners :list="banners" />

    <!-- Cards de informações -->
    <div class="flex flex-col md:flex-row gap-4 md:gap-8 mt-4">
      <div v-for="(card, index) in infoCards" :key="index" class="flex flex-1 py-6 border border-gray-200 rounded-sm">
        <div class="border-r border-gray-200 w-32 flex justify-center items-center">
          <img :src="card.icon" alt="" class="w-10 h-10" />
        </div>
        <div class="flex-1 pl-8">
          <div class="font-bold text-xl">{{ card.title }}</div>
          <div class="text-gray-400">{{ card.subtitle }}</div>
        </div>
      </div>
    </div>

    <!-- Produtos -->
    <Suspense>
      <template #default>
        <MostViewedProducts />
      </template>
      <template #fallback>
        <ProductListSkeleton />
      </template>
    </Suspense>

    <Suspense>
      <template #default>
        <MostSoldProducts />
      </template>
      <template #fallback>
        <ProductListSkeleton />
      </template>
    </Suspense>
  </div>
</template>


<script setup lang="ts">
import { data } from '../../data';
import Banners from './components/home/Banners.vue';
import MostSoldProducts from './components/home/MostSoldProducts.vue';
import MostViewedProducts from './components/home/MostViewedProducts.vue';
import ProductListSkeleton from './components/home/ProductListSkeleton.vue';


const infoCards = [
  {
    icon: '/assets/ui/truck-line.png',
    title: 'Frete grátis',
    subtitle: 'Para todo o Nordeste.',
  },
  {
    icon: '/assets/ui/discount-percent-line.png',
    title: 'Muitas ofertas',
    subtitle: 'Ofertas imbatíveis.',
  },
  {
    icon: '/assets/ui/arrow-left-right-line.png',
    title: 'Troca fácil',
    subtitle: 'No período de 30 dias.',
  },
];

const banners = data.banners;
</script>