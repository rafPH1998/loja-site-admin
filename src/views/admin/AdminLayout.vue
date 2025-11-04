<template>
    <div class="flex h-screen bg-background">
      <!-- Sidebar -->
      <aside class="w-64 border-r bg-card flex flex-col">
        <div class="p-6 border-b">
          <h1 class="text-2xl font-bold text-primary">Admin Panel</h1>
        </div>
        <nav class="flex-1 p-4 space-y-2">
          <router-link
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            :class="cn(
              'flex items-center p-3 rounded-md transition-colors duration-200',
              'hover:bg-accent hover:text-accent-foreground',
              route.path.startsWith(item.path) ? 'bg-primary text-primary-foreground font-semibold' : 'text-muted-foreground'
            )"
          >
            <component :is="item.icon" class="w-5 h-5 mr-3" />
            <span>{{ item.name }}</span>
          </router-link>
        </nav>
      </aside>
  
      <!-- Main Content -->
      <div class="flex-1 flex flex-col overflow-hidden">
        <!-- Header/Navbar -->
        <header class="flex items-center justify-between p-4 border-b bg-card">
          <h2 class="text-xl font-semibold text-foreground">
            {{ currentRouteName }}
          </h2>
          <!-- User Profile/Actions (Placeholder) -->
          <div class="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell class="w-5 h-5" />
            </Button>
            <Avatar>
              <AvatarFallback class="bg-primary text-primary-foreground">A</AvatarFallback>
            </Avatar>
          </div>
        </header>
  
        <!-- Page Content -->
        <main class="flex-1 overflow-x-hidden overflow-y-auto p-6 bg-muted/40">
          <router-view />
        </main>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  import { Package, Users, Bell } from 'lucide-vue-next';
import { cn } from '../../lib/utils';
import AvatarFallback from './ui/avatar/AvatarFallback.vue';
import Avatar from './ui/avatar/Avatar.vue';

  
  // 1. Definição dos itens de menu
  const menuItems = [
    {
      name: 'Produtos',
      path: '/admin/products',
      icon: Package,
    },
    {
      name: 'Usuários',
      path: '/admin/users',
      icon: Users,
    },
    // Adicionar novos menus aqui é rápido e fácil
  ];
  
  // 2. Lógica para exibir o nome da rota atual no cabeçalho
  const route = useRoute();
  const currentRouteName = computed(() => {
    const currentItem = menuItems.find(item => route.path.startsWith(item.path));
    return currentItem ? currentItem.name : 'Dashboard';
  });
  </script>
  