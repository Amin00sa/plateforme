<template>
  <footer class="bg-indigo-700 relative" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="absolute py-2 px-3 rounded-sm bg-white top-10 right-6 cursor-pointer" @click="moveToTop">
      <i class="fas fa-arrow-up text-indigo-700 text-2xl"></i>
    </div>
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-2 sm:pt-24 lg:px-8 lg:pt-4">
      <div class="flex justify-around">
        <div>
          <ul role="list" class="space-y-4">
            <li v-for="item in navigation.solutions" :key="item.name">
              <RouterLink :to="item.to" class="text-sm leading-6 text-gray-300 underline hover:text-white">{{
                  item.name
                }}
              </RouterLink>
            </li>
          </ul>
        </div>
        <div class="flex items-center justify-center gap-3">
          <h3 class="text-lg text-white text-nowrap">Suivez nous</h3>
          <ul role="list" class="flex gap-3 mt-2">
            <li v-for="(item, index) in socialMedia.items" :key="index">
              <RouterLink :to="item.to">
                <i :class="item.icon" class="text-white text-2xl"></i>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-7 flex justify-center items-center pt-2 sm:mt-3 lg:mt-10">
        <img class="h-8 w-auto" src="/img/logo-white.png" alt=""/>
        <p class="text-xs leading-5 text-white">&copy; Student Connect 2024.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import '@fortawesome/fontawesome-free/css/all.css';

const navigation = {
  solutions: [
    {name: 'Ecoles', to: '#'},
    {name: 'Formations', to: '#'},
  ],
}
const socialMedia = {
  items: [
    {name: 'Instagram', icon: 'fab fa-instagram', to: '#'},
    {name: 'LinkedIn', icon: 'fab fa-linkedin', to: '#'},
  ],
};
const moveToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
</script>