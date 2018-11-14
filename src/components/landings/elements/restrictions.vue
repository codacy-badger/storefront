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
  cover: '/img/covers/restrictions.png',
  group: 'elements',
  $schema: {
    mainStyle: types.StyleObject,
    image: types.ImageNoResize,
    restrictions: {
      'age': {
        visible: true,
        selected: { value: '0+', img: 'https://gn215.cdn.stg.gamenet.ru/0/759Ga/o_20S5qo.svg' },
        options: [
          { value: '0+', img: 'https://gn215.cdn.stg.gamenet.ru/0/759Ga/o_20S5qo.svg' },
          { value: '6+', img: 'https://gn215.cdn.stg.gamenet.ru/0/759H0/o_1KX2IR.svg' },
          { value: '12+', img: 'https://gn695.cdn.stg.gamenet.ru/0/759HF/o_DNNg8.svg' },
          { value: '18+', img: 'https://gn24.cdn.stg.gamenet.ru/0/759HU/o_1AgXj1.svg' },
          { value: '21+', img: 'https://gn822.cdn.stg.gamenet.ru/0/759Hf/o_299afp.svg' }
        ]
      },
      'pegi': {
        visible: true,
        selected: { value: '3', img: 'https://gn875.cdn.stg.gamenet.ru/0/759I0/o_13iwpA.svg' },
        options: [
          { value: '3', img: 'https://gn875.cdn.stg.gamenet.ru/0/759I0/o_13iwpA.svg' },
          { value: '7', img: 'https://gn414.cdn.stg.gamenet.ru/0/759ID/o_vuop.svg' },
          { value: '12', img: 'https://gn793.cdn.stg.gamenet.ru/0/759IR/o_1S1h6M.svg' },
          { value: '16', img: 'https://gn800.cdn.stg.gamenet.ru/0/759Il/o_ANYUX.svg' },
          { value: '18', img: 'https://gn653.cdn.stg.gamenet.ru/0/759Ix/o_Xqb9n.svg' }
        ]
      },
      'usk': {
        visible: true,
        selected: { value: '0', img: 'https://gn191.cdn.stg.gamenet.ru/0/759JH/o_1g38pS.svg' },
        options: [
          { value: '0', img: 'https://gn191.cdn.stg.gamenet.ru/0/759JH/o_1g38pS.svg' },
          { value: '6', img: 'https://gn182.cdn.stg.gamenet.ru/0/759JS/o_25hRrV.svg' },
          { value: '12', img: 'https://gn972.cdn.stg.gamenet.ru/0/759Jf/o_amDyU.svg' },
          { value: '16', img: 'https://gn972.cdn.stg.gamenet.ru/0/759Jf/o_amDyU.svg' },
          { value: '18', img: 'https://gn320.cdn.stg.gamenet.ru/0/759K2/o_x4V42.svg' }
        ]
      },
      'cero': {
        visible: true,
        selected: { value: 'All ages', img: 'https://gn773.cdn.stg.gamenet.ru/0/759KN/o_sazoN.svg' },
        options: [
          { value: 'All ages', img: 'https://gn773.cdn.stg.gamenet.ru/0/759KN/o_sazoN.svg' },
          { value: 'Ages 12 and up only', img: 'https://gn925.cdn.stg.gamenet.ru/0/759LL/o_zwWo0.svg' },
          { value: 'Ages 15 and up only', img: 'https://gn572.cdn.stg.gamenet.ru/0/759LZ/o_qfcL4.svg' },
          { value: 'Ages 17 and up only', img: 'https://gn959.cdn.stg.gamenet.ru/0/759Lq/o_FHJmm.svg' },
          { value: 'Ages 18 and up only', img: 'https://gn640.cdn.stg.gamenet.ru/0/759MA/o_4FtnT.svg' },
          { value: 'Education/Database', img: 'https://gn119.cdn.stg.gamenet.ru/0/759MN/o_18ADS5.svg' },
          { value: 'Rating pending', img: 'https://gn801.cdn.stg.gamenet.ru/0/759MZ/o_1b7UOI.svg' }
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
    // resize: vertical
    // overflow: hidden
  .is-tablet &, .is-mobile &
    flex-wrap: wrap
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
        // resize: both
        // overflow: hidden
      & img
        width: 100%
        height: 100%
.is-editable-show
  display: none
  .is-editable &
    display: inline-block

</style>
