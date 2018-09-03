<template>
  <section class="header" v-styler="$sectionData.classes" :class="$sectionData.classes">
      <div class="container">
        <div class="grid">
          <div class="column is-desktop-6 is-offset-screen-3 add-center-horizontal add-padding add-text-center">
            <h3 class="header-title" v-html="$sectionData.title" v-styler="$sectionData.title"></h3>
            <p class="header-content" v-html="$sectionData.content" v-styler="$sectionData.content"></p>
            <a class="button" :class="$sectionData.button.classes" :href="$sectionData.button.href" v-html="$sectionData.button.text" v-styler="$sectionData.button"></a>
          </div>
          <div class="column is-desktop-8 is-offset-screen-2">
            <uploader class="header-image" path="$sectionData.images[0]"></uploader>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
    import { types } from 'vuse';

    export default {
      name: 'Hero2',
      cover: 'img/covers/hero2.png',
      group: 'hero',
      $schema: {
        title: types.Title,
        content: types.Text,
        images: [types.Image],
        button: types.Button,
        classes: types.ClassList
      },
      props: {
        id: {
          type: Number,
          required: true
        }
      }
    };
</script>
