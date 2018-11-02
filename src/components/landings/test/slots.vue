<template>
  <section class="temp-section"
           v-styler:section="$sectionData.mainStyle"
           :class="$sectionData.mainStyle.classes"
           v-bind:style="$sectionData.mainStyle.styles">

    <ul class="add-list">
      <li><button style="margin: 10px; font-size: 15px; padding: 5px;" @click="addButton">add button</button></li>
      <li><button style="margin: 10px; font-size: 15px; padding: 5px;" @click="addTitle">add title</button></li>
    </ul>

    <sandbox class="temp-section__sandbox" path="$sectionData.container" v-styler="$sectionData.container" v-bind:style="$sectionData.container.styles">
      <component v-for="(component, index) in $sectionData.components"
                 :is="component.name"
                 :key="index"
                 :href="$sectionData.components[index].element.href"
                 v-html="$sectionData.components[index].element.text"
                 v-bind:style="$sectionData.components[index].element.styles"
                 v-styler:for="{ el: $sectionData.components[index].element, path: `$sectionData.components[${index}].element` }"></component>
    </sandbox>
  </section>
</template>

<script>
import * as types from '@editor/types'

export default {
  name: 'bob',
  group: 'slots',
  $schema: {
    mainStyle: types.StyleObject,
    components: [],
    elements: [
      {
        name: 'PartButton',
        element: types.Button
      },
      {
        name: 'PartTitle',
        element: types.Text
      }
    ],
    container: types.StyleObject
  },
  props: {
    id: {
      type: Number, required: true
    }
  },
  data: () => ({

  }),
  created () {
  },
  updated () {
    console.log(11)
  },
  mounted () {
  },
  methods: {
    addButton () {
      console.log(this.$section.data.elements[0].element)
      this.$section.data.components.push(Object.assign({}, this.$section.data.elements[0]))
    },
    addTitle () {
      this.$section.data.components.push(Object.assign({}, this.$section.data.elements[1]))
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
