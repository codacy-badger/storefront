<template>
  <section class=""
           v-styler:section="$sectionData.mainStyle"
           :class="$sectionData.mainStyle.classes"
           v-bind:style="$sectionData.mainStyle.styles">

    <button style="margin: 20px; font-size: 20px; padding: 10px;" @click="addButton">Dat big button add button1</button>
    <component v-for="(component, index) in $sectionData.components"
               :is="component.name"
               :key="index"
               v-styler:for="{ el: $sectionData.components[index].element, path: `$sectionData.components[${index}].element` }"></component>
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
        name: 'bbb',
        element: types.Button
      }
    ]
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
      this.$section.data.components.push(this.$section.data.elements[0])
    }
  }
}
</script>
