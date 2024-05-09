<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="flex flex-col">
    <Header />
    <div class="bg-[#F6F7F1]">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>
