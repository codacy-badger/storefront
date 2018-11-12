<template>
  <section class="l-socials flex flex_center" v-styler:section="$sectionData.mainStyle" :class="$sectionData.mainStyle.classes" v-bind:style="$sectionData.mainStyle.styles">
    <div class="b-socials flex flex_center">
      <div class="b-socials__item"
         v-for="(value, key) in $sectionData.socials" :key="key"
         :class="{ 'b-socials__item_opacity' : false === $sectionData.socials[key].visible }"
        >
        <a class="b-socials__item-button flex flex_center"
          :target="$sectionData.socials[key].button.target"
          :href="$sectionData.socials[key].button.href"
          :title="$sectionData.socials[key].name"
          v-styler:for="{ el: $sectionData.socials[key].button, path: `$sectionData.socials[${key}].button`}"
          :style="$sectionData.socials[key].button.styles"
          >
          <VuseIcon :name="key"></VuseIcon>
        </a>
        <button class="b-socials__item-eye controller-button is-green is-editable-show"
          @click="$sectionData.socials[key].visible = !$sectionData.socials[key].visible"
          >
          <VuseIcon class="vuse-icon" name="eye"></VuseIcon>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import * as types from '@editor/types'
import VuseIcon from '@editor/components/VuseIcon'

export default {
  name: 'Social',
  components: {
    VuseIcon
  },
  cover: '/img/covers/social.png',
  group: 'elements',
  $schema: {
    mainStyle: types.StyleObject,
    socials: {
      'facebook': {
        name: 'Facebook',
        visible: true,
        button: types.Icon
      },
      'instagram': {
        name: 'Instagram',
        visible: true,
        button: types.Icon
      },
      'vk': {
        name: 'Vk',
        visible: true,
        button: types.Icon
      },
      'twitter': {
        name: 'Twitter',
        visible: true,
        button: types.Icon
      },
      'youtube': {
        name: 'Youtube',
        visible: true,
        button: types.Icon
      },
      'kickstarter': {
        name: 'Kickstarter',
        visible: true,
        button: types.Icon
      },
      'wechat': {
        name: 'Wechat',
        visible: true,
        button: types.Icon
      }
    }
  },
  props: {
    id: {
      type: Number, required: true
    }
  },
  methods: {
    visibleSocial (key) {
      this.$sectionData.socials[key].visible = !this.$sectionData.socials[key].visible
    }
  }
}
</script>

<style lang="sass" scoped="scoped">
@import '../../../assets/sass/_flex.sass'

.l-socials
  position: relative
  width: 100%
  background-position: center
  background-size: cover
  color: #000
  padding: 0
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

.b-socials
  width: 95%
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
    &_opacity
      display: none
      .is-editable &
        opacity: 0.2
        display: inline-block
    &-button
      width: 5rem
      height: 5rem
      padding: 1rem
      border: none
      display: inline-block
      &:hover
        filter: brightness(120%)
      &:active
        filter: brightness(50%)
      &.is-editable
        // resize: both
        // overflow: hidden
      .vuse-icon
        width: 100%
        height: auto
        fill: #fff
    &-eye
      position: absolute
      top: -2rem
      left: -2rem
      z-index: 1

.is-editable-show
  display: none
  .is-editable &
    display: inline-block

</style>
