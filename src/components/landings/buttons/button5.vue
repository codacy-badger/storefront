<template>
    <section class="l-button-fifth" v-styler:section="$sectionData.mainStyle" :class="$sectionData.mainStyle.classes" v-bind:style="$sectionData.mainStyle.styles">
      <a v-for="(item, index) in $sectionData.buttons" :key="index" class="b-button-fifth" target="_blank"
           v-styler:index="`$sectionData.buttons[${index}].button`"
           v-html="$sectionData.buttons[index].button.text"
           :href="$sectionData.buttons[index].button.href"
           v-bind:style="$sectionData.buttons[index].button.styles"
          >
      </a>
    </section>
</template>

<script>
import * as types from '@plugins/Vuse/types'

export default {
  name: 'Button5',
  cover: '/img/covers/button2.gif',
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
.l-button-fifth
  width: 100%
  position: relative
  margin: 1rem 0
  display: flex
  align-items: center
  justify-content: center
  &.is-editable
    resize: vertical
    overflow: hidden
.b-button-fifth
  font-family: Georgia, "Times New Roman", Serif
  text-decoration: none
  font-size: 3rem
  background-color: #a7a1a1
  color: #fff
  text-transform: uppercase
  padding: 1.5rem 0 2rem 0
  width: 30rem
  cursor: pointer
  position: relative
  text-align: center
  transition: all 200ms
  display: flex
  align-items: center
  justify-content: center
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
