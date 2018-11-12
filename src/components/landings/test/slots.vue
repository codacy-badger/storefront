<template>
  <section class="temp-section"
           v-styler:section="$sectionData.mainStyle"
           :class="$sectionData.mainStyle.classes"
           v-bind:style="$sectionData.mainStyle.styles">

    <sandbox class="temp-section__sandbox"
             ref="sandbox"
             path="$sectionData.container"
             v-styler="$sectionData.container"
             v-bind:style="$sectionData.container.styles">
      <elements-list @addEl="onAddElement"></elements-list>
      <component v-for="(component, index) in $sectionData.components"
                 :is="component.name"
                 :key="index"
                 :href="$sectionData.components[index].element.href"
                 v-html="$sectionData.components[index].element.text"
                 v-bind:style="$sectionData.components[index].element.styles"
                 v-bind:class="$sectionData.components[index].element.classes"
                 v-styler:for="{ el: $sectionData.components[index].element, path: `$sectionData.components[${index}].element` }"></component>
    </sandbox>
  </section>
</template>

<script>
import * as types from '@editor/types'

export default {
  name: 'Bob',
  group: 'slots',
  $schema: {
    mainStyle: types.StyleObject,
    components: [],
    container: types.StyleObject
  },
  props: {
    id: {
      type: Number, required: true
    }
  },
  data: () => ({

  }),
  mounted () {
  },
  updated () {
  },
  methods: {
    onAddElement (element) {
      element.element.removable = true
      this.$section.data.components.push(element)
    }
  }
}
</script>

<style lang="sass">
  .temp-section
    display: flex
    justify-content: center
    align-items: center
    width: 100%
    flex-direction: column
    &__sandbox
      min-height: 200px
  .add-list
    list-style: none
    margin: 0
    padding: 0
</style>
