<template>
  <div class="relative">
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

    <span
      v-if="props.badge && props.badge > 0"
      class="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center"
    >
      {{ props.badge }}
    </span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  src: string
  alt: string
  selected?: boolean
  srcSelected?: string
  badge?: number 
}

const props = defineProps<Props>()
</script>
