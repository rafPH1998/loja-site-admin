<template>
    <div class="mt-10">
        <div>
            <h2 class="text-2xl text-center md:text-left">Produtos mais vistos</h2>
            <p class="text-gray-500 text-center md:text-left">Campeões de visualização da nossa loja.</p>

            <div class="mt-9">
                <ProductList :list="products" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { data } from '../../../data';
import ProductList from '../ProductList.vue';


// Aqui, futuramente, você pode substituir por fetch da API
const products = data.products;
</script>