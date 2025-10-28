<template>
    <div class="mt-10">
        <div>
            <h2 class="text-2xl text-center md:text-left">Produtos mais vendidos</h2>
            <p class="text-gray-500 text-center md:text-left">Campeões de vendas da nossa loja.</p>

            <div class="mt-9">
                <ProductList :list="products" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { data } from '../../../../data';
import type { Product } from '../../../../types/product';
import ProductList from '../ProductList.vue';

const products: Product[] = data.products;
</script>