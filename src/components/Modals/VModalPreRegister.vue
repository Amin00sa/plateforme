<template>
  <modal :is-active="isActive" @close-modal="emit('closeModal')">
    <div class="flex flex-row justify-between text-blue-800 max-w-[46rem]">
      <div class="w-full md:w-1/2 lg:w-1/2 hidden md:block lg:block">
        <img class="w-auto h-full" src="/img/sign_up_student1.jpg" alt="" />
      </div>
      <div class="flex flex-col gap-10 items-center py-14 w-full md:w-1/2 lg:w-1/2 bg-[#E9EAE9]">
        <p class="text-2xl font-medium">S'inscrire</p>
        <checkbox @type-selected="typeSelected" />
        <button
          class="bg-blue-800 text-white disabled:bg-gray-300 w-32 disabled:text-gray-600 rounded-lg mt-6 text-sm py-1.5 font-medium"
          type="button"
          :disabled="disabledButton"
          @click="emit('closeModal',typeId)"
        >
          Continuer
        </button>
        <div class="text-xs -mt-8 font-medium flex gap-1">
          <p class="text-black">Disposez-vous déjà d'un compte?</p>
          <span @click="openConnectModal" class="text-blue-800 cursor-pointer">Connectez-vous</span>
        </div>
      </div>
    </div>
  </modal>
  <v-modal-login :is-active="isOpenConnectModal" @close-modal="closeConnectModal" />
</template>
<script setup>
import Modal from '@/components/Modal.vue'
import Checkbox from '@/components/Checkbox.vue'
import { ref } from 'vue'
import { useOpenModalStore } from '@/stores/openModal.js'
import VModalLogin from '@/components/Modals/VModalLogin.vue'

const typeId = ref(null)
const disabledButton = ref(true)
const store = useOpenModalStore()

const emit = defineEmits(['closeModal'])
defineProps({
  isActive: {
    type: Boolean,
    default: false
  }
})
const typeSelected = (type) => {
  if (type.checked) {
    typeId.value = type
    disabledButton.value = false
  } else {
    disabledButton.value = true
  }
}
const isOpenConnectModal = ref(false)
const openConnectModal = () => {
  store.closeModalStore()
  isOpenConnectModal.value = true
}
const closeConnectModal = () => {
  isOpenConnectModal.value = false
}
</script>
