<template>
    <section class="l-button-three" v-styler:section="$sectionData.mainStyle" :class="$sectionData.mainStyle.classes" v-bind:style="$sectionData.mainStyle.styles">
      <a v-for="(item, index) in $sectionData.buttons" :key="index" class="b-button-three b-button-three_circle" target="_blank"
           v-styler:index="`$sectionData.buttons[${index}].button`"
           v-html="$sectionData.buttons[index].button.text"
           :href="$sectionData.buttons[index].button.href"
           v-bind:style="$sectionData.buttons[index].button.styles"
          >
      </a>
    </section>
</template>

<script>
import * as types from '@editor/types'

export default {
  name: 'Button3',
  cover: '/img/covers/button3.png',
  group: 'buttons',
  $schema: {
    mainStyle: types.StyleObject,
    buttons: [{
      text: 'Play Now',
      button: types.Button
    }]
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
.l-button-three
  width: 100%
  position: relative
  margin: 1rem 0
  display: flex
  align-items: center
  justify-content: center
  &.is-editable
    resize: vertical
    overflow: hidden
.b-button-three
  position: relative
  font-size: 2.3rem
  font-family: Helvetica, Arial, sans-serif
  line-height: 1
  width: 20rem
  min-width: 10rem
  min-height: 5rem
  padding: 2rem
  color: #000
  background-color: #ffba00
  text-transform: uppercase
  display: flex
  align-items: center
  justify-content: center
  user-select: none
  cursor: pointer
  &_circle
    border-radius: 50%
    height: 20rem
    color: #333
    background-color: #555
    &:before, &:after
      display: none
  &:hover
    filter: brightness(120%)
  &:active
    filter: brightness(50%)
  &.is-editable
    resize: both
    overflow: hidden
  .is-tablet &,
  .is-mobile &
    font-size: 2rem
  @media only screen and (max-width: 768px)
    &
      font-size: 2rem
</style>
