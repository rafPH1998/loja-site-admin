import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/site/HomeView.vue'
import Index from '../views/site/categories/Index.vue'
import ProductDetail from '../views/site/ProductDetail.vue'
import CartPage from '../views/site/CartPage.vue'
import AdminLayout from '../views/admin/AdminLayout.vue'
import ProductsView from '../views/admin/ProductsView.vue'
import UsersView from '../views/admin/UsersView.vue'


const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/categorias/:slug', name: 'categorias', component: Index },
  { path: '/product/:slug', name: 'product', component: ProductDetail },
  { path: '/cart', name: 'cart', component: CartPage },
  {
    path: '/admin',
    name: 'admin',
    component: AdminLayout,
    children: [
      {
        path: 'products',
        name: 'admin-products',
        component: ProductsView,
      },
      {
        path: 'users',
        name: 'admin-users',
        component: UsersView,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(), 
  routes
})

export default router
