<template>
  <SlideUpDown :active="isOpened" :duration="200">
    <slot></slot>
  </SlideUpDown>
</template>

<script>
import SlideUpDown from 'vue-slide-up-down'
export default {
  name: 'BaseDropdown',

  props: {
    isOpened: {
      type: Boolean,
      required: true
    }
  },

  components: {
    SlideUpDown
  }
}
</script>
