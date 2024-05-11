<template>
  <Carousel :autoplay="3000" :wrap-around="true">
    <Slide v-for="slide in contents" :key="slide.image" id="auto_scroll_carossal">
      <div class="carousel__item">
        <div class="w-full h-full flex flex-col justify-end pl-6">
          <Pagination style="visibility: hidden;"/>
          <img :src="slide.image" class="h-96 w-96" alt="slider_image">
        </div>
      </div>
    </Slide>
  </Carousel>
</template>

<script setup>
import {Carousel, Pagination, Slide} from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const contents = [
  {
    image: '/img/photo1_section1.png',
  },
  {
    image: '/img/photo5_section1.png',
  },
  {
    image: '/img/photo2_section1.png',
  },
  {
    image: '/img/photo3_section1.png',
  },
  {
    image: '/img/photo6_section1.png',
  },
  {
    image: '/img/photo4_section1.png',
  }
]
</script>

<style>
#auto_scroll_carossal > .carousel__item {
  min-height: 400px;
  background-size: 100%; /* Set the background size to cover the entire container width */
  background-repeat: no-repeat; /* Prevent background from repeating */
  background-position: center; /* Center the background image */
  background-color: transparent;
  color: black;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0;
}

#auto_scroll_carossal {
  padding: 0 !important;
}
</style>
