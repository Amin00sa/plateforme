<template>
  <modal :is-active="isActive" @close-modal="emit('closeModal')">
    <div class="flex flex-row justify-between text-blue-800 max-w-[46rem]">
      <div class="w-full md:w-1/2 lg:w-1/2 hidden md:block lg:block">
        <img class="w-auto h-full" src="/img/sign_up_student1.jpg" alt="" />
      </div>
      <div class="flex flex-col gap-10 items-center py-14 w-full md:w-1/2 lg:w-1/2 bg-[#E9EAE9]">
        <p class="text-2xl font-medium">Se connecter</p>
        <div class="flex flex-col gap-2 w-full px-8">
          <fieldset class="text-left flex gap-2">
            <div>
              <input type="radio" v-model="data.guard" value="students" />
              <label for="huey">Eleve</label>
            </div>
            <div>
              <input type="radio" v-model="data.guard" value="schools" />
              <label for="dewey">Etablissement</label>
            </div>
          </fieldset>

          <v-input
            :error="getErrorMessage('email')"
            label="Email"
            v-model="data.email"
            modelValue="data.email"
            @change="clearError('email')"
            type="text"
            :required="true"
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
            />
            <input
              v-else
              id="password"
              v-model="data.password"
              class="bg-white text-black rounded-lg pl-3 h-8 w-full"
              type="password"
            />
            <span
              class="absolute text-black right-3 top-[1.85rem] cursor-pointer"
              @click="showPassword = !showPassword"
            >
              <img v-if="showPassword" src="/img/eye.png" alt="eye_image" class="w-5 h-5" />
              <img v-else src="/img/eyeHidden.png" alt="eye_image_hidden" class="w-5 h-5" />
            </span>
          </div>
          <span
            @click="openForgetPasswordModal"
            class="text-blue-800 cursor-pointer text-right text-xs font-medium"
            >Mot de passe oublié</span
          >
        </div>
        <button
          class="bg-blue-800 text-gray-100 w-32 rounded-lg -mt-2 text-sm py-2 font-semibold"
          type="button"
          @click="handleSubmit"
        >
          Se connecter
        </button>
        <div class="text-xs -mt-6 font-medium flex gap-1">
          <p class="text-black">Vous n'avez pas de compte ?</p>
          <span @click="openRegisterModal" class="text-blue-800 cursor-pointer"
            >Inscrivez-vous ici</span
          >
        </div>
      </div>
    </div>
  </modal>
  <v-modal-forget-password
    :is-active="isopenForgetPasswordModal"
    @close-modal="closeForgetPasswordModal"
  />
</template>
<script setup lang="ts">
import Modal from '@/components/Modal.vue'
import VInput from '@/components/VInput.vue'
import { reactive, ref } from 'vue'
import { useOpenModalStore } from '@/stores/openModal.js'
import VModalForgetPassword from '@/components/Modals/VModalForgetPassword.vue'
import { useAuthStore } from '@/stores/auth.store'
import { getErrorMessage, isError, clearError } from '@/utils/error-handler'
import {useRouter} from "vue-router"

const router=useRouter();
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
  guard: null
})

const handleSubmit = async() => {
  if (!data.value.guard) {
    return
  }
  await authStore.login(data.value.guard, data.value)
  if(authStore.authenticated){
    emit('closeModal')
    router.push({name:'home' })
  }
}

const openRegisterModal = () => {
  store.openModalStore()
}
const isopenForgetPasswordModal = ref(false)
const openForgetPasswordModal = () => {
  emit('closeModal')
  isopenForgetPasswordModal.value = true
}
const closeForgetPasswordModal = () => {
  isopenForgetPasswordModal.value = false
}
</script>
