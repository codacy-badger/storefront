<template>
  <section class="l-slogan"
    v-styler:section="$sectionData.mainStyle"
    :class="$sectionData.mainStyle.classes"
    :style="$sectionData.mainStyle.styles">
      <div v-for="(logo, index) in $sectionData.images" :key="index" class="b-slogan"
        v-styler:for="{ el: $sectionData.images[index].element, path: `$sectionData.images[${index}].element` }"
        :style="$sectionData.images[index].element.styles"
        >
          <div class="b-slogan__text"
            v-styler:for="{ el: $sectionData.images[index].text, path: `$sectionData.images[${index}].text` }"
            :style="$sectionData.images[index].text.styles"
            v-html="$sectionData.images[index].text.text"
            >
          </div>
      </div>
  </section>
</template>

<script>
import * as types from '@editor/types'

export default {
  name: 'Slogan',
  cover: '/img/covers/slogan.png',
  group: 'texts',
  $schema: {
    mainStyle: types.StyleObject,
    images: [
      {
        element: types.StyleObject,
        text: types.Text
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
.l-slogan
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
.b-slogan
  display: inline-block
  margin: 1rem auto
  display: flex
  align-items: center
  justify-content: center
  background-image: url(https://gn793.cdn.stg.gamenet.ru/0/79yeF/o_1PRuEc.png)
  background-size: contain
  background-position: center center
  background-repeat: no-repeat
  width: 54rem
  height: 16rem
  max-width: 98rem
  max-height: 90%
  .is-editable &
    // resize: vertical
    // overflow: hidden
  .is-mobile &
    margin: 1rem auto
    height: auto
  @media only screen and (max-width: 540px)
    &
      margin: 1rem auto
      height: auto
  &__text
    width: 90%
    height: auto
    font-size: 4rem
    line-height: 1.2
    color: #fff
    font-family: 'Roboto'
    text-align: center
</style>
