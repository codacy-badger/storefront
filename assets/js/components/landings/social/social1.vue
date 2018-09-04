<template>
  <section class="social" v-styler:section="$sectionData.classes" :class="$sectionData.classes">
      <div class="container">
        <div class="grid is-center">
          <div class="column is-desktop-2 social-item">
            <h6 class="social-number" v-html="$sectionData.columns[0].content" v-styler="$sectionData.columns[0].content"></h6><b class="social-keyword" v-html="$sectionData.columns[0].title" v-styler="$sectionData.columns[0].title"></b>
          </div>
          <div class="column is-desktop-2 social-item">
            <h6 class="social-number" v-html="$sectionData.columns[1].content" v-styler="$sectionData.columns[1].content"></h6><b class="social-keyword" v-html="$sectionData.columns[1].title" v-styler="$sectionData.columns[1].title"></b>
          </div>
          <div class="column is-desktop-2 social-item">
            <h6 class="social-number" v-html="$sectionData.columns[2].content" v-styler="$sectionData.columns[2].content"></h6><b class="social-keyword" v-html="$sectionData.columns[2].title" v-styler="$sectionData.columns[2].title"></b>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
    import * as types from './../../../plugins/Vuse/types';

    export default {
      name: 'Social1',
      cover: 'img/covers/social1.png',
      group: 'social',
      $schema: {
        classes: types.ClassList,
        columns: [
          {
            title: types.Title,
            content: Number
          }, {
            title: types.Title,
            content: Number
          }, {
            title: types.Title,
            content: Number
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
