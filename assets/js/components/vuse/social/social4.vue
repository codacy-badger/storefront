<template>
    <section class="social" v-styler:section="$sectionData.classes" :class="$sectionData.classes">
        <div class="container">
            <div class="grid">
                <div class="row is-center">
                    <div class="column is-12">
                        <h3 class="social-title" v-html="$sectionData.title" v-styler="$sectionData.title"></h3>
                    </div>
                </div>
                <div class="row is-center">
                    <div class="column is-12 is-desktop-4">
                        <p v-html="$sectionData.columns[0].content" v-styler="$sectionData.columns[0].content"></p>
                        <div class="user">
                            <uploader class="user-avatar" path="$sectionData.images[0]"></uploader>
                            <div class="user-data">
                                <h4 class="user-name">Ahmed</h4><span class="user-caption">SEO at Baianat</span>
                            </div>
                        </div>
                    </div>
                    <div class="column is-12 is-desktop-4">
                        <p v-html="$sectionData.columns[1].content" v-styler:text="$sectionData.columns[1].content"></p>
                        <div class="user">
                            <uploader class="user-avatar" path="$sectionData.images[1]"></uploader>
                            <div class="user-data">
                                <h4 class="user-name">Ahmed</h4><span class="user-caption">SEO at Baianat</span>
                            </div>
                        </div>
                    </div>
                    <div class="column is-12 is-desktop-4">
                        <p v-html="$sectionData.columns[2].content" v-styler:text="$sectionData.columns[2].content"></p>
                        <div class="user">
                            <uploader class="user-avatar" path="$sectionData.images[2]"></uploader>
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
      name: 'Social4',
      cover: 'img/covers/social4.png',
      group: 'social',
      $schema: {
        classes: [types.ClassList],
        title: types.Title,
        columns: [
          { content: types.Text },
          { content: types.Text },
          { content: types.Text }
        ],
        images: [
          types.Avatar,
          types.Avatar,
          types.Avatar
        ]
      },
      props: {
        id: {
          type: Number, required: true
        }
      }
    };
</script>
