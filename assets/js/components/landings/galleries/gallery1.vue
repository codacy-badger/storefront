<template>
  <section class="pages__page pages__page_hero"  v-styler:section="$sectionData.mainStyle" :class="$sectionData.mainStyle.classes"
           v-bind:style="$sectionData.mainStyle.styles">
          <div class="page-2-stain medium-hide"></div>
          <div class="pages__wrap flex flex_columns ie-height-fix">
              <div class="l-title flex__item">
                  <h1 class="l-title__title" v-styler="$sectionData.slogan[0].text" v-text="$sectionData.slogan[0].title"/>
                  <div class="l-title__subtitle" v-styler="$sectionData.slogan[1].text" v-text="$sectionData.slogan[1].title"/>
              </div>
              <div class="p-split flex__item flex">
                  <div class="p-split__tiles flex__item flex__item_size-2 clearfix">
                      <gallery-item class="hero-tile"
                            :class="{'hero-tile_active' : $sectionData.indexActive === index }"
                            v-for="(item, index) in $sectionData.images"
                            @click.prevent="onSelect(item, index)"
                            v-styler="$sectionData.images[index]"
                            :data-index="index"
                            >
                          <div class="hero-tile__frame">
                              <img class="hero-tile__img" :src="item.preview" :alt="item.title">
                              <!--uploader class="hero-tile__img" :path="$sectionData.images[index].img" :src="item.preview" :alt="item.title" /-->
                          </div>
                          <btitle class="hero-tile__name" v-styler="$sectionData.images[index].type">{{ $sectionData.images[index].type.text }}</btitle>
                      </gallery-item>
                  </div>
                  <div class="p-split__detail flex__item flex__item_size-1 hero-detail loader">
                      <div class="loader__content" v-for="(item, index) in $sectionData.images" v-show="index === $sectionData.indexActive">
                          <btitle class="hero-detail__name h1"
                               v-html="$sectionData.images[index].title"
                               v-styler="$sectionData.images[index].title">
                          </btitle>
                          <uploader class="hero-detail__img" v-bind:path="'$sectionData.images[' + index + '].img[0]'" />
                          <btitle class="hero-detail__bio" v-styler="$sectionData.images[index].text">
                              {{ $sectionData.images[index].text }}
                          </btitle>
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

    export default {
      name: 'Gallery1',
      cover: 'img/covers/gallery1.png',
      group: 'galleries',
      $schema: {
        mainStyle: types.StyleObject,
        bigImage: {},
        indexActive: 0,
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
        ]
      },
      props: {
        id: {
          type: Number, required: true
        }
      },
      methods: {
          onClick () {
               if (this.$builder.isEditing) return;

               const endpoint = this.$sectionData.buttons[0].href;
          },
          onSelect (item, index) {
              let self = this;

              this.$sectionData.indexActive = index;
          }
      },
        mounted: function () {
            let self = this;

            self.$sectionData.bigImage = this.$sectionData.images[this.index1];
        },
    };
</script>
