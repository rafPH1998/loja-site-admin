<template>
    <div>
      <div class="relative aspect-[3/1] overflow-hidden">
        <router-link
          v-for="(banner, index) in list"
          :key="index"
          :to="banner.link"
          class="absolute inset-0 transition-opacity duration-700"
          :style="{ opacity: currentImage === index ? 1 : 0 }"
        >
          <img
            :src="banner.img"
            :alt="`Banner ${index}`"
            class="w-full h-full object-cover rounded-sm"
          />
        </router-link>
      </div>
  
      <div class="mt-4 flex justify-center gap-4">
        <div
          v-for="(_, index) in list"
          :key="index"
          class="w-4 h-4 bg-blue-600 rounded-full cursor-pointer transition-opacity"
          :style="{ opacity: currentImage === index ? 1 : 0.3 }"
          @click="handleBannerClick(index)"
        />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  interface Banner {
    img: string;
    link: string;
  }
  
  const props = defineProps<{
    list: Banner[];
  }>();
  
  const currentImage = ref(0);
  let timer: ReturnType<typeof setInterval> | null = null;
  
  const nextImg = () => {
    currentImage.value = (currentImage.value + 1) % props.list.length;
  };
  
  const startInterval = () => {
    if (timer) clearInterval(timer);
    timer = setInterval(nextImg, 3000);
  };
  
  const handleBannerClick = (index: number) => {
    currentImage.value = index;
    startInterval();
  };
  
  onMounted(() => {
    startInterval();
  });
  
  onBeforeUnmount(() => {
    if (timer) clearInterval(timer);
  });
  </script>
  