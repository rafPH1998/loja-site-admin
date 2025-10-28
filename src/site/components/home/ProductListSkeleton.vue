<template>
    <div class="mt-10">
      <div class="bg-gray-200 rounded w-52 h-8 mb-4 mx-auto md:mx-0 animate-pulse"></div>
      <div class="bg-gray-200 rounded w-64 h-5 mx-auto md:mx-0 animate-pulse"></div>
  
      <div class="mt-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div v-for="i in 8" :key="i" class="bg-white rounded-xl p-4 shadow-sm">
          <div class="bg-gray-200 h-48 w-full rounded-lg animate-pulse mb-4"></div>
          <div class="bg-gray-200 h-4 w-3/4 rounded mb-2 animate-pulse"></div>
          <div class="bg-gray-200 h-4 w-1/2 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  // Skeleton puro, não precisa de props ou lógica
  </script>
  