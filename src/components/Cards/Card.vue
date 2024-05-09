<template>
  <div class="py-10 max-w-44 px-3 flex flex-col justify-center items-center bg-[#633D87] rounded-lg" :class="content.class">
    <div class="w-24 h-24 flex justify-center items-center bg-[#0B0325] rounded-full">
      <Component :is="content.icon" class="w-10" />
    </div>
    <p class="text-center font-semibold text-lg font-['Elephant'] tracking-wider">{{content.title}}</p>
  </div>
</template>
<script setup>
defineProps(['content'])
</script>