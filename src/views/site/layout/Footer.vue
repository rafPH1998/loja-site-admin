<template>
    <footer>
      <div class="bg-white border-t border-gray-200 px-6 py-14">
        <div class="w-full max-w-7xl mx-auto p-6 flex flex-col md:flex-row items-center gap-6">
          <img src="/assets/ui/mail-send-line.png" alt="" width="68" height="68" />
          <div class="text-center md:text-left">
            <h3 class="font-bold text-2xl mb-6 md:mb-2">Fique por dentro das promoções</h3>
            <p class="text-gray-400">Coloque seu e-mail e seja o primeiro a saber</p>
          </div>
          <form method="POST" class="w-full flex-1 flex flex-col gap-4 md:flex-row">
            <input
              type="text"
              class="flex-1 border border-gray-200 rounded-sm px-6 py-5 outline-0"
              placeholder="Qual seu e-mail?"
              v-model="email"
            />
            <input
              type="submit"
              value="Enviar"
              class="w-60 md:w-50 px-6 py-5 bg-blue-600 text-white border-0 rounded-sm cursor-pointer"
            />
          </form>
        </div>
      </div>
  
      <div class="bg-black text-white">
        <div class="w-full max-w-7xl mx-auto px-6">
          <div class="flex flex-col md:flex-row justify-between items-center gap-6 py-16 md:py-10 border-b border-gray-700">
            <RouterLink to="/">
              <img src="/assets/ui/logo-white.png" alt="B7Store" width="143" height="48" />
            </RouterLink>
            <ul class="flex flex-col md:flex-row gap-8 items-center">
              <li v-for="(item, index) in menu" :key="index">
                <RouterLink :to="item.href">{{ item.label }}</RouterLink>
              </li>
            </ul>
          </div>
  
          <div class="flex flex-col md:flex-row gap-6 py-16 md:py-10 border-b border-gray-700">
            <div class="flex-1">
              <h4 class="mb-6 text-center md:text-left">Precisa de ajuda?</h4>
              <div class="flex flex-col md:flex-row gap-6">
                <FooterButton href="mailto:suporte@b7web.com.br" icon="/assets/ui/mail-line.png" label="suporte@b7web.com.br" />
                <FooterButton href="" icon="/assets/ui/phone-line.png" label="(11) 99999-9999" />
              </div>
            </div>
            <div>
              <h4 class="mb-6 text-center md:text-left">Acompanhe nas redes sociais</h4>
              <div class="flex flex-row justify-between gap-6">
                <FooterButton href="" icon="/assets/ui/instagram-line.png" />
                <FooterButton href="" icon="/assets/ui/linkedin-line.png" />
                <FooterButton href="" icon="/assets/ui/facebook-line.png" />
                <FooterButton href="" icon="/assets/ui/twitter-x-fill.png" />
              </div>
            </div>
          </div>
  
          <div class="flex flex-col md:flex-row gap-14 justify-between items-center py-16 md:py-10">
            <div class="text-xl text-center md:text-left">
              Se você leu isso aqui, saiba que está no caminho certo!<br />
              Continue estudando e você chegará lá...
            </div>
            <div class="flex justify-center">
              <FooterButton href="/" icon="/assets/ui/arrow-up-line.png" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import FooterButton from './FooterButton.vue'
  
  interface MenuItem {
    label: string
    href: string
  }
  
  const menu: MenuItem[] = [
    { label: 'Camisas', href: '/categories/camisas' },
    { label: 'Kits', href: '/categories/kits' }
  ]
  
  const email = ref('')
  </script>
  