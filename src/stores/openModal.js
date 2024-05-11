import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useOpenModalStore = defineStore('openModal', () => {
  const status = ref(false)

  const closeModalStore = () => {
    status.value = false;
  }

  const openModalStore = () => {
    status.value = true;
  }

  return {status, closeModalStore, openModalStore}
})
