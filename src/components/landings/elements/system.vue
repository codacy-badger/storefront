<template>
  <section class="l-system flex flex_center" v-styler:section="$sectionData.mainStyle" :class="$sectionData.mainStyle.classes" v-bind:style="$sectionData.mainStyle.styles">
    <div class="b-system">
      <h2 class="b-system-chapter">
        <span class="b-system-chapter__text" v-html="$sectionData.h2.element.text"
        v-styler:for="{ el: $sectionData.h2.element, path: `$sectionData.h2.element`}"
        :style="$sectionData.h2.element.styles">
          Enter your text
        </span>
      </h2>
      <div class="b-system-platforms flex flex_center">
        <div class="b-system-platforms__item" v-for="(value, key) in $sectionData.platforms" :key="key">
          <VuseIcon :name="key" class="vuse-icon"></VuseIcon>
          {{ value.name }}
        </div>
      </div>
      <div class="b-system-requirements">
        <div class="b-system-requirements__table">
          <div class="b-system-requirements__table-row  flex flex_center">
            <div class="b-system-requirements__table-col">

            </div>
            <div class="b-system-requirements__table-col">
              <span class="b-system-requirements__table-chapter">
                Minimum
              </span>
            </div>
            <div class="b-system-requirements__table-col">
              <span class="b-system-requirements__table-chapter">
                Recommended
              </span>
            </div>
          </div><!--/.b-system-requirements__table-row-->
          <div class="b-system-requirements__table-row  flex flex_center">
            <div class="b-system-requirements__table-col">
              OS
            </div>
            <div class="b-system-requirements__table-col">
              Windows 7, 8, 10
            </div>
            <div class="b-system-requirements__table-col">
              Windows 7, 8, 10
            </div>
          </div><!--/.b-system-requirements__table-row-->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import * as types from '@editor/types'
import VuseIcon from '@editor/components/VuseIcon'

const Requirements = {
  os: { name: 'OS', min: types.Text, max: types.Text },
  processor: { name: 'Processor', min: types.Text, max: types.Text },
  memory: { name: 'Memory', min: types.Text, max: types.Text },
  graphics: { name: 'Graphics', min: types.Text, max: types.Text },
  directX: { name: 'Direct X', min: types.Text, max: types.Text },
  storage: { name: 'Storage', min: types.Text, max: types.Text },
  soundCard: { name: 'Sound Card', min: types.Text, max: types.Text }
}

export default {
  name: 'System',
  components: {
    VuseIcon
  },
  cover: '',
  group: 'elements',
  $schema: {
    mainStyle: types.StyleObject,
    h2: {
      element: types.Text
    },
    platforms: {
      windows: {
        name: 'Windows',
        visible: true,
        element: types.Text,
        requirements: Object.assign({}, Requirements)
      },
      apple: {
        name: 'Apple',
        visible: true,
        element: types.Text,
        requirements: Object.assign({}, Requirements)
      },
      linux: {
        name: 'Linux',
        visible: true,
        element: types.Text,
        requirements: Object.assign({}, Requirements)
      }
    }
  },
  props: {
    id: {
      type: Number, required: true
    }
  },
  methods: {

  }
}
</script>

<style lang="sass" scoped="scoped">
@import '../../../assets/sass/_flex.sass'

.l-system
  position: relative
  width: 100%
  background-position: center
  background-size: cover
  color: #000
  padding: 3rem 0 6rem
  min-height: 35rem
  &.is-editable
    resize: vertical
    overflow: hidden
.b-system
  width: 95%
  max-width: 100rem
  margin: 0 auto
  @media only screen and (max-width: 768px)
    &
      flex-wrap: wrap
      height: auto !important
  &-chapter
    font-size: 2rem
    text-align: center
    display: block
    width: 100%
    &__text
      display: inline-block
      margin: 2rem 0
  &-platforms
   justify-content: space-around
   padding: 2rem 0
   border-bottom: 0.2rem solid #333
   &__item
     font-weight: bold
.b-system-requirements
  &__table
    margin: 3rem 0 0
    &-chapter
      font-size: 1.6rem
      font-weight: bold
    &-row
      border-bottom: 0.1rem dotted #333
    &-col
      padding: 1rem
      width: 40%
      text-align: center
      &:nth-child(1)
        text-align: left
        width: 20%

</style>
