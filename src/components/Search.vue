<template>
  <div class="relative w-96">
      <input
          id="default-search" v-model="formData.name" class="bg-transparent flex justify-between items-center border-2 border-white rounded-2xl gap-3 text-white w-full h-10 pl-6"
          :placeholder="text"
          type="text"
      />
    <div class="absolute right-1 top-1 bottom-1 py-1.5 px-2.5 flex items-center bg-blue-800 items-center rounded-xl cursor-pointer"
          @click="search">
      <img src="/img/search.png" class="w-5 h-5" alt="search">
    </div>
  </div>
</template>
<script setup>
import {reactive} from "vue";

const emit = defineEmits(['filterByName']);

defineProps({
  text: {
    type: String,
    default: ''
  }
});
const formData = reactive({
  name: ""
});
const search = () => {
  console.log(formData);
  emit('filterByName', formData);
}
</script>