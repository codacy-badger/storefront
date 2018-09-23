<template>
  <section id="gallery2" class="pages__page pages__page_videos" v-styler:section="$sectionData.mainStyle" :class="$sectionData.mainStyle.classes" v-bind:style="$sectionData.mainStyle.styles">
      <div class="pages__bg"></div>
      <div class="pages__wrap">
        <div class="l-title">
          <h1 class="l-title__title" v-styler="$sectionData.slogan.type" v-text="$sectionData.slogan.text"></h1>
        </div>
        <div class="p-video flex flex_center flex_wrap">
          <div class="p-video__item-wrap"
            v-for="(item, index) in $sectionData.images"
            v-styler:galleryItem="$sectionData.images[index]"
            :data-index="index"
            :key="index"
          >
            <div class="p-video__item-content">
              <img class="p-video__img ie-object-fit" :src="$sectionData.images[index].preview" :alt="$sectionData.images[index].title">
              <!--<a href="https://www.youtube.com/embed/dqHeutdSSyM" data-bind="ga: ['video', 'play_1', 'dqHeutdSSyM']" class="p-video__link js-popup-video"></a>-->
              <div class="p-video__text"
                v-styler:index="`$sectionData.images[${index}].label`"
                v-html="$sectionData.images[index].label"
                >
              </div>
            </div>
          </div>
        </div>
        <div class="btn-container">
          <span class="btn-container__button">
            Начать игру
          </span>
        </div>
      </div>
  </section>
</template>

<script>
import * as types from './../../../plugins/Vuse/types'
import { galleryPreviewClick } from './../../../cscripts/gallery1'

export default {
  name: 'Gallery2',
  cover: 'img/covers/gallery1.png',
  group: 'galleries',
  $schema: {
    mainStyle: types.StyleObject,
    button: types.Button,
    slogan: {
      text: 'Title',
      type: types.Title
    },
    images: [
      {
        preview: [types.Image],
        label: types.Title,
        title: types.Title,
        img: [types.Image],
        text: types.Text
      },
      {
        preview: [types.Image],
        label: types.Title,
        title: types.Title,
        img: [types.Image],
        text: types.Text
      },
      {
        preview: [types.Image],
        label: types.Title,
        title: types.Title,
        img: [types.Image],
        text: types.Text
      },
      {
        preview: [types.Image],
        label: types.Title,
        title: types.Title,
        img: [types.Image],
        text: types.Text
      },
      {
        preview: [types.Image],
        label: types.Title,
        title: types.Title,
        img: [types.Image],
        text: types.Text
      },
      {
        preview: [types.Image],
        label: types.Title,
        title: types.Title,
        img: [types.Image],
        text: types.Text
      }
    ],
    index: 0
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  watch: {
    $sectionData: {
      handler: function () {
        setTimeout(this.bindingClickPreview(), 2000)
      },
      deep: true
    }
  },
  methods: {
    bindingClickPreview (index) {
      galleryPreviewClick(index)
    },
    onFocus (index) {
      this.index = index
    }
  },
  mounted: function () {
    this.bindingClickPreview(0)
  },
  updated: function () {
    this.bindingClickPreview(this.index)
  }
}
</script>

<style lang="sass" scoped="scoped">
.l-title
  text-align: center
  margin-bottom: 2rem
.l-title__title
  margin-bottom: 0.25rem
  font-size: 4rem
.p-video__subtitle
  margin-bottom: 0
  font-weight: 400
.p-video
  margin-bottom: 1rem
  margin-right: -2rem
.p-video__item-wrap
  width: 20%
  margin: 1rem
  &.is-editable
    resize: both
    overflow: hidden
.p-video__item-wrap_size-big
  width: 45%
.p-video__item-wrap_size-small
  width: 20%
.p-video__item-content
  position: relative
  height: 20rem
  background-color: #fff
  background-position: center
  background-size: cover
  overflow: hidden
  pointer-events: none
.p-video__item-content:hover .p-video__link
  background: -webkit-linear-gradient(315deg, rgba(227, 223, 255, 0.3) 0%, rgba(23, 40, 125, 0.3) 100%)
  background: linear-gradient(135deg, rgba(227, 223, 255, 0.3) 0%, rgba(23, 40, 125, 0.3) 100%)
.p-video__item-content:hover .p-video__link:before
  -webkit-transform: scale(1) rotate(-120deg)
  transform: scale(1) rotate(-120deg)
.p-video__item-wrap .p-video__item-content .p-video__text,
.p-video__item-content:hover .p-video__text
  opacity: 1
.p-video__link
  position: relative
  display: block
  width: 100%
  height: 100%
  float: left
  background: -webkit-linear-gradient(315deg, rgba(65, 63, 82, 0.4) 0%, rgba(28, 13, 142, 0.4) 100%)
  background: linear-gradient(135deg, rgba(65, 63, 82, 0.4) 0%, rgba(28, 13, 142, 0.4) 100%)
.p-video__link:before, .p-video__link:after
  content: ''
  position: absolute
  top: 50%
  left: 50%
.p-video__link:before
  margin: -43px 0 0 -43px
  width: 86px
  height: 86px
  -webkit-transform: scale(0.9)
  transform: scale(0.9)
  -webkit-transition: all 200ms
  transition: all 200ms
  background-image: url(https://gn897.cdn.gamenet.ru/TY0Xv2riHu/6u2ah/o_o01QL.png)
.p-video__link:after
  margin: -14px 0 0 -14px
  width: 28px
  height: 28px
  background-image: url(https://gn295.cdn.gamenet.ru/TY0Xv2riHu/6u2as/o_1MFnq3.png)
.p-video__text
  position: absolute
  bottom: 1.5rem
  opacity: 0
  width: 100%
  text-align: center
  -webkit-transition: 200ms opacity
  transition: 200ms opacity
  pointer-events: none
  color: #000
  z-index: 100
.p-video__img
  position: absolute
  top: 0
  left: 0
  width: 100%
  -o-object-fit: cover
  object-fit: cover
  height: 100%
  z-index: 50
@media only screen and (max-width: 768px)
  .p-video__item-wrap
    width: 50%
@media only screen and (max-width: 460px)
  .p-video
    margin-right: 0
  .p-video__item-wrap
    width: 40%
    padding: 0 0 2rem 0
.flex
  display: -webkit-box
  display: -ms-flexbox
  display: flex
  position: relative
  width: 100%
.flex_center
  -webkit-box-pack: center
  -ms-flex-pack: center
  justify-content: center
  -webkit-box-align: center
  -ms-flex-align: center
  align-items: center
.flex_columns
  -webkit-box-orient: vertical
  -webkit-box-direction: normal
  -ms-flex-direction: column
  flex-direction: column
.flex__item
  -webkit-box-flex: 0
  -ms-flex: 0 0 auto
  flex: 0 0 auto
.flex_wrap
  flex-wrap: wrap
</style>
