<template>
  <modal :is-active="isActive" @close-modal="emit('closeModal')">
    <div class="flex flex-row justify-between text-blue-800 max-w-[46rem]">
      <div class="w-full md:w-1/2 lg:w-1/2 hidden md:block lg:block">
        <img class="w-auto h-full" src="/img/sign_up_student1.jpg" alt="" />
      </div>
      <div class="flex flex-col gap-10 items-center py-14 w-full md:w-1/2 lg:w-1/2 bg-[#E9EAE9]">
        <p class="text-2xl font-medium">S'inscrire</p>
        <div class="flex flex-col gap-2 w-full px-8">
          <v-input
            label="Etablissement"
            type="text"
            v-model="data.school_name"
            :required="true"
            :error="getErrorMessage('school_name')"
            @change="clearError('school_name')"
          />
          <v-input
            :error="getErrorMessage('email')"
            label="Email"
            v-model="data.email"
            type="email"
            :required="true"
            @change="clearError('email')"
          />

          <v-input
            label="Numéro de téléphone"
            type="text"
            v-model="data.telephone"
            :required="true"
            :error="getErrorMessage('telephone')"
            @change="clearError('telephone')"
          />

          <div class="relative w-full text-left">
            <label for="password" class="text-black pl-6">
              Mot de passe <span class="text-red-600">*</span>
            </label>
            <input
              v-if="showPassword"
              id="password"
              v-model="data.password"
              class="bg-white text-black rounded-lg pl-3 h-8 w-full"
              type="text"
              @change="clearError('password')"
            />
            <input
              v-else
              id="password"
              v-model="data.password"
              class="bg-white text-black rounded-lg pl-3 h-8 w-full"
              type="password"
              @change="clearError('password')"
            />
            <span
              class="absolute text-black right-3 top-[1.85rem] cursor-pointer"
              @click="showPassword = !showPassword"
            >
              <img v-if="showPassword" src="/img/eye.png" alt="eye_open" class="w-5 h-5" />
              <img v-else src="/img/eyeHidden.png" alt="eye_hidden" class="w-5 h-5" />
            </span>
            <span v-if="getErrorMessage('password')" class="mt-1 text-sm text-red-600 text-left">{{
              getErrorMessage('password')
            }}</span>
          </div>
          <div class="mt-1.5 flex text-left text-xs">
            <input type="checkbox"  class="w-6" />
            <label class="text-black">
              Oui, j'accèpte les
              <span class="text-blue-800">conditions d'emploi</span>, y compris l'<span
                class="text-blue-800"
                >accord d'utilisation</span
              >
              et la <span class="text-blue-800">politique de confidentialité</span>
            </label>
          </div>
        </div>
        <button
          class="bg-blue-800 text-gray-100 w-32 rounded-lg -mt-6 text-sm py-2 font-semibold"
          type="button"
          @click="handleSubmit"
        >
          Créer un compte
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
import VInput from '@/components/VInput.vue'
import { reactive, ref } from 'vue'
import { useOpenModalStore } from '@/stores/openModal.js'
import VModalLogin from '@/components/Modals/VModalLogin.vue'
import { useAuthStore } from '@/stores/auth.store'
import { getErrorMessage, isError, clearError } from '@/utils/error-handler'
import { useRouter } from 'vue-router'

const router = useRouter()
const showPassword = ref(false)
const store = useOpenModalStore()
const authStore = useAuthStore()
const emit = defineEmits(['closeModal'])
defineProps({
  isActive: {
    type: Boolean,
    default: false
  }
})
const data = ref({
  password: '',
  email: '',
  school_name: '',
  telephone: ''
})

const handleSubmit = async () => {
  await authStore.register('schools', data.value)
  if (authStore.authenticated===true) {
    emit('closeModal')
    router.push({ name: 'home' })
  }
}
const isOpenConnectModal = ref(false)
const openConnectModal = () => {
  store.closeModalStore()
  emit('closeModal')
  isOpenConnectModal.value = true
}
const closeConnectModal = () => {
  isOpenConnectModal.value = false
}
</script>
