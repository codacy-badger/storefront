<template>
  <section class="l-pic"
    v-styler:section="$sectionData.mainStyle"
    :class="$sectionData.mainStyle.classes"
    v-bind:style="$sectionData.mainStyle.styles">
      <div v-for="(pic, index) in $sectionData.images" :key="index" class="b-pic"
        v-styler:for="{ el: $sectionData.images[index].element, path: `$sectionData.images[${index}].element` }"
        v-bind:style="$sectionData.images[index].element.styles"
        >
      </div>
  </section>
</template>

<script>
import * as types from '@editor/types'

export default {
  name: 'Picture',
  cover: '/img/covers/image.png',
  group: 'images',
  $schema: {
    mainStyle: types.StyleObject,
    images: [
      { element: types.Image }
    ]
  },
  props: {
    id: {
      type: Number, required: true
    }
  }
}
</script>

<style lang="sass">
.l-pic
  display: flex
  align-items: center
  position: relative
  width: 100%
  background-position: center
  background-size: cover
  color: #000
  padding: 1rem
  &.is-editable
    resize: vertical
    overflow: hidden
.b-pic
  display: inline-block
  margin: 1rem auto
  text-align: center
  .is-editable &
    resize: both
    overflow: hidden

</style>
