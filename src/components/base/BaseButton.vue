<script>
import booleanValidator from '../helpers/boolean-validator'

export default {
  props: {
    /* color variant button */
    variant: {
      default: 'black',
      type: String,
      validator (value) {
        const values = [
          'black',
          'gray',
          'light-gray'
        ]
        return values.indexOf(value) !== -1
      }
    },
    /* size button */
    size: {
      default: 'default',
      type: String,
      validator (value) {
        const values = ['default']
        return values.indexOf(value) !== -1
      }
    },
    /* transparent button */
    transparent: {
      default: false,
      validator: booleanValidator('BaseButton', 'transparent')
    },
    /* type button */
    type: {
      default: 'button',
      type: String,
      validator (value) {
        const values = ['button', 'submit', 'reset']
        return values.indexOf(value) !== -1
      }
    },
    /* is presset button */
    pressed: {
      default: false,
      validator: booleanValidator('BaseButton', 'pressed')
    },
    /* is disabled */
    disabled: {
      default: false,
      validator: booleanValidator('BaseButton', 'disabled')
    }
  },
  computed: {
    setClasses () {
      const name = 'b-pth-base-button'
      const classes = [`${name}_${this.variant}`, `${name}_${this.size}`]
      if (this.pressed) {
        classes.push(name + '_pressed')
      }
      console.log(this.transparent)
      if (this.transparent) {
        classes.push(name + '_transparent')
      }
      return classes
    }
  }
}
</script>

<template>
  <button class="b-pth-base-button"
    :class="setClasses"
    :type="type"
    :disabled="disabled"
    :transparent="transparent"
    >
    <slot></slot>
  </button>
</template>

<style lang="sass">
.b-pth-base-button
  border-radius: 0.2rem
  border: 0.2rem transparent solid
  outline: none
  transition: all .3s cubic-bezier(.2,.85,.4,1.275)
  font-size: 1.6rem
  line-height: 4.4rem
  margin: 0.4rem
  =active
    background-color: #165c8f
    border-color: #165c8f
    color: #fafafa
  &:hover
    cursor: pointer
    +active
  &_default
    width: 20.8rem
    height: 4.8rem
  &_pressed
    +active
  &_black
    color: #eee
    background-color: #202020
  &_grey
    color: #eee
    background-color: #383838
    border: 0.2rem #dedede solid
  &_light-gray
    color: #888
    background-color: #fafafa
    border: 0.2rem #dedede solid
  &_transparent
    background-color: transparent
</style>
