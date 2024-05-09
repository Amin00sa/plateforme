<template>
  <div class="hover:bg-blue-800 bg-[#F6F7F1] rounded-md hover:cursor-pointer hover:text-white text-blue-800 border-2 border-blue-800 px-2 py-7 text-center">
    <p class="font-semibold">{{ text }}</p>
  </div>
</template>
<script setup>
defineProps(['text'])
</script>