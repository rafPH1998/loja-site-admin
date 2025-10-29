import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/site/HomeView.vue'
import Index from '../views/site/categories/Index.vue'


const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/categorias/:slug', name: 'categorias', component: Index },
]

const router = createRouter({
  history: createWebHistory(), 
  routes
})

export default router
