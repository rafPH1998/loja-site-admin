<template>
    <div class="mb-8">
        <div class="flex justify-between items-center border-b border-gray-200 pb-4">
            <div class="flex-1 font-bold text-lg">{{ item?.label }}</div>

            <div class="size-8 flex justify-center items-center cursor-pointer transition-transform duration-300"
                @click="opened = !opened">
                <img src="/assets/ui/arrow-left-s-line.png" alt="Arrow" width="24" height="24"
                    :class="opened ? 'rotate-0' : 'rotate-180'" />
            </div>
        </div>

        <transition name="accordion" @enter="enter" @after-enter="afterEnter" @leave="leave">
            <div v-show="opened" class="overflow-hidden">
                <div class="pt-8 flex flex-col gap-4">
                    <div v-for="option in options" :key="option.id" class="flex gap-4 items-center">
                        <input type="checkbox" class="size-6" :id="option.id" :value="option.id" v-model="selected"
                            @change="updateQuery()" />
                        <label :for="option.id" class="text-lg text-gray-500">{{ option.label }}</label>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const props = defineProps({
    groupId: Number,
    item: Object
})

const router = useRouter()
const route = useRoute()

const opened = ref(true)
const selected = ref<string[]>([])

const options = ref([
    { id: 'node', label: 'NodeJS' },
    { id: 'react', label: 'React' },
    { id: 'react-native', label: 'React Native' }
])

selected.value = route.query[props.item?.id as string]
    ? (route.query[props.item?.id as string] as string).split('|')
    : []

const updateQuery = () => {
    const query = { ...route.query }
    const key = props.item?.id || 'tech'

    if (selected.value.length > 0) {
        query[key] = selected.value.join('|')
    } else {
        delete query[key]
    }

    router.push({ path: route.path, query })
}

watch(
    () => route.query[props.item?.id as string],
    (newVal) => {
        selected.value = newVal
            ? (newVal as string).split('|')
            : []
    }
)

// Transição do accordion
const enter = (el: Element, done: () => void) => {
    const elHtml = el as HTMLElement
    elHtml.style.height = '0'
    elHtml.style.opacity = '0'
    elHtml.style.transition = 'height 0.35s ease, opacity 0.25s ease'
    requestAnimationFrame(() => {
        elHtml.style.height = elHtml.scrollHeight + 'px'
        elHtml.style.opacity = '1'
    })
    setTimeout(done, 350)
}

const afterEnter = (el: Element) => {
    (el as HTMLElement).style.height = 'auto'
}

const leave = (el: Element, done: () => void) => {
    const elHtml = el as HTMLElement
    elHtml.style.height = elHtml.scrollHeight + 'px'
    elHtml.style.opacity = '1'
    elHtml.style.transition = 'height 0.35s ease, opacity 0.25s ease'
    requestAnimationFrame(() => {
        elHtml.style.height = '0'
        elHtml.style.opacity = '0'
    })
    setTimeout(done, 350)
}
</script>

<style scoped>
.rotate-180 {
    transform: rotate(180deg);
}
</style>