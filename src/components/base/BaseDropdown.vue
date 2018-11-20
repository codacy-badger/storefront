<template>
  <transition name="slide-fade" v-if="isOpened">
    <div>
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'BaseDropdown',

  props: {
    isOpened: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
// Animations down here
.slide-fade-enter-active
  transition: all .2s ease

.slide-fade-leave-active
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0)

.slide-fade-enter, .slide-fade-leave-to
  transform: translateX(-8px)
  opacity: 0
</style>
