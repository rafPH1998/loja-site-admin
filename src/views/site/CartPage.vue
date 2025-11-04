<template>
    <div class="container mx-auto p-6">
        <div class="flex items-center mb-8">
            <ShoppingBag class="w-6 h-6 mr-2 text-gray-700" />
            <h1 class="text-xl font-semibold text-gray-800">Sua sacola de compras ({{ cartItemCount }} itens)</h1>
        </div>

        <div class="flex flex-col lg:flex-row gap-8">
            <div class="lg:w-2/3 bg-white p-6 rounded-lg shadow-md">
                <div
                    class="hidden sm:flex items-center pb-2 border-b border-gray-300 text-sm font-medium text-gray-500">
                    <span class="w-1/2">Produto</span>
                    <span class="w-1/4 text-center">Quantidade</span>
                    <span class="w-1/4 text-right pr-12">Preço</span>
                </div>

                {{ cartItems }}
                <!-- Itens do Carrinho -->
                <div v-if="cartItemCount > 0">
                    <div v-for="item in cartItems" :key="item.id"
                        class="flex items-center py-4 border-b border-gray-200">
                        <!-- Produto -->
                        <div class="w-1/2 flex items-center">
                            <img :src="item.image" :alt="item.label" class="w-16 h-16 object-contain mr-4" />
                            <div>
                                <p class="font-semibold text-sm">{{ item.label }}</p>
                                <p class="text-xs text-gray-500">{{ item.code }}</p>
                            </div>
                        </div>
                        <!-- Quantidade -->
                        <div class="w-1/4 flex items-center justify-center">
                            <div class="flex items-center border border-gray-300 rounded-md">
                                <button @click="updateQuantity(item.id, -1)"
                                    class="p-2 text-gray-600 hover:bg-gray-100 transition duration-150">
                                    <Minus class="w-4 h-4" />
                                </button>
                                <span class="px-4 text-sm font-medium">{{ item.quantity }}</span>
                                <button @click="updateQuantity(item.id, 1)"
                                    class="p-2 text-gray-600 hover:bg-gray-100 transition duration-150">
                                    <Plus class="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                        <!-- Preço e Remover -->
                        <div class="w-1/4 flex items-center justify-end">
                            <p class="font-semibold text-sm text-right mr-4">{{ formatCurrency(item.price *
                                item.quantity) }}</p>
                            <button @click="removeItem(item.id)"
                                class="p-2 text-gray-400 hover:text-red-500 transition duration-150">
                                <Trash2 class="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
                <div v-else class="text-center py-10 text-gray-500">
                    <p>Seu carrinho está vazio.</p>
                </div>
            </div>

            <!-- Resumo do Carrinho e Frete -->
            <div class="lg:w-1/3">
                <div class="bg-white p-6 rounded-lg shadow-md sticky top-6">
                    <h3 class="text-lg font-semibold mb-4">Calcular frete e prazo</h3>

                    <!-- Cálculo de Frete -->
                    <div class="flex space-x-2 mb-4">
                        <input type="text" placeholder="00000-000"
                            class="flex-grow p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                        <button
                            class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-150">
                            Calcular
                        </button>
                    </div>

                    <div class="bg-gray-50 p-3 rounded-md mb-4">
                        <p class="text-xs text-gray-600 mb-1">asdasd</p>
                        <div class="flex justify-between items-center">
                            <p class="text-sm font-medium">
                                Receba em até 3 dias úteis
                            </p>
                            <p class="text-sm font-bold text-green-600">12</p>
                        </div>
                    </div>

                    <!-- Resumo de Valores -->
                    <div class="space-y-2 border-t pt-4">
                        <div class="flex justify-between text-sm">
                            <span>Subtotal</span>
                            <span class="font-medium">{{ formatCurrency(subtotal) }}</span>
                        </div>
                        <div class="flex justify-between text-sm">
                            <span>Frete</span>
                            <span class="font-medium">5</span>
                        </div>
                        <div class="flex justify-between text-lg font-bold pt-2 border-t">
                            <span>Total</span>
                            <span>{{ formatCurrency(total) }}</span>
                        </div>
                        <p class="text-xs text-gray-500 text-right">Forma de pagamento via PIX</p>
                    </div>

                    <!-- Botões de Ação -->
                    <button
                        class="w-full bg-blue-600 text-white py-3 rounded-md mt-6 font-semibold hover:bg-blue-700 transition duration-150">
                        Continuar
                    </button>
                    <button class="w-full text-blue-600 py-2 mt-2 text-sm hover:text-blue-800 transition duration-150">
                        Comprar outros produtos
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

import { useRouter } from "vue-router";
import { Trash2, Minus, Plus, ShoppingBag } from 'lucide-vue-next';
import { useCartStore } from '../../stores/cart';
import { useProductStore } from '../../stores/products';
import type { Product } from '../../types/product';

let initialCart = useCartStore()
const stateProduct = useProductStore();
const router = useRouter();

onMounted(() => {
    if (initialCart.cart.length === 0) {
        router.push("/"); 
    }
    loadCartItems()
});

const cartItems = ref<Product[]>([]);
/* let subTotal: number = 0
let cartProducts: CartListItem[] = []
const ids: number[] = initialCart.cart.map(item => item.productId)
const products = await stateProduct.getProductsFromList(ids) */

// Função para buscar um produto pelo ID


// Mapeia os itens do carrinho mockados para a estrutura CartProduct


async function loadCartItems() {
    const mockCartItems = [
        { productId: 1, quantity: 2 },
        { productId: 2, quantity: 1 },
    ];

    const items = await Promise.all(
        mockCartItems.map(async (item) => {
            const product = await stateProduct.getProductById(item.productId);
            return product
                ? { ...product, quantity: item.quantity }
                : { id: item.productId, label: 'Produto Desconhecido', image: '', price: 0, quantity: item.quantity };
        })
    );

    cartItems.value = items.filter(item => item.price > 0);
}

// --- Funções de Manipulação do Carrinho ---

const updateQuantity = (productId: number, change: number) => {
    const item = cartItems.value.find(i => i.id === productId);
    if (item) {
        const newQuantity = item.quantity + change;
        if (newQuantity > 0) {
            item.quantity = newQuantity;
        } else {
            // Remove o item se a quantidade for 0 ou menos
            removeItem(productId);
        }
    }
};

const removeItem = (productId: number) => {
    cartItems.value = cartItems.value.filter(item => item.id !== productId);
};

// --- Cálculos e Resumo ---

const subtotal = computed(() => {
    return cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0);
});

const total = computed(() => {
    return subtotal.value + 5
});

const cartItemCount = computed(() => {
    return cartItems.value.length;
});


// --- Formatação ---

const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
};

</script>