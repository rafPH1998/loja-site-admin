import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/site/HomeView.vue'
import Index from '../views/site/categories/Index.vue'
import ProductDetail from '../views/site/ProductDetail.vue'
import CartPage from '../views/site/CartPage.vue'


const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/categorias/:slug', name: 'categorias', component: Index },
  { path: '/product/:slug', name: 'product', component: ProductDetail },
  { path: '/cart', name: 'cart', component: CartPage },
]

const router = createRouter({
  history: createWebHistory(), 
  routes
})

export default router
