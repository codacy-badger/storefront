<template>
    <section id="buttonOne" class="l-button-one" v-styler:section="$sectionData.mainStyle" :class="$sectionData.mainStyle.classes" v-bind:style="$sectionData.mainStyle.styles">
      <a class="b-button-one" target="_blank"
           v-styler="$sectionData.button.button"
           v-html="$sectionData.button.button.text"
           :href="$sectionData.button.button.href"
           v-bind:style="$sectionData.button.button.styles"
          >
      </a>
    </section>
</template>

<script>
import * as types from '@plugins/Vuse/types'

export default {
  name: 'Button1',
  cover: '/img/covers/button.png',
  group: 'buttons',
  $schema: {
    mainStyle: types.StyleObject,
    button: {
      text: 'Play Now',
      button: types.Button
    }
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
.l-button-one
  width: 100%
  position: relative
  margin: 1rem 0
  display: flex
  align-items: center
  justify-content: center
  &.is-editable
    resize: vertical
    overflow: hidden
.b-button-one
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
  border: transparent solid  0.2rem
  border-color: #ffba00
  margin: 0 auto
  text-transform: uppercase
  display: flex
  align-items: center
  justify-content: center
  user-select: none
  cursor: pointer
  &:before
    content: ''
    position: absolute
    display: block
    border: transparent solid  0.2rem
    border-color: inherit
    top: -0.7rem
    right: -0.7rem
    bottom: -0.7rem
    left: -0.7rem
    pointer-events: none
    transition: all 200ms
    backface-visibility: hidden
    z-index: -1
  &:hover
    filter: brightness(120%)
    &:before
      border: inherit solid  0.2rem
      top: 0
      right: 0
      bottom: 0
      left: 0
  &:active
    filter: brightness(50%)
  &.is-editable
    resize: both
    overflow: hidden
  @media only screen and (max-width: 768px)
    &
      font-size: 2rem
</style>
