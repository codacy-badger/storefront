<template>
  <div class="menu-item">
    <div
      class="menu-item-inner"
      :class="{'_selected': isSelected, '_expandable': isExpandable}"
      @click="$emit('click', $event)">

      <span class="menu-item-inner__icon">
        <slot name="icon"></slot>
      </span>

      <span class="menu-item-inner__title">
        <slot></slot>
      </span>
    </div>
    <slot name="dropdown"></slot>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',

  props: {
    isExpandable: {
      type: Boolean,
      default: false
    },
    isSelected: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="sass" scoped>

.menu-item-inner
  display: flex
  height: 56px
  align-items: center
  cursor: pointer
  color: #474747
  padding-left: 32px

  &:hover
    background: rgba(#202020, 0.08)

  &._selected:not(._expandable)
    background: #4D7DD8
    color: #ffffff

  &._selected._expandable
    background: #D5DFF3

  &__title
    font-size: 16px
    line-height: 18px
    font-weight: bold

  &__icon
    width: 32px
    display: flex

</style>
