<template>
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center ">
        <div class="text-3xl ">
            <strong>{{ data.products.length }}</strong> Produto(s)
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
                'md:block flex-1 md:max-w-80 bg-white p-5 rounded shadow h-full'
            ]"
        >
            <FilterGroup :groupId="1" :item="{ id: 'tech', label: 'Nodejs' }" />
            <FilterGroup :groupId="2" :item="{ id: 'color', label: 'Azul' }" />
        </div>

        <div class="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProductItem v-for="item in data.products" :key="item.id" :data="item" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import FilterGroup from './FilterGroup.vue'
import { data } from '../../../../data'
import ProductItem from '../ProductItem.vue'

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
