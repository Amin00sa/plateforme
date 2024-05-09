<template>
  <modal :is-active="isActive" @close-modal="emit('closeModal')">
    <div class="flex flex-row justify-between text-blue-800 max-w-[42rem]">
      <div class="w-full md:w-1/2 lg:w-1/2 hidden md:block lg:block">
        <img class="w-auto h-full" src="/img/sign_up_student1.jpg" alt=""/>
      </div>
      <div class="flex flex-col gap-10 items-center py-14 w-full md:w-1/2 lg:w-1/2">
        <p class="text-2xl font-medium">S'inscrire</p>
        <checkbox @type-selected="typeSelected" />
        <button
            class="bg-gray-900 text-gray-100 disabled:bg-gray-300 w-32 disabled:text-gray-600 rounded-lg mt-6 text-sm py-1.5 font-medium"
            type="button"
            :disabled="disabledButton"
            @click="emit('closeModal')"
        >
          Continuer
        </button>
        <div class="text-xs -mt-8 font-medium flex gap-1">
          <p class="text-black">Disposez-vous déjà d'un compte?</p>
          <RouterLink to="#" class="text-blue-800">Connectez-vous</RouterLink>
        </div>
      </div>
    </div>
  </modal>
</template>
<script setup>
import Modal from "@/components/Modal.vue";
import Checkbox from "@/components/Checkbox.vue";
import {ref} from "vue";
const typeId = ref(null);
const disabledButton = ref(true);

const emit = defineEmits(['closeModal'])
defineProps({
  isActive: {
    type: Boolean,
    default: false
  }
});
const typeSelected = (type) =>{
  if(type.checked){
    typeId.value = type;
    disabledButton.value = false;
  }else{
    disabledButton.value = true;
  }
}
</script>