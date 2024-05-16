<template>
  <div class="flex justify-center items-center w-full bg-black py-10 pr-0 pl-10">
    <div class="w-full px-0 md:px-12 lg:px-24 md:w-2/3 lg:w-2/3">
      <div class="w-full">
        <div class="flex flex-col gap-6">
          <p class="text-3xl font-semibold text-white w-full md:w-[40rem] lg:w-[46rem] font-['Elephant'] tracking-wider leading-10">
            <span>
              {{ headerContent.title }}
            </span>
            <br>
            <span>
              {{ headerContent.subtitle }}
            </span>
          </p>
          <search text="Rechercher une formation ou une école..." />
        </div>
      </div>
    </div>
    <div class="hidden w-1/3 lg:block md:block">
      <images-with-effect/>
    </div>
  </div>
  <main class="lg:mx-36 md:mx-16 sm:mx-8 mx-8 flex flex-col gap-6 py-6">
    <simple-carousal/>
    <p class="text-4xl font-semibold text-blue-800 font-['Elephant']">Découvrez les programmes
      d'Excellence</p>
    <div class="flex justify-between">
      <p class="text-lg text-gray-600 font-semibold">Façonner votre avenir académique dans un monde d'opportunités
        infinies</p>
      <button
          class="bg-blue-800 rounded-md hover:cursor-pointer
          hover:bg-blue-600 text-white text-nowrap
          border-2 border-blue-800 w-32 py-2 text-center"
          @click="openModal">
        <span class="font-semibold">Explorer >></span>
      </button>
    </div>
    <div class="grid lg:grid-rows-2 lg:grid-cols-4 sm:grid-rows-3 sm:grid-cols-3 gap-3">
      <simple-card v-for="field in fields" :key="field.name" :text="field.name"/>
    </div>
    <div class="flex bg-[#0B0325] flex-row justify-between lg:w-full rounded-xl text-white">
      <div class="w-full py-12 px-9 justify-between text-xl flex flex-col gap-6 sm:w-full lg:w-2/3 md:w-2/3">
        <p class="text-4xl font-semibold font-['Elephant']">
          <span>Voici</span> <br>
          <span class="text-[#A066CB] text-4xl font-semibold font-['Elephant']">Comment les étudiants ambitieux
            trouvent leur voie.</span>
        </p>

        <p>Accédez aux meilleures écoles supérieures privées et simplifiez votre processus d'inscription. C'est ainsi
          que
          se dessine l'innovation éducative désormais.</p>
        <ul>
          <li v-for="point in points" :key="point.text" class="flex gap-3">
            <i class="text-[#A066CB] text-lg mt-2" :class="point.icon"></i>
            <span>{{ point.text }}</span>
          </li>
        </ul>
        <button
            class="bg-gray-200 w-44 text-gray-900 hover:bg-gray-500 hover:text-gray-200 rounded-sm text-lg py-1.5 font-bold"
            @click="openModal">
          Découvrir
        </button>
      </div>
      <div class="w-1/3 hidden h-2/3 lg:block md:block">
        <div class="w-full">
          <img class="w-full h-full rounded-r-xl lg:max-h-[468px] h-full" src="/img/front-view-smiley-student-with-laptop.jpg" alt=""/>
        </div>
      </div>
    </div>
  </main>
  <div class="flex bg-[#0B0325] flex-row px-28 justify-around h-[38rem] pt-16 lg:w-full text-white">
    <div class="w-full sm:w-full lg:w-1/2 md:w-1/2 py-12 justify-between text-xl flex flex-col">
      <p class="text-4xl font-semibold font-['Elephant']">
        <span>
          Rejoinez
        </span>
        <br>
        <span class="text-[#A066CB] text-4xl font-semibold font-['Elephant']">La révolution éducative.</span>
      </p>
      <div>
        <div v-for="content in contents" :key="content.title">
          <div class="flex items-center gap-4">
            <span class="w-12 h-12">
              <verify class="w-12 h-12"/>
            </span>
            <div class="flex flex-col" :class="content.class">
              <span class="text-2xl font-semibold">{{ content.title }}</span>
              <span class="text-md">{{ content.subtitle }}</span>
            </div>
          </div>
        </div>
      </div>
      <button
          class="bg-gray-200 w-56 text-nowrap text-gray-900 hover:bg-gray-500 hover:text-gray-200 rounded-sm text-lg py-1.5 font-bold"
          @click="openModal">
        Devenir Partenaire
      </button>
    </div>
    <div class="w-1/2 hidden lg:block md:block">
      <div class="flex justify-end">
        <div v-for="content in contentCards" :key="content.title">
          <card :content="content"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SimpleCard from "@/components/Cards/SimpleCard.vue";
import Shuttle from "@/components/Icons/shuttle.vue";
import Handshake from "@/components/Icons/handshake.vue";
import Puzzle from "@/components/Icons/puzzle.vue";
import Card from "@/components/Cards/Card.vue";
import Verify from "@/components/Icons/verify.vue";
import SimpleCarousal from "@/components/Carousals/SimpleCarousal.vue";
import Search from "@/components/Search.vue";
import ImagesWithEffect from "@/components/Effects/ImagesWithEffect.vue";
import {useOpenModalStore} from "@/stores/openModal.js";

defineEmits(['openModal']);
const store = useOpenModalStore();

const fields = [
  {name: 'Génie Informatique'},
  {name: 'Droit'},
  {name: 'Sciences de la santé'},
  {name: 'Sciences politiques'},
  {name: 'Energie hydrogène'},
  {name: 'Comptabilité'},
  {name: 'Ressource humaine'},
  {name: 'Architecture'}
]

const points = [
  {icon: 'fa-solid fa-school-flag', text: 'Explorez écoles, opportunités académiques exceptionnelles'},
  {icon: 'fa fa-graduation-cap', text: 'Maîtrisez votre parcours éducatif : découvrez, postulez, suivez.'},
  {icon: 'far fa-handshake', text: 'Alliance avec Study Connect, suivi complet'},
]

const contentCards = [
  {title: 'Support Personnalisé', icon: Handshake, class: 'mt-48'},
  {title: 'Augmentation de visibilité', icon: Shuttle, class: 'mt-0 mx-auto'},
  {title: 'Suplicité de Gestion', icon: Puzzle, class: 'mt-48'}
]

const contents = [
  {
    title: 'Augmentez Votre Visibilité',
    subtitle: 'Mettez en avant vos programmes et attirez des étudiants en recherche de qualité'
  },
  {title: 'Simplicité de Gestion', subtitle: 'Créez votre profil en quelques étapes simples'},
  {
    title: 'Support Personnalisé',
    subtitle: 'Bénéficiez d\'un accompagnement dédié pour optimiser votre présence sur notre plateforme'
  },
]
const headerContent = {
  title: 'L\'éducation de qualité à votre portée',
  subtitle: 'Explorez les écoles supérieurs privées'
}

function openModal() {
  store.openModalStore();
}
</script>
