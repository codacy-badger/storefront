<template>
    <section class="l-button-two" v-styler:section="$sectionData.mainStyle" :class="$sectionData.mainStyle.classes" v-bind:style="$sectionData.mainStyle.styles">
      <a v-for="(item, index) in $sectionData.buttons" :key="index" class="b-button-two" target="_blank"
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
  name: 'Button2',
  cover: '/img/covers/button2.png',
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
.l-button-two
  width: 100%
  position: relative
  margin: 1rem 0
  display: flex
  align-items: center
  justify-content: center
  &.is-editable
    resize: vertical
    overflow: hidden
.b-button-two
  position: relative
  font-size: 2.3rem
  font-family: Helvetica, Arial, sans-serif
  line-height: 1
  min-width: 5rem
  width: 23.9rem
  height: 6.6rem
  padding: 2rem
  color: #a6e1e1
  border: transparent solid  0
  background-color: transparent
  background-image: url(https://gn881.cdn.gamenet.ru/TY0Xv2riHu/6stmF/o_1lLdjP.png)
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
  &:hover
    filter: brightness(140%)
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
