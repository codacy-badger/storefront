<template>
    <section class="l-delimiter" v-styler:section="$sectionData.mainStyle" :class="$sectionData.mainStyle.classes" v-bind:style="$sectionData.mainStyle.styles">
    </section>
</template>

<script>
import * as types from '@plugins/Vuse/types'

export default {
  name: 'Delimiter',
  cover: '/img/covers/button.png',
  group: 'elements',
  $schema: {
    mainStyle: types.StyleObject
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
.l-delimiter
  width: 100%
  position: relative
  padding: 1rem 0
  display: flex
  align-items: center
  justify-content: center
  min-height: 1rem
  &.is-editable
    resize: vertical
    overflow: hidden
</style>
