<template>
    <section class="l-button-fourth" v-styler:section="$sectionData.mainStyle" :class="$sectionData.mainStyle.classes" v-bind:style="$sectionData.mainStyle.styles">
      <a v-for="(item, index) in $sectionData.buttons" :key="index" class="b-button-fourth" target="_blank"
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
  name: 'Button4',
  cover: './../img/covers/button4.png',
  group: 'buttons',
  $schema: {
    mainStyle: types.StyleObject,
    buttons: [{
      text: 'Download',
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
.l-button-fourth
  width: 100%
  position: relative
  margin: 1rem 0
  display: flex
  align-items: center
  justify-content: center
  &.is-editable
    resize: vertical
    overflow: hidden
.b-button-fourth
  position: relative
  font-size: 2.3rem
  font-family: Helvetica, Arial, sans-serif
  line-height: 1
  min-width: 5rem
  padding: 2rem
  margin: 0 auto
  border: transparent solid  0
  background-color: transparent
  background-repeat: no-repeat
  background-position: center center
  background-size: cover
  text-transform: uppercase
  user-select: none
  cursor: pointer
  display: flex
  align-items: center
  justify-content: center
  transition: all 200ms
  color: #000
  width: 55rem
  height: 10rem
  background-image: url(https://gn241.cdn.gamenet.ru/TY0Xv2riHu/6su7Z/o_hxR9B.png)
  &:hover
    filter: brightness(140%)
  &:active
    filter: brightness(50%)
  &.is-editable
    resize: both
    overflow: hidden
@media only screen and (max-width: 768px)
  &
    font-size: 2rem
    width: 27rem
    height: 6rem
</style>
