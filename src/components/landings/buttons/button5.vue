<template>
    <section class="l-button-fifth force-polyfill" v-styler:section="$sectionData.mainStyle" :class="$sectionData.mainStyle.classes" v-bind:style="$sectionData.mainStyle.styles">
      <a v-for="(item, index) in $sectionData.buttons" :key="index" class="b-button-fifth force-polyfill"
           v-styler:for="{ el: $sectionData.buttons[index].element, path:`$sectionData.buttons[${index}].element` }"
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
import ResizePolyfill from 'resize-polyfill'

export default {
  name: 'Button5',
  cover: '/img/covers/button2.gif',
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
  },
  mounted () {
    let el = document.getElementsByClassName('force-polyfill')
    ResizePolyfill(el)
  }
}
</script>

<style lang="sass" scoped>
.l-button-fifth
  width: 100%
  position: relative
  margin: 0
  display: flex
  align-items: center
  justify-content: center
  &.is-editable
    resize: vertical
    overflow: hidden
.b-button-fifth
  font-family: 'Open Sans'
  text-decoration: none
  font-size: 3rem
  background-color: #a7a1a1
  color: #fff
  padding: 1.5rem 0 2rem 0
  width: 30rem
  margin: 2rem
  cursor: pointer
  position: relative
  text-align: center
  transition: all 200ms
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  transition: all 200ms
  &.is-editable
    resize: both
    overflow: hidden
  &:before, &:after
    box-sizing: border-box
    content: ''
    position: absolute
    width: 100%
    height: 100%
  &
    transition: color 0.25s
  &:before, &:after
    border: 0.3rem solid transparent
    width: 0
    height: 0
  &:before
    top: 0
    left: 0
  &:after
    bottom: 0
    right: 0
  &:hover
    filter: brightness(120%)
  &:hover::before, &:hover::after
    width: 100%
    height: 100%
  &:hover::before
    border-top-color: #fff
    border-right-color: #fff
    transition: width 0.25s ease-out, height 0.25s ease-out 0.25s
  &:hover::after
    border-bottom-color: #fff
    border-left-color: #fff
    transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s, height 0.25s ease-out 0.75s

</style>
