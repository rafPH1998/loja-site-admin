<template>
    <div class="">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <!-- Image Gallery -->
          <div class="space-y-4">
            <div class="bg-muted rounded-lg overflow-hidden h-96 lg:h-[500px] flex items-center justify-center">
              <img
                :src="productData.images[selectedImage]"
                :alt="productData.name"
                class="w-full h-full object-cover"
              />
            </div>
  
            <div class="grid grid-cols-4 gap-3">
              <button
                v-for="(image, index) in productData.images"
                :key="index"
                @click="selectedImage = index"
                :class="[
                  'h-20 rounded-lg overflow-hidden border-2 transition',
                  selectedImage === index ? 'border-blue-500' : 'border-transparent hover:border-gray-300'
                ]"
              >
                <img :src="image" :alt="`Thumbnail ${index + 1}`" class="w-full h-full object-cover" />
              </button>
            </div>
          </div>
  
          <!-- Product Info -->
          <div class="space-y-6">
            <div class="text-sm text-muted-foreground">Eletrônicos &gt; Áudio &gt; Fones de Ouvido</div>
  
            <div>
              <h1 class="text-3xl font-bold text-foreground mb-3">{{ productData.name }}</h1>
              <div class="flex items-center gap-4">
                <div class="flex items-center gap-1">
                  <Star
                    v-for="i in 5"
                    :key="i"
                    :class="[
                      'w-5 h-5',
                      i <= Math.floor(productData.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                    ]"
                  />
                </div>
                <span class="text-sm text-muted-foreground">
                  {{ productData.rating }} ({{ productData.reviews }} avaliações)
                </span>
              </div>
            </div>
  
            <div class="space-y-2">
              <div class="flex items-baseline gap-3">
                <span class="text-4xl font-bold text-foreground">R$ {{ productData.price.toFixed(2) }}</span>
                <span class="text-lg text-muted-foreground line-through">R$ {{ productData.originalPrice.toFixed(2) }}</span>
              </div>
              <div class="text-sm text-green-600 font-medium">
                Economize R$ {{ (productData.originalPrice - productData.price).toFixed(2) }} (
                {{ Math.round(((productData.originalPrice - productData.price) / productData.originalPrice) * 100) }}% )
              </div>
            </div>
  
            <div class="flex items-center gap-2">
              <div :class="['w-3 h-3 rounded-full', productData.inStock ? 'bg-green-500' : 'bg-red-500']"></div>
              <span :class="['font-medium', productData.inStock ? 'text-green-600' : 'text-red-600']">
                {{ productData.inStock ? 'Em Estoque' : 'Fora de Estoque' }}
              </span>
            </div>
  
            <!-- Colors -->
            <div>
              <label class="block text-sm font-semibold text-foreground mb-3">
                Cor: <span class="text-blue-500">{{ selectedColor }}</span>
              </label>
              <div class="flex gap-3">
                <button
                  v-for="color in productData.colors"
                  :key="color"
                  @click="selectedColor = color"
                  :class="[
                    'px-4 py-2 rounded-lg border-2 transition font-medium',
                    selectedColor === color ? 'border-blue-500 bg-blue-50 text-blue-600' : 'border-border bg-white text-foreground hover:border-blue-300'
                  ]"
                >
                  {{ color }}
                </button>
              </div>
            </div>
  
            <!-- Quantity -->
            <div class="space-y-3">
              <label class="block text-sm font-semibold text-foreground">Quantidade</label>
              <div class="flex items-center gap-4">
                <div class="flex items-center border border-border rounded-lg">
                  <button @click="decrement" class="px-4 py-2 hover:bg-muted transition">−</button>
                  <span class="px-6 py-2 font-semibold text-foreground">{{ quantity }}</span>
                  <button @click="increment" class="px-4 py-2 hover:bg-muted transition">+</button>
                </div>
                <span class="text-sm text-muted-foreground">{{ quantity > 5 ? 'Quantidade limitada em estoque' : '' }}</span>
              </div>
            </div>
  
            <!-- Actions -->
            <div class="flex gap-3 pt-4">
              <button @click="handleAddToCart" class="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2">
                <ShoppingCart class="w-5 h-5" />
                Adicionar ao Carrinho
              </button>
  
              <button
                @click="isWishlisted = !isWishlisted"
                class="px-6 py-3 rounded-lg border border-border hover:bg-muted transition"
              >
                <Heart :class="['w-5 h-5', isWishlisted ? 'fill-red-500 text-red-500' : '']" />
              </button>
  
              <button class="px-6 py-3 rounded-lg border border-border hover:bg-muted transition">
                <Share2 class="w-5 h-5" />
              </button>
            </div>
  
            <!-- Benefits -->
            <div class="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <div class="text-center space-y-2">
                <Truck class="w-6 h-6 text-blue-500 mx-auto" />
                <p class="text-xs font-medium text-foreground">Frete Grátis</p>
                <p class="text-xs text-muted-foreground">Acima de R$ 100</p>
              </div>
              <div class="text-center space-y-2">
                <Shield class="w-6 h-6 text-blue-500 mx-auto" />
                <p class="text-xs font-medium text-foreground">Garantia</p>
                <p class="text-xs text-muted-foreground">2 anos</p>
              </div>
              <div class="text-center space-y-2">
                <RotateCcw class="w-6 h-6 text-blue-500 mx-auto" />
                <p class="text-xs font-medium text-foreground">Devolução</p>
                <p class="text-xs text-muted-foreground">30 dias</p>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Specifications -->
        <section class="mb-12">
          <div class="p-6 bg-white rounded-lg border border-border">
            <button @click="expandedSpecs = !expandedSpecs" class="w-full flex items-center justify-between">
              <h2 class="text-xl font-bold text-foreground">Especificações</h2>
              <ChevronDown :class="['w-5 h-5 text-muted-foreground transition', expandedSpecs ? 'rotate-180' : '']" />
            </button>
  
            <div v-if="expandedSpecs" class="mt-6 space-y-4">
              <div
                v-for="([key, value], idx) in specsEntries"
                :key="key"
                class="flex justify-between py-3 border-b border-border last:border-b-0"
              >
                <span class="text-foreground font-medium">{{ key }}</span>
                <span class="text-muted-foreground">{{ value }}</span>
              </div>
            </div>
          </div>
        </section>
  
        <!-- Similar Products -->
        <section class="mb-12">
          <div class="mb-6">
            <h2 class="text-2xl font-bold text-foreground mb-2">Produtos Similares</h2>
            <p class="text-muted-foreground">Você também pode gostar desses produtos</p>
          </div>
  
          <div class="">
            <ProductList :list="data.products" />
          </div>
        </section>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
  import {
    ShoppingCart,
    Heart,
    Star,
    Truck,
    Shield,
    RotateCcw,
    Share2,
    ChevronDown,
  } from 'lucide-vue-next';
import ProductList from './components/ProductList.vue';
import { data } from '../../data';
  
  /* ---------- Dados (copiados do original) ---------- */
  const productData = {
    id: 1,
    name: 'Fone Bluetooth Premium',
    category: 'Eletrônicos',
    price: 299.9,
    originalPrice: 399.9,
    rating: 4.8,
    reviews: 245,
    inStock: true,
    sku: 'FB-PREMIUM-001',
    description:
      'Fone Bluetooth de alta qualidade com cancelamento de ruído ativo, bateria de até 30 horas e design ergonômico confortável para uso prolongado.',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=600&h=600&fit=crop',
    ],
    colors: ['Preto', 'Branco', 'Azul', 'Rosa'],
    sizes: ['Único'],
    specifications: {
      'Tipo de Conexão': 'Bluetooth 5.0',
      'Tempo de Bateria': 'Até 30 horas',
      'Cancelamento de Ruído': 'Ativo (ANC)',
      Peso: '250g',
      Impedância: '32 Ohm',
      Frequência: '20Hz - 20kHz',
      Garantia: '2 anos',
    },
    customerReviews: [
      {
        id: 1,
        author: 'João Silva',
        rating: 5,
        title: 'Excelente qualidade!',
        comment: 'Produto de excelente qualidade, som muito bom e bateria dura bastante. Recomendo!',
        date: '2025-10-20',
        verified: true,
      },
      {
        id: 2,
        author: 'Maria Santos',
        rating: 4,
        title: 'Muito bom, mas poderia ser melhor',
        comment: 'Gostei bastante, mas achei um pouco pesado para usar por muitas horas.',
        date: '2025-10-18',
        verified: true,
      },
      {
        id: 3,
        author: 'Pedro Costa',
        rating: 5,
        title: 'Superou expectativas',
        comment: 'Chegou rápido, bem embalado e o produto é realmente muito bom. Cancelamento de ruído funciona perfeitamente.',
        date: '2025-10-15',
        verified: true,
      },
    ],
  };
  
  /* ---------- estado local ---------- */
  const selectedImage = ref(0);
  const selectedColor = ref(productData.colors[0]);
  const quantity = ref(1);
  const isWishlisted = ref(false);
  const expandedSpecs = ref(false);
  const canScrollLeft = ref(false);
  const canScrollRight = ref(true);
  const similarScroll = ref<HTMLElement | null>(null);
  
  /* computed / helpers */
  const specsEntries = computed(() => Object.entries(productData.specifications));
  
  /* ações */
  const handleAddToCart = () => {
    alert(`${quantity.value}x ${productData.name} (Cor: ${selectedColor.value}) adicionado ao carrinho!`);
  };
  
  const increment = () => (quantity.value += 1);
  const decrement = () => (quantity.value = Math.max(1, quantity.value - 1));
  
  const checkScroll = () => {
    const container = similarScroll.value;
    if (!container) return;
    canScrollLeft.value = container.scrollLeft > 0;
    canScrollRight.value = container.scrollLeft < container.scrollWidth - container.clientWidth - 10;
  };
  
  /* lifecycle */
  const onResize = () => checkScroll();
  
  onMounted(() => {
    // hook the scroll container ref after mount
    if (similarScroll.value) checkScroll();
    window.addEventListener('resize', onResize);
  });
  
  onBeforeUnmount(() => {
    window.removeEventListener('resize', onResize);
  });
  </script>
  
