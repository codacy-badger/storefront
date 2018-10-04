<template>
  <section class="l-logo"
           v-styler:section="$sectionData.mainStyle"
           :class="$sectionData.mainStyle.classes"
           v-bind:style="$sectionData.mainStyle.styles">
    <uploader class="b-logo" path="$sectionData.logos[0].path"
              :title="$sectionData.logos[0].alt" :alt="$sectionData.logos[0].alt"></uploader>
  </section>
</template>

<script>
import * as types from '@plugins/Vuse/types'

export default {
  name: 'Logo',
  cover: '/img/covers/layout1.png',
  group: 'elements',
  $schema: {
    mainStyle: types.StyleObject,
    logos: [
      {
        path: 'https://gn616.cdn.gamenet.ru/TY0Xv2riHu/6nOTs/o_1My2mo.png',
        alt: 'Default Logo',
        logo: types.Logo
      }
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
  display: block
  margin: 2rem auto 0
  max-width: 80%
  @media only screen and (max-width: 540px)
    &
      margin: 1rem auto
</style>
