<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <slot name="menuButton"></slot>
    </div>

    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <slot name="menuItems"></slot>
    </transition>
  </Menu>
</template>

<script setup>
import { Menu} from '@headlessui/vue'
</script>