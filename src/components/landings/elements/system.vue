<template>
  <section class="l-system flex flex_center" v-styler:section="$sectionData.mainStyle" :class="$sectionData.mainStyle.classes" v-bind:style="$sectionData.mainStyle.styles">
    <div class="b-system">
      <h2 class="b-system-chapter">
        <span class="b-system-chapter__text"
          v-html="$sectionData.h2.element.text"
          v-styler:for="{ el: $sectionData.h2.element, path: `$sectionData.h2.element`}"
          :style="$sectionData.h2.element.styles
          ">
          Enter your text
        </span>
      </h2>
      <div class="b-system-platforms flex flex_center">
        <div tabs-link="tabs-link" class="b-system-platforms__item" v-for="(value, key) in $sectionData.platforms" :key="key"
             :class="{ 'b-system-platforms__item_opacity' : false === $sectionData.platforms[key].visible, 'b-system-platforms__item_active': key === $sectionData.isPlatform }">
          <div class="b-system-platforms__item__tab"
             @click="selectPlatform(key)"
            >
            <VuseIcon :name="key" class="vuse-icon"></VuseIcon>
            <span
              v-html="$sectionData.platforms[key].text.text"
              v-styler:for="{ el: $sectionData.platforms[key].text, path: `$sectionData.platforms[${key}].text`}"
              :style="$sectionData.platforms[key].text.styles"
              >
              Enter your text
            </span>
          </div>
          <button class="b-system-platforms__item__btn controller-button is-green is-editable-show" tooltip-position="top" tooltip="Show / Hide"
            @click="visiblePlatform(key)"
            >
            <VuseIcon name="eye"></VuseIcon>
          </button>
        </div>
      </div>
      <div class="b-system-requirements">
        <div class="b-system-requirements__table">
          <div tabs-content="tabs-content" v-for="(value, key) in $sectionData.platforms" v-bind:key="key"
               v-show="$sectionData.isPlatform === key && value.visible">
            <div>
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
              <div class="b-system-requirements__table-row flex flex_center"
                v-for="(v, index) in value.requirements" v-bind:key="index"
                :class="{ 'b-system-requirements__table-row_opacity' : false === $sectionData.platforms[key].requirements[index].visible }"
                >
                <div class="b-system-requirements__table-col">
                  {{ v.name }}
                </div>
                <div class="b-system-requirements__table-col"
                  v-styler:for="{ el: $sectionData.platforms[key].requirements[index].min, path: `$sectionData.platforms[${key}].requirements[${index}].min`}"
                  :style="$sectionData.platforms[key].requirements[index].min.styles"
                  v-html="$sectionData.platforms[key].requirements[index].min.text"
                  >
                </div>
                <div class="b-system-requirements__table-col"
                     v-styler:for="{ el: $sectionData.platforms[key].requirements[index].max, path: `$sectionData.platforms[${key}].requirements[${index}].max`}"
                     :style="$sectionData.platforms[key].requirements[index].max.styles"
                     v-html="$sectionData.platforms[key].requirements[index].max.text"
                  >
                </div>
                <div class="b-system-requirements__table-col b-system-requirements__table-col-eye is-editable-show">
                  <button class="b-system-requirements__table-col__btn controller-button is-green" tooltip-position="top" tooltip="Show / Hide"
                     @click="$sectionData.platforms[key].requirements[index].visible = !$sectionData.platforms[key].requirements[index].visible"
                    >
                    <VuseIcon name="eye"></VuseIcon>
                  </button>
                </div>
              </div><!--/.b-system-requirements__table-row-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import * as types from '@editor/types'
import VuseIcon from '@editor/components/VuseIcon'

const Requirements = [
  { name: 'OS', min: types.Text, max: types.Text, visible: true },
  { name: 'Processor', min: types.Text, max: types.Text, visible: true },
  { name: 'Memory', min: types.Text, max: types.Text, visible: true },
  { name: 'Graphics', min: types.Text, max: types.Text, visible: true },
  { name: 'Direct X', min: types.Text, max: types.Text, visible: true },
  { name: 'Storage', min: types.Text, max: types.Text, visible: true },
  { name: 'Sound Card', min: types.Text, max: types.Text, visible: true }
]

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
      'windows': {
        name: 'Windows',
        visible: true,
        element: types.Text,
        requirements: Requirements.slice(),
        button: types.Button,
        text: types.Text,
        min: types.Text,
        rec: types.Text
      },
      'apple': {
        name: 'Apple',
        visible: true,
        element: types.Text,
        requirements: Requirements.slice(),
        button: types.Button,
        text: types.Text,
        min: types.Text,
        rec: types.Text
      },
      'linux': {
        name: 'Linux',
        visible: true,
        element: types.Text,
        requirements: Requirements.slice(),
        button: types.Button,
        text: types.Text,
        min: types.Text,
        rec: types.Text
      }
    },
    isPlatform: null
  },
  props: {
    id: {
      type: Number, required: true
    }
  },
  methods: {
    selectPlatform (key) {
      if (!this.$sectionData.platforms[key].visible) {
        return
      }

      this.$sectionData.isPlatform = key
    },
    visiblePlatform (key) {
      this.$sectionData.platforms[key].visible = !this.$sectionData.platforms[key].visible
      this.selectPlatform(key)
    }
  },
  mounted () {
    this.selectPlatform('apple')
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
     transition: all 200ms
     position: relative
     cursor: pointer
     opacity: 1
     border: dotted transparent 0.1rem
     &_opacity
       display: none
       .is-editable &
         opacity: 0.2
         display: block
     &__tab
       border: dotted transparent 0.1rem
       padding: 0.5rem 1rem
       z-index: 0
       position: relative
       max-width: 20rem
       text-overflow: ellipsis
       white-space: nowrap
       overflow: hidden
       .is-mobile &
         max-width: 12rem
       @media only screen and (max-width: 540px)
         &
           max-width: 12rem
       & .vuse-icon
         position: relative
         top: -0.1rem
         left: -0.2rem
     &:hover, &_active
       border: dotted #333 0.1rem
     &__btn
       position: absolute
       top: -2rem
       left: -2rem
       z-index: 1

.b-system-requirements
  &__table
    margin: 3rem 0 0
    &-chapter
      font-size: 1.6rem
      font-weight: bold
    &-row
      border-bottom: 0.1rem dotted #333
      &_opacity
        display: none
        .is-editable &
          opacity: 0.2
          display: flex
    &-col
      padding: 1rem
      width: 38%
      text-align: center
      &:nth-child(1)
        text-align: left
        width: 20%
      &-eye
        width: 3rem

.is-editable-show
  display: none
  .is-editable &
    display: inline-block

</style>
