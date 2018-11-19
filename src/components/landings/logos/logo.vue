<template>
  <section class="l-logo"
    v-styler:section="$sectionData.mainStyle"
    :class="$sectionData.mainStyle.classes"
    :style="$sectionData.mainStyle.styles">
      <div v-for="(logo, index) in $sectionData.images" :key="index" class="b-logo"
        v-styler:for="{ el: $sectionData.images[index].element, path: `$sectionData.images[${index}].element` }"
        :style="$sectionData.images[index].element.styles"
        >
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
      { element: types.Logo }
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
    // resize: vertical
    // overflow: hidden
.b-logo
  display: inline-block
  margin: 1rem auto
  text-align: center
  width: 20rem
  height: 20rem
  .is-editable &
    // resize: both
    // overflow: hidden
  .is-mobile &
    margin: 1rem auto
    height: auto
  @media only screen and (max-width: 540px)
    &
      margin: 1rem auto
      height: auto

</style>
