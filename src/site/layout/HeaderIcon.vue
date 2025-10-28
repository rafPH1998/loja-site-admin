<template>
    <div
      :class="[
        'size-12 border border-gray-200 rounded-sm flex justify-center items-center',
        props.selected ? 'bg-blue-600' : 'hover:bg-gray-100'
      ]"
    >
      <img
        v-if="!props.selected"
        :src="props.src"
        :alt="props.alt"
        width="24"
        height="24"
        class="size-6"
      />
      <img
        v-else-if="props.selected && props.srcSelected"
        :src="props.srcSelected"
        :alt="props.alt"
        width="24"
        height="24"
        class="size-6"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  interface Props {
    src: string
    alt: string
    selected?: boolean
    srcSelected?: string
  }
  
  const props = defineProps<Props>()
  </script>
  