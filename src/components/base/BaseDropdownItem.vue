<template>
  <div class="base-dropdown-item"
    :class="[`_color-${color}`, {'_selected': isSelected}]">
    <slot></slot>
  </div>
</template>

<script>
/**
 * !!! INCOMPLETE TEST COMPONENT !!!
 */
import includes from 'lodash/includes'
export default {
  name: 'BaseDropdownItem',

  props: {
    color: {
      type: String,
      validator (value) {
        const allowed = ['dark', 'light']
        return includes(allowed, value)
      },
      default: 'dark'
    },
    isSelected: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="sass" scoped>
.base-dropdown-item
  display: flex
  height: 48px
  align-items: center
  cursor: pointer
  padding-left: 12px;

  &._color-dark
    background: #383838
    color: #888888

    &:hover
      background: #202020

    &._selected
      background: #202020
      color: #ffffff
</style>
