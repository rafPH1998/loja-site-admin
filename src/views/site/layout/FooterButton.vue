<template>
    <RouterLink :to="props.href">
      <div class="flex items-center gap-4 border border-gray-700 rounded-sm p-4 hover:bg-gray-900 cursor-pointer">
        <img :src="props.icon" alt="" width="24" height="24" />
        <div v-if="props.label" class="flex-1">{{ props.label }}</div>
      </div>
    </RouterLink>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue'
  
  interface Props {
    href: string
    icon: string
    label?: string
  }
  
  const props = defineProps<Props>()
  </script>
  