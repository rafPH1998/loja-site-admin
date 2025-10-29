<template>
    <div>
        <div class="text-gray-500 mb-4">
            <router-link :to="'/'" class="block relative">
                Home &gt; Temporário
            </router-link>
        </div>

        <ProductListFilter />
    </div>

</template>

<script setup lang="ts">
/* import { useRoute } from 'vue-router' */
import ProductListFilter from '../components/categories/ProductListFilter.vue';
/* import { computed } from 'vue' */

/* const route = useRoute() */

/* const slug = computed(() => route.params.slug)
const filters = computed(() => route.query) */

</script>