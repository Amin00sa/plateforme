<template>
  <div class="flex flex-col gap-1 text-left w-full">
    <label v-if="label" :class="labelClasses"> {{ label }} <span v-if="required" class="text-red-600">*</span></label>
    <div>
      <input
          ref="input"
          :class="classes"
          :disabled="disabled"
          :value="modelValue"
          :type="type"
          :placeholder="placeholder"
          :step="step"
      >
    </div>
    <span v-if="error" :class="errorClasses">{{ error }}</span>
  </div>
</template>
<script setup>

defineProps({
  type: {
    type: String,
    default: 'text',
  },
  step: {
    type: Number,
    default: 0.1
  },
  label: {
    type: String,
    default: '',
  },
  labelClasses: {
    type: String,
    default: 'text-black pl-6',
  },
  placeholder: {
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
    default: '',
  },
  classes: {
    type: String,
    default: 'bg-white text-black rounded-lg pl-3 h-8 w-full',
  },
  error: {
    type: String,
    default: '',
  },
  errorClasses: {
    type: String,
    default: 'mt-1 text-sm text-red-600 text-left',
  },
  disabled: {
    type: Boolean,
    default: false
  },
  required: {
    type: Boolean,
    default: false
  }
})
</script>