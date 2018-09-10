<template>
  <section class="pages__page pages__page_hero"  v-styler:section="$sectionData.classes" :class="$sectionData.classes">
          <div class="page-2-stain medium-hide"></div>
          <div class="pages__wrap flex flex_columns ie-height-fix">
              <div class="l-title flex__item">
                  <h1 class="l-title__title" v-styler="$sectionData.slogan[0].text" v-text="$sectionData.slogan[0].title"/>
                  <div class="l-title__subtitle" v-styler="$sectionData.slogan[1].text" v-text="$sectionData.slogan[1].title"/>
              </div>
              <div class="p-split flex__item flex flex_center">
                  <div class="p-split__tiles flex__item flex__item_size-2 clearfix">
                      <gallery-item class="hero-tile"
                            :class="{'hero-tile_active' : $sectionData.indexActive == index }"
                            v-for="(item, index) in $sectionData.images"
                            @click.prevent="onSelect(item, index)"
                            v-styler="$sectionData.images[index]"
                            :data-index="index"
                            >
                          <div class="hero-tile__frame">
                              <img class="hero-tile__img" :src="item.preview" :alt="item.title">
                          </div>
                          <btitle class="hero-tile__name" v-styler="$sectionData.images[index].names">{{ $sectionData.images[index].title }}</btitle>
                      </gallery-item>
                  </div>
                  <div class="p-split__detail flex__item flex__item_size-1 hero-detail loader">
                      <div class="loader__content" v-for="(item, index) in $sectionData.images" v-if="index == $sectionData.indexActive">
                          <btitle class="hero-detail__name h1" v-styler="$sectionData.images[index].names">{{ $sectionData.images[index].title }}</btitle>
                          <div class="hero-detail__img" :style="{ 'backgroundImage': 'url(' + item.image + ')'}"></div>
                          <btitle class="hero-detail__bio" v-styler="$sectionData.images[index].texts">{{ $sectionData.images[index].text }}</btitle>
                      </div>
                  </div>
              </div>
              <div class="btn-container flex__item">
                <span class="btn-container__button" @click.prevent="onClick" :class="$sectionData.buttons[0].classes" :href="$sectionData.buttons[0].href" v-html="$sectionData.buttons[0].text" v-styler="$sectionData.buttons[0].button">
                </span>
              </div>
          </div>
      </section>

</template>

<script>
    import * as types from './../../../plugins/Vuse/types';

    export default {
      name: 'Gallery1',      cover: 'img/covers/gallery1.png',
      group: 'galleries',
      $schema: {
        classes: types.ClassList,
        bigImage: {
            title: '',
            text: '',
            image: '',
        },
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
                title: types.Title,
                names: '$sectionData.images[0].title',
                text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
                texts: '$sectionData.images[0].text',
                preview: 'https://gn261.cdn.gamenet.ru/TY0Xv2riHu/6oAY0/o_2BUAMA.png',
                image: 'https://gn419.cdn.gamenet.ru/TY0Xv2riHu/6oAYY/o_1x1wuT.png',
            },
            {
                title: types.Title,
                names: '$sectionData.images[1].title',
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                texts: '$sectionData.images[1].text',
                preview: 'https://gn437.cdn.gamenet.ru/TY0Xv2riHu/6oAyS/o_VTkSB.png',
                image: 'https://gn530.cdn.gamenet.ru/TY0Xv2riHu/6oAyH/o_Qg1IO.png',
            },
            {
                title: types.Title,
                names: '$sectionData.images[2].title',
                text: 'Text for Boy Second',
                texts: '$sectionData.images[2].text',
                preview: 'https://gn261.cdn.gamenet.ru/TY0Xv2riHu/6oAY0/o_2BUAMA.png',
                image: 'https://gn419.cdn.gamenet.ru/TY0Xv2riHu/6oAYY/o_1x1wuT.png',
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

              self.$sectionData.indexActive = index;
          }
      },
      mounted: function(){
          let self = this;

          self.$sectionData.indexActive = 0;

          console.log(types);
      },
    };
</script>
