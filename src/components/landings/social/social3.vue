<template>
    <section class="social" v-styler:section="$sectionData.classes" :class="$sectionData.classes">
        <div class="container">
            <div class="grid">
                <div class="row is-center">
                    <div class="column is-12 is-desktop-7">
                        <h3 class="social-title" v-html="$sectionData.title" v-styler="$sectionData.title"></h3>
                    </div>
                    <div class="column is-12 is-desktop-7">
                        <p class="social-content" v-html="$sectionData.content" v-styler="$sectionData.content"></p>
                    </div>
                </div>
                <div class="row is-center">
                    <div class="column is-desktop-2" v-for="(logo, index) in $sectionData.images" :key="index">
                        <uploader class="social-logo" :path="`$sectionData.images[${index}]`"></uploader>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import * as types from './../../../plugins/Vuse/types'

export default {
  name: 'Social3',
  cover: '/img/covers/social3.png',
  group: 'social',
  $schema: {
    classes: types.ClassList,
    title: types.Title,
    content: types.Text,
    images: [
      types.Logo,
      types.Logo,
      types.Logo
    ]
  },
  props: {
    id: {
      type: Number, required: true
    }
  }
}
</script>
