<template>
    <section class="l-button-one" v-styler:section="$sectionData.mainStyle" :class="$sectionData.mainStyle.classes" v-bind:style="$sectionData.mainStyle.styles">
      <a v-for="(item, index) in $sectionData.buttons.items" :key="index" class="b-button-one" @click.prevent="onClick"
         :href="item.href"
         v-html="item.text"
         v-styler="$sectionData.buttons.element"
         :style="$sectionData.buttons.element.styles">
      </a>
    </section>
</template>

<script>
import * as types from '@plugins/Vuse/types'

export default {
  name: 'Button1',
  cover: '/img/covers/button1.png',
  group: 'buttons',
  $schema: {
    mainStyle: types.StyleObject,
    buttons: {
      element: types.Button,
      items: [
        {
          text: 'Play Now',
          href: '#'
        }
      ]
    }
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  methods: {
    onClick () {
      /**/
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
  font-family: "alice-regular"
  line-height: 1
  width: 20rem
  min-width: 10rem
  min-height: 5rem
  padding: 2rem
  color: #000
  background-color: #a7a1a1
  border: transparent solid  0.2rem
  border-color: #a7a1a1
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
