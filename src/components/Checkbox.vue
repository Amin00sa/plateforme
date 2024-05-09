<template>
  <fieldset>
    <div class="flex flex-col w-1/2 gap-3">
      <div v-for="(type, typeIdx) in types" :key="typeIdx"
           class="relative flex flex-col w-28 items-start py-4 border border-blue-800 hover:bg-blue-600 hover:text-white rounded-lg text-blue-800 cursor-pointer"
           :class="{ 'bg-blue-600 !text-white': type.checked }"
           @click="toggleCheckbox(type)">
        <div class="absolute right-2 top-2 h-6">
          <input :id="`type-${type.id}`" :name="`type-${type.id}`" type="checkbox"
                 class="rounded-full h-3.5 w-3.5 border border-blue-800 appearance-none checked:bg-blue-800 checked:border-transparent"
                 :checked="type.checked"/>
        </div>
        <div class="min-w-0 flex-1 mt-6 mx-3 text-left text-sm leading-6"
             @click="toggleCheckbox(type)"
        >
          <label :for="`type-${type.id}`" class="select-none font-medium">{{ type.name }}</label>
        </div>
      </div>
    </div>
  </fieldset>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['type-selected']);
const types = ref([
  { id: 0, name: 'Je suis un établissement', checked: false },
  { id: 1, name: 'Je suis un étudiant', checked: false },
]);

const toggleCheckbox = (clickedType) => {
  types.value.forEach(type => {
    if (type !== clickedType) {
      type.checked = false;
    }
  });
  clickedType.checked = !clickedType.checked;
  emit('type-selected', clickedType);
}

</script>
