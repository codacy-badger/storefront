<template>
    <section class="b-description-one" v-styler:section="$sectionData.mainStyle" :class="$sectionData.mainStyle.classes" v-bind:style="$sectionData.mainStyle.styles">
      <h1 class="b-description-one__title" v-for="(item, index) in $sectionData.titles" :key="index"
          v-styler:for="{ el: $sectionData.titles[index].element, path: `$sectionData.titles[${index}].element` }"
          v-html="$sectionData.titles[index].element.text"
          :style="$sectionData.titles[index].element.styles"
        ></h1>
    </section>
</template>

<script>
import * as types from '@editor/types'

export default {
  name: 'Description',
  cover: '/img/covers/description.png',
  group: 'texts',
  $schema: {
    mainStyle: types.StyleObject,
    titles: [{
      element: types.Description
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
.b-description-one
  color: #000
  font-family: Helvetica, Arial, sans-serif
  width: 100%
  position: relative
  text-align: center
  display: flex
  align-items: center
  min-height: 17rem
  &.is-editable
    // resize: vertical
    // overflow: hidden
  &__title
    width: 90%
    font-size: 1.4rem
    line-height: 1.4
    display: block
    max-width: 100rem
    margin: 0 auto
  &::selection, & ::selection
    color: #ff0
    background: #000
</style>
