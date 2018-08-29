<template>
    <section class="social" v-styler:section="$sectionData.classes" :class="$sectionData.classes">
        <div class="container">
            <div class="grid">
                <div class="row is-center">
                    <div class="column is-desktop-6">
                        <p class="social-quote" v-html="$sectionData.content" v-styler="$sectionData.content"></p>
                    </div>
                </div>
                <div class="row is-center">
                    <div class="column is-desktop-2">
                        <div class="user is-alt">
                            <uploader class="user-avatar" path="$sectionData.images[0]"></uploader>
                            <div class="user-data">
                                <h4 class="user-name">Ahmed</h4><span class="user-caption">SEO at Baianat</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { types } from 'vuse';

    export default {
      name: 'Social2',
      cover: 'img/covers/social2.png',
      group: 'social',
      $schema: {
        classes: types.ClassList,
        content: types.Text,
        images: [types.Avatar]
      },
      props: {
        id: {
          type: Number,
          required: true
        }
      }
    };
</script>
