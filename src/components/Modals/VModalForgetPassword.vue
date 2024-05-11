<template>
  <modal :is-active="isActive" @close-modal="emit('closeModal')">
    <div class="flex flex-row justify-between text-blue-800 max-w-[46rem]">
      <div class="w-full md:w-1/2 lg:w-1/2 hidden md:block lg:block">
        <img class="w-auto h-full" src="/img/sign_up_student1.jpg" alt=""/>
      </div>
      <div class="flex flex-col gap-10 text-left items-center py-14 w-full md:w-1/2 lg:w-1/2 bg-[#E9EAE9]">
        <p class="text-2xl font-medium">Rénitialiser le mot de passe</p>
        <div class="flex flex-col gap-2 w-full px-8">
          <p class="text-black">Veuillez saisir votre adresse e-mail afin de recevoir un lien pour rénitialiser votre mot de passe.</p>
          <v-input label="Email" type="email" :required=true />
          <div class="mt-6">
            <button
                class="bg-blue-800 text-gray-100 w-full rounded-lg -mt-2 text-sm py-2 font-semibold"
                type="button"
                @click="emit('closeModal')"
            >
              Rénitialiser le mot de passe
            </button>
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>
<script setup>
import Modal from "@/components/Modal.vue";
import VInput from "@/components/VInput.vue";

const emit = defineEmits(['closeModal'])
defineProps({
  isActive: {
    type: Boolean,
    default: false
  }
});
</script>