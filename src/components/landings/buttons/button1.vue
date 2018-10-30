<template>
    <section class="l-button-one" v-styler:section="$sectionData.mainStyle" :class="$sectionData.mainStyle.classes" v-bind:style="$sectionData.mainStyle.styles">
      <div class="l-button-one__container" v-bind:style="{ 'justify-content': $sectionData.container.hSelected.value, 'align-items': $sectionData.container.vSelected.value }">
        <div class="container-edit">
          <span>horizontal: </span>
          <select v-model=$sectionData.container.hSelected>
            <option v-for="(align, index) in $sectionData.container.horizontal" :key="index" :value="align">
              {{align.name}}
            </option>
          </select>
          <span>vertical: </span>
          <select v-model=$sectionData.container.vSelected>
            <option v-for="(align, index) in $sectionData.container.vertical" :key="index" :value="align">
              {{align.name}}
            </option>
          </select>
        </div>
        <a v-for="(item, index) in $sectionData.buttons" :key="index" class="b-button-one is-editable"
           v-bind:class="$sectionData.buttons[index].element.classes"
           @click.prevent="openLink(item)" :target="$sectionData.buttons[index].element.target"
           v-styler:for="{ el: $sectionData.buttons[index].element, path: `$sectionData.buttons[${index}].element` }"
           v-html="$sectionData.buttons[index].element.text"
           :href="$sectionData.buttons[index].element.href"
           v-bind:style="$sectionData.buttons[index].element.styles"
        >
        </a>
      </div>
    </section>
</template>

<script>
import * as types from '@editor/types'

export default {
  name: 'Button1',
  cover: '/img/covers/button1.png',
  group: 'buttons',
  $schema: {
    mainStyle: types.StyleObject,
    buttons: [{
      element: types.Button
    }],
    container: {
      vSelected: { name: 'center', value: 'center' },
      hSelected: { name: 'center', value: 'center' },
      vertical: [
        { name: 'top', value: 'flex-start' },
        { name: 'center', value: 'center' },
        { name: 'bottom', value: 'flex-end' }
      ],
      horizontal: [
        { name: 'left', value: 'flex-start' },
        { name: 'center', value: 'center' },
        { name: 'right', value: 'flex-end' }
      ]
    }
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
.l-button-one
  width: 100%
  position: relative
  margin: 0
  display: flex
  align-items: center
  justify-content: center
  &.is-editable
    resize: vertical
    overflow: hidden
  &__container
    display: flex
    max-width: 100rem
    position: relative
    width: 100%
    height: 100%
    .is-editable &
      outline: 1px dashed $green
      outline-offset: -1px
.b-button-one
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
  border: transparent solid  0.2rem
  border-color: #a7a1a1
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  user-select: none
  cursor: pointer
  &:before
    content: ''
    position: absolute
    display: block
    border: transparent solid  0.2rem
    border-color: inherit
    top: -0.7rem
    right: -0.7rem
    bottom: -0.7rem
    left: -0.7rem
    pointer-events: none
    transition: all 200ms
    backface-visibility: hidden
    z-index: -1
  &:hover
    filter: brightness(120%)
    &:before
      border: inherit solid  0.2rem
      top: 0
      right: 0
      bottom: 0
      left: 0
  &:active
    filter: brightness(50%)
.container-edit
  display: none
  position: absolute
  top: 0
  right: 0
  padding: 10px 0 10px 10px
  background: $dark
  color: #ffffff
  border-radius: 4px
  select
    margin-right: 10px
  .is-editable &
    display: block
</style>
