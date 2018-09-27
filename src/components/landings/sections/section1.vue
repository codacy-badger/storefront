<template>
    <section class="section" v-styler="$sectionData.classes" :class="$sectionData.classes">
        <div class="container">
            <div class="grid is-center">
                <div class="column" :class="gridClasses[0]" v-styler:grid="$sectionData.columns[0].grid">
                    <h2 class="section-title" v-html="$sectionData.columns[0].title" v-styler="$sectionData.columns[0].title"></h2>
                    <p class="section-paragraph" v-html="$sectionData.columns[0].content" v-styler="$sectionData.columns[0].content"></p>
                </div>
                <div class="column is-offset-screen-1" :class="gridClasses[1]" v-styler:grid="$sectionData.columns[1].grid">
                    <h2 class="section-title" v-html="$sectionData.columns[1].title" v-styler="$sectionData.columns[1].title"></h2>
                    <p class="section-paragraph" v-html="$sectionData.columns[1].content" v-styler="$sectionData.columns[1].content"></p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import * as types from '@plugins/Vuse/types'

export default {
  name: 'Section1',
  cover: 'img/covers/section1.png',
  group: 'sections',
  $schema: {
    classes: types.ClassList,
    columns: [
      {
        title: types.Title,
        content: types.Text,
        grid: {
          mobile: 0,
          desktop: 5
        }
      },
      {
        title: types.Title,
        content: types.Text,
        grid: {
          mobile: 0,
          desktop: 5
        }
      }
    ]
  },
  props: {
    id: {
      type: Number, required: true
    }
  }
}
</script>
