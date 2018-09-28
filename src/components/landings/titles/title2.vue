<template>
    <section class="b-title-two" v-styler:section="$sectionData.mainStyle" :class="$sectionData.mainStyle.classes" v-bind:style="$sectionData.mainStyle.styles">
      <h2 class="b-title-two__title" v-styler="$sectionData.title" v-html="$sectionData.title"></h2>
    </section>
</template>

<script>
import * as types from '@plugins/Vuse/types'

export default {
  name: 'Title2',
  cover: '',
  group: 'titles',
  $schema: {
    mainStyle: types.StyleObject,
    title: types.Title
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
.b-title-two
  color: #000
  font-family: Helvetica, Arial, sans-serif
  width: 100%
  position: relative
  text-align: center
  display: flex
  align-items: center
  height: 5rem
  &.is-editable
    resize: vertical
    overflow: hidden
  &__title
    width: 100%
    font-size: 2rem
    display: block
  &::selection, & ::selection
    color: #ff0
    background: #000
</style>
