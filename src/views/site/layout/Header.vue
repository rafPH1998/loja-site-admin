<template>
    <header class="bg-white border-b border-gray-200 fixed top-0 left-0 w-full z-50 transition-shadow">
        <div class="bg-black text-white p-4 text-center text-sm md:text-base">
            <strong>FRETE GRÁTIS </strong>
            para todo o Nordeste nas compras acima de R$ 199,00.
            <strong> APROVEITA!</strong>
        </div>

        <div class="w-full max-w-7xl mx-auto p-6">
            <div class="flex items-center justify-between">
                <div class="w-32">
                    <RouterLink to="/">
                        <img src="/assets/ui/logo-black.png" alt="Logo Loja" width="120" height="40" />
                    </RouterLink>
                </div>

                <div class="flex-1">
                    <div class="w-full hidden md:flex items-center px-6">
                        <div class="flex-1">
                            <ul class="flex gap-4 items-center font-medium text-gray-500">
                                <li v-for="item in menu" :key="item.label">
                                    <RouterLink :to="item.href">{{ item.label }}</RouterLink>
                                </li>
                            </ul>
                        </div>
                        <div class="w-80">
                            <HeaderSearch />
                        </div>
                    </div>
                </div>

                <div class="flex gap-4">
                    <RouterLink to="/my-orders">
                        <HeaderIcon src="/assets/ui/user-line.png" alt="Perfil" />
                    </RouterLink>

                    <RouterLink to="/cart">
                        <HeaderIcon
                        src="/assets/ui/shopping-bag-4-line.png"
                        alt="Carrinho"
                        :badge="cartStore.cart.length"
                        />
                    </RouterLink>

                    <button @click="menuOpen = !menuOpen" class="md:hidden focus:outline-none">
                        <HeaderIcon
                        src="/assets/ui/menu-line.png"
                        alt="Menu"
                        :selected="menuOpen"
                        srcSelected="/assets/ui/menu-line-white.png"
                        />
                    </button>
                </div>
            </div>
        </div>

        <transition name="fade">
            <div v-if="menuOpen" class="md:hidden pb-6">
                <RouterLink v-for="item in menu" :key="item.label" :to="item.href"
                    class="p-6 border-b border-gray-200 flex justify-between items-center block">
                    <div class="font-medium text-lg text-gray-600">{{ item.label }}</div>
                    <img src="/assets/ui/arrow-up-right.png" alt="Seta" width="24" height="24" />
                </RouterLink>
            </div>
        </transition>

        <div class="p-6 pt-0 md:hidden">
            <HeaderSearch />
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HeaderSearch from './HeaderSearch.vue'
import HeaderIcon from './HeaderIcon.vue'
import { useCartStore } from '../../../stores/cart'

const cartStore = useCartStore()

interface MenuItem {
    label: string
    href: string
}

const menuOpen = ref(false)

const menu: MenuItem[] = [
    { label: 'Camisas', href: '/categorias/camisas' },
    { label: 'Kits', href: '/categorias/kits' }
]
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>