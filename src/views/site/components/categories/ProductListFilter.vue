<template>
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div class="text-3xl">
            <strong>99</strong> Produtos
        </div>
        <div class="w-full md:max-w-80 flex flex-row gap-5">
            <select
                class="flex-1 h-14 flex items-center px-6 bg-white border border-gray-200 rounded-sm text-gray-500"
                v-model="orderBy"
                @change="setQueryParam('order', orderBy)"
            >
                <option value="">Ordenar por</option>
                <option value="menor-preco">Menor preço</option>
                <option value="maior-preco">Maior preço</option>
                <option value="novidades">Novidades</option>
            </select>

            <div
                @click="filterOpened = !filterOpened"
                class="flex-1 h-14 flex md:hidden items-center px-6 bg-white border border-gray-200 rounded-sm text-gray-500 cursor-pointer"
            >
                Filtrar por
            </div>
        </div>
    </div>

    <div class="flex flex-col md:flex-row gap-8 mt-8">
        <div
            :class="[
                filterOpened ? 'block' : 'hidden',
                'md:block flex-1 md:max-w-80 bg-red-300'
            ]"
        >
            Filtro
        </div>

        <div class="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>....</div>
            <div>....</div>
            <div>....</div>
            <div>....</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const filterOpened = ref<boolean>(false)
const orderBy = ref<string>(route.query.order as string || '')

const setQueryParam = (att: string, val: string) => {
    const query = { ...route.query }

    if (val) {
        query[att] = val
    } else {
        delete query[att]
    }

    router.push({ path: route.path, query })
}

watch(
    () => route.query.order,
    (newVal) => {
        orderBy.value = newVal as string || ''
    }
)
</script>
