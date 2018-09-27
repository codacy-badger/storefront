<template>
  <section id="gallery2" class="pages__page pages__page_videos" v-styler:section="$sectionData.mainStyle" :class="$sectionData.mainStyle.classes" v-bind:style="$sectionData.mainStyle.styles">
      <div class="pages__bg"></div>
      <div class="pages__wrap">
        <div class="l-title">
          <h1 class="l-title__title" v-styler="$sectionData.slogan.type" v-text="$sectionData.slogan.text"></h1>
        </div>
        <div class="p-video flex flex_center">
          <div class="p-video__item-wrap"
            v-for="(item, index) in $sectionData.images"
            v-styler:galleryItem="$sectionData.images[index]"
            :data-index="index"
            :key="index"
          >
            <a gallery-two-link="" :gallery-two-url="$sectionData.images[index].button.href" class="p-video__link"
               v-styler:index="`$sectionData.images[${index}].button`"
               v-bind:style="$sectionData.images[index].button.styles"
               @dblclick="onClick(item, index)"
            >
            </a>
            <div class="p-video__item-content">
              <img class="p-video__img ie-object-fit" :src="$sectionData.images[index].preview" :alt="$sectionData.images[index].title">
            </div>
          </div>
        </div>
        <div class="btn-container">
          <span class="btn-container__button"
              v-styler:button="$sectionData.button"
              v-text="$sectionData.button.text"
              v-bind:style="$sectionData.button.styles"
            >
            Начать игру
          </span>
        </div>
      </div>
      <div gallery-two-popup="" class="l-popup l-popup_on" v-show="true === $sectionData.isShowPopup" @click.prevent="closePopup">
          <div gallery-two-popup-close="" class="l-popup__close" @click.prevent="closePopup"></div>
          <div gallery-two-popup-content="" class="l-popup__content flex flex_center" v-html="$sectionData.content"></div>
      </div>
  </section>
</template>

<script>
import * as types from '@plugins/Vuse/types'

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
        button: types.Button
      },
      {
        preview: [types.Image],
        label: types.Title,
        button: types.Button
      },
      {
        preview: [types.Image],
        label: types.Title,
        button: types.Button
      },
      {
        preview: [types.Image],
        label: types.Title,
        button: types.Button
      },
      {
        preview: [types.Image],
        label: types.Title,
        button: types.Button
      },
      {
        preview: [types.Image],
        label: types.Title,
        button: types.Button
      }
    ],
    index: 0,
    isShowPopup: false,
    heightFrame: '400',
    url: 'https://www.youtube.com/embed/dqHeutdSSyM',
    content: ''
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  methods: {
    onClick (el, index) {
      let m = false
      let href = el.button.href
      let url = href !== '' ? href : this.$sectionData.url
      let c = ''
      this.$sectionData.content = c
      m = this.matchYoutubeUrl(url)
      if (m) {
        c = '<iframe id="content" width="100%" height="100%" src="https://www.youtube.com/embed/' + m + '?rel=0&amp;wmode=transparent&amp;autoplay=1&amp;enablejsapi=1&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>'
      } else {
        c = '<img id="content" width="100%"  height="100%" src="' + url + '"></img>'
      }
      this.$sectionData.content = c
      this.openPopup(this.$sectionData.content)
    },
    openPopup () {
      this.$sectionData.isShowPopup = true
      setTimeout(() => {
        this.setHeight()
      }, 500)
    },
    setHeight () {
      let el = document.getElementById('content')
      let actualWidth = el.clientWidth
      let calcHeight = actualWidth * 0.5625
      el.style.height = calcHeight + 'px'
    },
    closePopup () {
      this.$sectionData.isShowPopup = false
      this.$sectionData.content = ''
    },
    matchYoutubeUrl (url) {
      let p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/
      let matches = url.match(p)
      if (matches) {
        return matches[1]
      }
      return false
    }
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
  @media only screen and (max-width: 768px)
    &
      flex-wrap: wrap
.p-video__item-wrap
  width: 20%
  height: 22rem
  min-width: 5rem
  min-height: 5rem
  margin: 1rem
  padding: 1rem
  cursor: pointer
  position: relative
  &.is-editable
    resize: both
    overflow: hidden
.p-video__item-wrap_size-big
  width: 45%
.p-video__item-wrap_size-small
  width: 20%
.p-video__item-content
  position: relative
  height: 100%
  background-color: #fff
  background-position: center
  background-size: cover
  overflow: hidden
  pointer-events: none
  background: -webkit-linear-gradient(315deg, rgba(65, 63, 82, 0.4) 0%, rgba(28, 13, 142, 0.4) 100%)
  background: linear-gradient(135deg, rgba(65, 63, 82, 0.4) 0%, rgba(28, 13, 142, 0.4) 100%)
.p-video__item-wrap:hover .p-video__item-content
  background: linear-gradient(135deg, rgba(227, 223, 255, 0.3) 0%, rgba(23, 40, 125, 0.3) 100%)

.p-video__item-wrap .p-video__item-content .p-video__text,
.p-video__item-content:hover .p-video__text
  opacity: 1
.p-video__link
  position: absolute
  display: block
  top: 0
  left: 0
  width: 100%
  height: 100%
  margin: 0
  z-index: 100
  &.is-editable
    top: 50%
    left: 50%
    width: 10rem
    height: 10rem
    margin: -5rem 0 0 -5rem
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
.p-video__item-wrap:hover .p-video__link:before
  transform: scale(1) rotate(-120deg)
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
    width: 40%
@media only screen and (max-width: 460px)
  .p-video
    margin-right: 0
  .p-video__item-wrap
    width: 100%
    padding: 0 0 2rem 0
.btn-container
  text-align: center
  position: relative
  z-index: 100
  &__button
    position: relative
    padding: 2rem 4rem
    font-size: 2rem
    line-height: 2rem
    background-color: #fff
    color: #000
    margin: 0 auto
    border: 0
    margin-bottom: 0
    display: flex
    width: 30rem
    min-width: 10rem
    align-items: center
    justify-content: center
    -webkit-transition: 100ms
    transition: 100ms
    @media only screen and (max-width: 768px)
      &
        width: 20rem
    &:hover
      background-color: #fcff00
    &.is-editable
      resize: both
      overflow: hidden
.l-popup
  display: none
  position: fixed
  justify-content: center
  align-items: center
  top: 0
  right: 0
  left: 0
  bottom: 0
  width: 100%
  height: 100%
  background-color: rgba(0, 0, 0, 0.8)
  z-index: 99999
  cursor: pointer
.l-popup_on
  display: -webkit-box
  display: -ms-flexbox
  display: flex
.l-popup__content
  border: 5px solid #fcff00
  background-color: #000
  max-width: 90%
  max-height: 90%
  overflow: hidden
  cursor: auto
  transition: all 200ms
.l-popup__content iframe
  display: block
  width: 100%
  height: 100%
.l-popup__content_video
  width: 70%
.l-popup__close
  position: absolute
  top: 10px
  right: 10px
  width: 50px
  height: 50px
  pointer-events: none
.l-popup__close:before, .l-popup__close:after
  content: ''
  position: absolute
  top: 23px
  width: 50px
  height: 3px
  background-color: #fcff00
.l-popup__close:before
  -webkit-transform: rotate(-45deg)
  transform: rotate(-45deg)
.l-popup__close:after
  -webkit-transform: rotate(45deg)
  transform: rotate(45deg)
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
