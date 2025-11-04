<template>
  <div
    class="relative bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
    <div v-if="data.discount || data.isNew" class="absolute top-3 left-3 z-10 px-3 py-1 rounded-lg font-bold text-xs text-white 
               bg-red-500 transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100
               transition-all duration-300 ease-out">
      {{ data.discount ? `-${data.discount}%` : 'Novo' }}
    </div>

    <div class="absolute top-3 right-3 z-10">
      <div @click="toggleLiked" class="cursor-pointer p-2 rounded-full border shadow-sm"
        :class="liked ? 'border-red-400 bg-red-50 animate-pulse' : 'border-gray-200 bg-white'">
        <img :src="liked ? '/assets/ui/heart-3-fill.png' : '/assets/ui/heart-3-line.png'" alt="Like" width="24"
          height="24" />
      </div>
    </div>

    <router-link :to="`/product/${data.id}`" class="block relative">
      <img :src="data.image" :alt="data.label" class="w-full h-64 object-contain transition-transform duration-300 group-hover:scale-105" />
      <div class="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
      </div>
    </router-link>

    <div class="p-5 flex flex-col gap-2">
      <router-link :to="`/product/${data.id}`"
        class="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
        {{ data.label }}
      </router-link>

      <div v-if="data.description" class="text-gray-500 text-sm line-clamp-2" :title="data.description">
        {{ data.description }}
      </div>

      <div>
        <button
          @click="handleAddToCart"
          class="flex items-center justify-center bg-blue-600 text-white px-1 py-1 w-full  rounded-md font-semibold hover:bg-blue-700 transition-colors shadow-lg"
        >
          <ShoppingCart class="w-5 h-5 mr-2" />
          <span class="text-xs">Adicionar ao carrinho</span>
        </button>
      </div>

      <router-link :to="`/product/${data.id}`" class="flex items-center gap-2 mt-2">
        <template v-if="data.discount">
          <span class="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
            R$ {{ (data.price * (1 - data.discount / 100)).toFixed(2) }}
          </span>
          <span class="text-sm line-through text-gray-400">
            R$ {{ data.price.toFixed(2) }}
          </span>
        </template>
        <template v-else>
          <span class="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">R$ {{
            data.price.toFixed(2) }}</span>
        </template>
      </router-link>

      <div class="text-gray-400 text-sm">Em até 12x no cartão</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Product } from "../../../types/product";
import { useCartStore } from "../../../stores/cart";
import { setCartState } from "../../../actions/set-cart-state";
import { ShoppingCart } from "lucide-vue-next";


const props = defineProps<{
  data: Product & { discount?: number; isNew?: boolean; description?: string };
}>();

const cartStore = useCartStore()

const handleAddToCart = async () => {
  cartStore.addItem({ productId: props.data.id, quantity: 1 })
  const updatedCart = cartStore.cart;
  await setCartState(updatedCart)
};

const liked = ref(props.data.liked);

const toggleLiked = () => {
  liked.value = !liked.value;
};
</script>