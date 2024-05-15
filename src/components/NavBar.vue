<template>
  <header class="sticky top-0 z-50 bg-black">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-[0.7rem] lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <RouterLink to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="/img/logo-white.png" alt=""/>
        </RouterLink>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true"/>
        </button>
      </div>
      <div class="hidden lg:flex lg:justify-center lg:items-center lg:gap-x-12">
        <Dropdown class="flex items-center justify-center">
          <template #menuButton>
            <MenuButton
                class="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 text-sm font-semibold hover:bg-gray-800 bg-black text-white">
              Fr
              <ChevronDownIcon class="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true"/>
            </MenuButton>
          </template>
          <template #menuItems>
            <MenuItems
                class="absolute right-0 z-10 mt-36 w-full origin-top-right rounded-md bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div class="py-1">
                <MenuItem v-for="item in languages" :key="item.name" v-slot="{ active }">
                  <a href="#"
                     :class="[active ? 'bg-gray-800 text-white' : 'text-gray-200', 'block px-4 py-2 text-sm text-left']">{{
                      item.name
                    }}</a>
                </MenuItem>
              </div>
            </MenuItems>
          </template>
        </Dropdown>
        <RouterLink v-for="item in navigation" :key="item.name" :to="item.to"
                    class="text-sm font-semibold leading-6 text-white">{{ item.name }}
        </RouterLink>
        <div class="hidden lg:flex lg:flex-1">
          <button
              class="text-sm border-2 w-36 rounded text-center py-2 font-semibold leading-6 text-white border-white hover:bg-white hover:text-black"
              @click="openModal">
            S'inscrire <span
              aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>
    </nav>
    <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10"/>
      <DialogPanel
          class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
        <div class="flex items-center justify-between">
          <RouterLink to="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="/img/logo-white.png" alt=""/>
          </RouterLink>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-400" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true"/>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/25">
            <div class="space-y-2 py-6">
              <Dropdown class="flex items-center justify-center">
                <template #menuButton>
                  <MenuButton
                      class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-black px-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800">
                    Fr
                    <ChevronDownIcon class="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true"/>
                  </MenuButton>
                </template>
                <template #menuItems>
                  <MenuItems
                      class="absolute right-0 z-10 mt-36 w-full origin-top-right rounded-md bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div class="py-1">
                      <MenuItem v-for="item in languages" :key="item.name" v-slot="{ active }">
                        <a href="#"
                           :class="[active ? 'bg-gray-800 text-white' : 'text-gray-200', 'block px-4 py-2 text-sm text-left']">{{
                            item.name
                          }}</a>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </template>
              </Dropdown>
              <RouterLink v-for="item in navigation" :key="item.name" :to="item.to"
                          class="-mx-3 block text-center rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800">
                {{ item.name }}
              </RouterLink>
            </div>
            <div class="py-6">
              <RouterLink to="#"
                          class="-mx-3 text-center block border-2 border-white rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-white hover:text-black"
                          @click="openModal">
                S'inscrire
              </RouterLink>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
  <v-modal-pre-register
      :is-active="isOpen" @close-modal="closeModal"
  />
  <v-modal-register
      :is-active="isOpenStep2" @close-modal="closeModalStep2"
  />
</template>

<script setup>
import {computed, ref} from 'vue'
import {Dialog, DialogPanel, MenuButton, MenuItem, MenuItems} from '@headlessui/vue'
import {ChevronDownIcon} from '@heroicons/vue/20/solid'
import {Bars3Icon, XMarkIcon} from '@heroicons/vue/24/outline'
import {RouterLink} from 'vue-router'
import Dropdown from "@/components/Dropdown.vue";
import {useOpenModalStore} from "@/stores/openModal.js";
import VModalRegister from "@/components/Modals/VModalRegister.vue";
import VModalPreRegister from "@/components/Modals/VModalPreRegister.vue";

const store = useOpenModalStore();
const navigation = [
  {name: 'Ecoles', to: '#'},
  {name: 'Formations', to: '#'},
  {name: 'Se connecter', to: '#'},
]

const languages = [
  {name: 'Fr'},
  {name: 'Eng'},
  {name: 'Esp'},
]

let mobileMenuOpen = ref(false)
const isOpen = computed(() => store.status)
const isOpenStep2 = ref(false)


const closeModal = (nextStep) => {
  store.closeModalStore();
  if (nextStep) {
    openModalStep2();
  }
}

const openModal = () => {
  store.openModalStore();
}

const openModalStep2 = () => {
  isOpenStep2.value = true;
}
const closeModalStep2 = () => {
  isOpenStep2.value = false;
}
</script>