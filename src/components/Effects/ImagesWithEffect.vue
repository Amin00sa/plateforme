<template>
  <div class="section">
    <div class="image-container" v-for="(image, index) in contents" :key="index" :style="{ 'background-image': 'url(' + image.image + ')' }"></div>
  </div>
</template>

<style>
.section {
  width: 100%;
  height: 400px; /* Adjust height as needed */
  overflow: hidden;
  position: relative;
}

.image-container {
  width: 400px;
  background-size: cover;
  background-position: center;
  position: absolute;
  bottom: 0;
  top: 0;
  right: 0;
  opacity: 0;
  transition: opacity 2s ease;
}

.image-container.active {
  opacity: 1;
}

/* Animation to shift images */
@keyframes shiftImages {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>

<script setup>
import { ref, onMounted, watchEffect } from 'vue'

const activeIndex = ref(0)

const contents = [
  { image: '/img/photo1_section1.png' },
  { image: '/img/photo5_section1.png' },
  { image: '/img/photo2_section1.png' },
  { image: '/img/photo3_section1.png' },
  { image: '/img/photo6_section1.png' },
  { image: '/img/photo4_section1.png' }
]

onMounted(() => {
  watchEffect(() => {
    const imageContainers = document.querySelectorAll('.image-container')
    if (imageContainers.length > 0) {
      imageContainers.forEach(container => container.classList.remove('active'))
      imageContainers[activeIndex.value].classList.add('active')
      setTimeout(() => {
        activeIndex.value = (activeIndex.value + 1) % contents.length
      }, 5000) // Change every 5 seconds
    }
  })
})
</script>

