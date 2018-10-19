<template>
    <section class="l-button-sixth" v-styler:section="$sectionData.mainStyle" :class="$sectionData.mainStyle.classes" v-bind:style="$sectionData.mainStyle.styles">
      <a v-for="(item, index) in $sectionData.buttons" :key="index" class="b-button-sixth"
           v-styler:for="{ el: $sectionData.buttons[index].element ,path:`$sectionData.buttons[${index}].element`}"
           @click.prevent="openLink(item)" :target="$sectionData.buttons[index].element.target"
           v-html="$sectionData.buttons[index].element.text"
           :href="$sectionData.buttons[index].element.href"
           v-bind:style="$sectionData.buttons[index].element.styles"
          >
      </a>
    </section>
</template>

<script>
import * as types from '@editor/types'

export default {
  name: 'Button6',
  cover: '/img/covers/button3.gif',
  group: 'buttons',
  $schema: {
    mainStyle: types.StyleObject,
    buttons: [{
      element: types.Button
    }]
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  methods: {
    openLink (el) {
      if (this.$builder.isEditing) return

      if (!el) {
        return
      }

      const href = el.href

      if (el && undefined !== href) {
        window.open(href)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.l-button-sixth
  width: 100%
  position: relative
  margin: 0
  display: flex
  align-items: center
  justify-content: center
  &.is-editable
    resize: vertical
    overflow: hidden
.b-button-sixth
  position: relative
  font-size: 3rem
  font-family: 'Open Sans'
  line-height: 1
  width: 20rem
  min-width: 10rem
  min-height: 5rem
  margin: 2rem
  color: #000
  background-color: #a7a1a1
  border: transparent solid  0.2rem
  border-color: #a7a1a1
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  user-select: none
  cursor: pointer
  animation: animation-button-sixth 1s linear infinite
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

@keyframes animation-button-sixth
  0%
    transform: scale(1)
    filter: brightness(100%)
  20%
    transform: scale(1.2)
    filter: brightness(120%)
  40%
    transform: scale(1.1)
    filter: brightness(100%)
  60%
    transform: scale(1.2)
    filter: brightness(150%)
  80%
    transform: scale(1.1)
    filter: brightness(100%)
  90%
    transform: scale(1.4)
    filter: brightness(120%)
  90%
    transform: scale(1)
    filter: brightness(100%)
</style>
