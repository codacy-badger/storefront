<template>
  <section class="section" v-styler:section="$sectionData.classes" :class="$sectionData.classes">
      <div class="container">
        <div class="grid is-center">
          <div class="column" :class="gridClasses[0]" v-styler="$sectionData.columns[0].grid">
            <h2 class="section-title" v-html="$sectionData.columns[0].title" v-styler="$sectionData.columns[0].title"></h2>
            <p class="section-paragraph" v-html="$sectionData.columns[0].content" v-styler="$sectionData.columns[0].content"></p>
          </div>
          <div class="column" :class="gridClasses[1]" v-styler="$sectionData.columns[1].grid">
            <h2 class="section-title" v-html="$sectionData.columns[1].title" v-styler="$sectionData.columns[1].title"></h2>
            <p class="section-paragraph" v-html="$sectionData.columns[1].content" v-styler="$sectionData.columns[1].content"></p>
          </div>
          <div class="column" :class="gridClasses[2]" v-styler="$sectionData.columns[2].grid">
            <h2 class="section-title" v-html="$sectionData.columns[2].title" v-styler="$sectionData.columns[2].title"></h2>
            <p class="section-paragraph" v-html="$sectionData.columns[2].content" v-styler="$sectionData.columns[2].content"></p>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
    import * as types from './../../../plugins/Vuse/types';

    export default {
      name: 'Section3',
      cover: 'img/covers/section3.png',
      group: 'Layouts',
      $schema: {
        classes: types.ClassList,
        columns: [
          {
            title: types.Title,
            content: types.Text,
            grid: types.Grid
          }, {
            title: types.Title,
            content: types.Text,
            grid: types.Grid
          }, {
            title: types.Title,
            content: types.Text,
            grid: types.Grid
          }
        ]
      },
      props: {
        id: {
          type: Number, required: true
        }
      }
    };
</script>
