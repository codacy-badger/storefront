<template>
  <section class="l-restrictions flex flex_center" v-styler:section="$sectionData.mainStyle" :class="$sectionData.mainStyle.classes" v-bind:style="$sectionData.mainStyle.styles">
    <div>
      <div class="b-restrictions flex flex_center">
        <div class="b-restrictions__item"
           v-styler="$sectionData.image"
           v-for="(value, key) in $sectionData.restrictions" :key="key"
           :class="{ 'b-restrictions__item_opacity' : false === $sectionData.restrictions[key].visible }"
          >
          <div class="b-restrictions__item-img">
            <img
                 :src="$sectionData.restrictions[key].selected.img"
                 :alt="$sectionData.restrictions[key].selected.value"
                 :title="$sectionData.restrictions[key].selected.value"
              />
          </div>
          <div>
            <select class="b-restrictions__item-select is-editable-show" v-model="$sectionData.restrictions[key].selected">
              <option v-for="(option, index) in $sectionData.restrictions[key].options" :value="option" v-bind:key="index">
                {{ option.value }}
              </option>
            </select>
          </div>
          <button class="b-restrictions__item-eye controller-button is-green is-editable-show"
                  @click="$sectionData.restrictions[key].visible = !$sectionData.restrictions[key].visible"
            >
            <VuseIcon class="vuse-icon" name="eye"></VuseIcon>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import * as types from '@editor/types'
import VuseIcon from '@editor/components/VuseIcon'

export default {
  name: 'Restrictions',
  components: {
    VuseIcon
  },
  cover: '',
  group: 'elements',
  $schema: {
    mainStyle: types.StyleObject,
    image: types.Image,
    restrictions: {
      'age': {
        visible: true,
        selected: { value: '0+', img: '/img/rest/age/0.svg' },
        options: [
          { value: '0+', img: '/img/rest/age/0.svg' },
          { value: '6+', img: '/img/rest/age/6.svg' },
          { value: '12+', img: '/img/rest/age/12.svg' },
          { value: '18+', img: '/img/rest/age/18.svg' },
          { value: '21+', img: '/img/rest/age/21.svg' }
        ]
      },
      'pegi': {
        visible: true,
        selected: { value: '3', img: '/img/rest/pegi/3.svg' },
        options: [
          { value: '3', img: '/img/rest/pegi/3.svg' },
          { value: '7', img: '/img/rest/pegi/7.svg' },
          { value: '12', img: '/img/rest/pegi/12.svg' },
          { value: '16', img: '/img/rest/pegi/16.svg' },
          { value: '18', img: '/img/rest/pegi/18.svg' }
        ]
      },
      'usk': {
        visible: true,
        selected: { value: '0', img: '/img/rest/usk/USK0_neu2.svg' },
        options: [
          { value: '0', img: '/img/rest/usk/USK0_neu2.svg' },
          { value: '6', img: '/img/rest/usk/USK6_neu2.svg' },
          { value: '12', img: '/img/rest/usk/USK12_neu2.svg' },
          { value: '16', img: '/img/rest/usk/USK16_neu2.svg' },
          { value: '18', img: '/img/rest/usk/USK18_neu2.svg' }
        ]
      },
      'cero': {
        visible: true,
        selected: { value: 'All ages', img: '/img/rest/cero/CERO_A.svg' },
        options: [
          { value: 'All ages', img: '/img/rest/cero/CERO_A.svg' },
          { value: 'Ages 12 and up only', img: '/img/rest/cero/CERO_B.svg' },
          { value: 'Ages 15 and up only', img: '/img/rest/cero/CERO_C.svg' },
          { value: 'Ages 17 and up only', img: '/img/rest/cero/CERO_D.svg' },
          { value: 'Ages 18 and up only', img: '/img/rest/cero/CERO_Z.svg' },
          { value: 'Education/Database', img: '/img/rest/cero/CERO_Kyouiku_Deitabeisu.svg' },
          { value: 'Rating pending', img: '/img/rest/cero/CERO_Shin_Sa_Yo_Tei.svg' }
        ]
      }
    }
  },
  props: {
    id: {
      type: Number, required: true
    }
  }
}
</script>

<style lang="sass" scoped="scoped">
@import '../../../assets/sass/_flex.sass'

.l-restrictions
  position: relative
  width: 100%
  background-position: center
  background-size: cover
  color: #000
  padding: 3rem 0 1rem
  min-height: 12rem
  &.is-editable
    resize: vertical
    overflow: hidden
  .is-tablet &, .is-mobile &
    flex-wrap: wrap
    height: auto !important
    padding: 2rem 0
  @media only screen and (max-width: 768px)
    &
      flex-wrap: wrap
      height: auto !important

.b-restrictions
  max-width: 100rem
  margin: 0 auto
  .is-tablet &, .is-mobile &
    flex-wrap: wrap
    height: auto !important
  @media only screen and (max-width: 768px)
    &
      flex-wrap: wrap
      height: auto !important
  &__item
    position: relative
    margin: 1rem
    text-align: center
    &_opacity
      display: none
      .is-editable &
        opacity: 0.2
        display: inline-block
    &-eye
      position: absolute
      top: -2rem
      left: -2rem
      z-index: 1
    &-select
      background: $white
      color: $dark
      border: 0
      outline: 0
      width: auto
      height: 3rem
      border-radius: 3rem
      font-size: 1.4rem
      margin: 1rem auto
      padding: 0.5rem
      width: 6rem
      display: block
      & option:checked
        background-color: #333
        color: #fff
    &-img
      width: 6rem
      height: 6rem
      display: inline-block
      padding: 0 1rem 1rem 0
      .is-editable > &
        resize: both
        overflow: hidden
      & img
        width: 100%
        height: 100%
.is-editable-show
  display: none
  .is-editable &
    display: inline-block

</style>
