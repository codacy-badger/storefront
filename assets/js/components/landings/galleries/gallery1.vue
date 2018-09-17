<template>
  <section id="gallery1" class="pages__page pages__page_hero"  v-styler:section="$sectionData.mainStyle" :class="$sectionData.mainStyle.classes"
           v-bind:style="$sectionData.mainStyle.styles">
          <div class="pages__wrap flex flex_columns ie-height-fix">
              <div class="l-title flex__item">
                  <h1 class="l-title__title" v-styler="$sectionData.slogan[0].text" v-text="$sectionData.slogan[0].title"/>
                  <div class="l-title__subtitle" v-styler="$sectionData.slogan[1].text" v-text="$sectionData.slogan[1].title"/>
              </div>
              <div class="p-split flex__item flex flex__item_full flex_center">
                  <div class="p-split__tiles flex__item flex__item_size-2 clearfix">
                      <div class="hero-tile"
                            v-for="(item, index) in $sectionData.images"
                            v-styler:galleryItem="$sectionData.images[index]"
                            :data-index="index"
                            :key="index"
                            :gallery-one-preview="'loader__content_show'"
                            @click="onFocus(index)"
                            >
                          <div class="hero-tile__frame">
                              <img class="hero-tile__img" :src="item.preview" :alt="item.title">
                          </div>
                          <div class="hero-tile__name" v-styler:title="$sectionData.images[index].type" v-html="$sectionData.images[index].type.text">
                          </div>
                      </div>
                  </div>
                  <div class="p-split__detail flex__item flex__item_size-1 hero-detail loader">
                      <div class="loader__content" :gallery-one-stage="index" v-for="(item, index) in $sectionData.images" :key="index">
                          <div class="hero-detail__name h1"
                               v-html="$sectionData.images[index].title"
                               v-styler:title="$sectionData.images[index].title">
                          </div>
                          <uploader class="hero-detail__img" v-bind:path="'$sectionData.images[' + index + '].img[0]'" />
                          <div class="hero-detail__bio" v-styler:text="$sectionData.images[index].text" v-html="$sectionData.images[index].text">
                          </div>
                      </div>
                  </div>
              </div>
              <div class="btn-container flex__item">
                <span class="btn-container__button" @click.prevent="onClick"
                      :class="$sectionData.buttons[0].classes" :href="$sectionData.buttons[0].href" v-html="$sectionData.buttons[0].text" v-styler="$sectionData.buttons[0].button">
                </span>
              </div>
          </div>
      </section>

</template>

<script>
    import * as types from './../../../plugins/Vuse/types';
    import { galleryPreviewClick } from './../../../../js/cscripts/gallery1';

    export default {
      name: 'Gallery1',
      cover: 'img/covers/gallery1.png',
      group: 'galleries',
      $schema: {
        mainStyle: types.StyleObject,
        buttons: [
           {
               text: 'Choose character',
               href: "#",
               button: types.Button,
           },
        ],
        slogan: [
            {
                title: 'Who are you in Your Game?',
                text: types.Title,
            },
            {
                title: 'Choose your character. Choose carefully!',
                text: types.Title,
            },
        ],
        images: [
            {
                preview: [types.Image],
                type: types.Button,
                title: types.Title,
                img: [types.Image],
                text: types.Text,
            },
            {
                preview: [types.Image],
                type: types.Button,
                title: types.Title,
                img: [types.Image],
                text: types.Text,
            },
            {
                preview: [types.Image],
                type: types.Button,
                title: types.Title,
                img: [types.Image],
                text: types.Text,
            },
        ],
        index: 0
      },
      props: {
        id: {
          type: Number, required: true
        }
      },
      watch: {
          $sectionData:  {
                handler: function () {
                    setTimeout(this.bindingClickPreview(),2000);
                },
                deep: true
            }
      },
      methods: {
          onClick () {
               if (this.$builder.isEditing) return;

               const endpoint = this.$sectionData.buttons[0].href;
          },
          bindingClickPreview (index) {
              galleryPreviewClick(index);
          },
          onFocus (index) {
              this.index = index;
          }
      },
      mounted: function () {
        this.bindingClickPreview(0);
      },
      updated: function(){
        this.bindingClickPreview(this.index);
      },
    };
</script>
