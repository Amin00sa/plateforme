<script setup>
import Footer from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <div class="flex flex-col">
    <NavBar />
    <div class="bg-[#F6F7F1]">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>
