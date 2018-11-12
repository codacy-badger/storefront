<template>
    <section class="l-button" v-styler:section="$sectionData.mainStyle" :class="$sectionData.mainStyle.classes" v-bind:style="$sectionData.mainStyle.styles">
      <a v-for="(item, index) in $sectionData.buttons" :key="index" class="b-button is-editable"
           v-bind:class="$sectionData.buttons[index].element.classes"
           @click.prevent="openLink(item)" :target="$sectionData.buttons[index].element.target"
           v-styler:for="{ el: $sectionData.buttons[index].element, path: `$sectionData.buttons[${index}].element` }"
           v-html="$sectionData.buttons[index].element.text"
           :href="$sectionData.buttons[index].element.href"
           v-bind:style="$sectionData.buttons[index].element.styles"
          >
      </a>
    </section>
</template>

<script>
import * as types from '@editor/types'

export default {
  name: 'Button',
  cover: '/img/covers/button1.png',
  group: 'buttons',
  $schema: {
    mainStyle: types.StyleObject,
    buttons: [{
      element: types.Button
    }]
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  methods: {
    openLink (el) {
      if (this.$builder.isEditing) return

      if (!el) {
        return
      }

      const href = el.href

      if (el && undefined !== href) {
        window.open(href)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.l-button
  width: 100%
  position: relative
  margin: 0
  display: flex
  align-items: center
  justify-content: center
  &.is-editable
    // resize: vertical
    // overflow: hidden
.b-button
  position: relative
  font-size: 3rem
  font-family: 'Open Sans'
  line-height: 1
  width: 20rem
  min-width: 10rem
  min-height: 5rem
  margin: 2rem
  color: #000
  background-color: #a7a1a1
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  user-select: none
  cursor: pointer
  transition: background-color 200ms
  &:hover
    filter: brightness(120%)
  &:active
    filter: brightness(50%)
  &.is-editable
    // resize: both
    // overflow: hidden

</style>
