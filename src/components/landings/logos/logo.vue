<template>
  <section class="l-logo"
    v-styler:section="$sectionData.mainStyle"
    :class="$sectionData.mainStyle.classes"
    v-bind:style="$sectionData.mainStyle.styles">
      <div v-for="(logo, index) in $sectionData.images" :key="index" class="b-logo">
        <uploader class="b-logo__img" :path="`$sectionData.images[${index}].element`"
          v-styler:for="{ el: $sectionData.images[index].element, path: `$sectionData.images[${index}].element` }"
          v-bind:style="$sectionData.images[index].element.styles"
          ></uploader>
      </div>
  </section>
</template>

<script>
import * as types from '@editor/types'

export default {
  name: 'Logo',
  cover: '/img/covers/logo1.png',
  group: 'logos',
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
.l-logo
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
.b-logo
  display: inline-block
  margin: 1rem auto
  text-align: center
  &__img
    min-width: 5rem
    height: 100%
    padding: 1rem
    .is-editable &
      resize: both
      overflow: hidden
    .is-mobile &
      margin: 1rem auto
      height: auto
    @media only screen and (max-width: 540px)
      &
        margin: 1rem auto
        height: auto
    > img
      width: 100%
      display: inline-block
      max-height: 100%
      @media only screen and (max-width: 540px)
        &
          height: auto

</style>
