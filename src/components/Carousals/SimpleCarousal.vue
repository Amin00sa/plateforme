<template>
  <Carousel :autoplay="5000" :wrap-around="true">
    <Slide v-for="slide in contents" :key="slide.image">
      <div class="carousel__item">
        <div class="w-full h-full flex flex-col justify-between p-6">
          <div class="flex justify-center items-center">
            <div class="w-1/3 hidden lg:block md:block">
              <img :src="slide.image" alt="image">
            </div>
            <div class="w-2/3 flex flex-col gap-10 justify-center items-center">
              <p class="text-xl w-9/12 text-left lg:text-3xl md:text-2xl leading-[4.5rem] text-[#4D505A] font-semibold font-['Elephant']">
                <span class="text-xl lg:text-4xl md:text-2xl text-black">{{ slide.paragraph.split(' ')[0] }}</span>
                {{ slide.paragraph.substring(slide.paragraph.indexOf(' ') + 1) }}
              </p>
              <button
                  class="bg-blue-800 rounded-md hover:cursor-pointer
                  hover:bg-blue-600 text-white text-nowrap
                  text-lg font-semibold w-full px-2 md:px-3 lg:px-6 md:w-80 lg:w-80
                  border-2 border-blue-800 py-2 text-center"
                  @click="openModal">
                {{ slide.button }}
              </button>
            </div>
          </div>
          <Pagination/>
        </div>
      </div>
    </Slide>
  </Carousel>
</template>

<script setup>
import {Carousel, Pagination, Slide} from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import {useOpenModalStore} from "@/stores/openModal.js";

const store = useOpenModalStore();
const contents = [
  {
    image: '/img/Mobile_login_rafiki.png',
    paragraph: 'Prenez le premier pas vers votre avenir en vous inscrivant dès maintenant',
    button: 'S\'inscrire gratuitement'
  },
  {
    image: '/img/Job_hunt_rafiki.png',
    paragraph: 'Découvre l\'école et la formation qui corespendent à vos objectifs.',
    button: 'S\'inscrire gratuitement'
  },
  {
    image: '/img/Photo3.png',
    paragraph: 'Faites le premier pas vers votre succès en vous préinscrivant dès ajourd\'hui !',
    button: 'S\'inscrire gratuitement'
  },
  {
    image: '/img/8452880-ai.png',
    paragraph: 'Nous vous accompagnons à chaque étape pour faire de votre projet une réalité',
    button: 'S\'inscrire gratuitement'
  },
]
function openModal() {
  store.openModalStore();
}
</script>

<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: #C1C9E2;
  color: darkblue;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}
</style>
