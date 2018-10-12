<template>
    <section class="b-title-one" v-styler:section="$sectionData.mainStyle" :class="$sectionData.mainStyle.classes" v-bind:style="$sectionData.mainStyle.styles">
      <h1 class="b-title-one__title" v-for="(item, index) in $sectionData.titles" :key="index"
          v-styler:for="{ el: $sectionData.titles[index].element, path: `$sectionData.titles[${index}].element` }"
          v-html="$sectionData.titles[index].element.text"
          :style="$sectionData.titles[index].element.styles"
        ></h1>
    </section>
</template>

<script>
import * as types from '@plugins/Vuse/types'

export default {
  name: 'Title1',
  cover: '/img/covers/title1.png',
  group: 'titles',
  $schema: {
    mainStyle: types.StyleObject,
    titles: [{
      element: types.Text
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
.b-title-one
  color: #000
  font-family: Helvetica, Arial, sans-serif
  width: 100%
  position: relative
  text-align: center
  display: flex
  align-items: center
  height: 10rem
  &.is-editable
    resize: vertical
    overflow: hidden
  &__title
    width: 100%
    font-size: 4rem
    display: block
  &::selection, & ::selection
    color: #ff0
    background: #000
</style>
