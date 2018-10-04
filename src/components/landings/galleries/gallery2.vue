<template>
  <section class="b-gallery-two" v-styler:section="$sectionData.mainStyle" :class="$sectionData.mainStyle.classes" v-bind:style="$sectionData.mainStyle.styles">
      <div class="b-gallery-two__wrap">
        <div class="b-gallery-two flex flex_center">
          <div class="b-gallery-two__item-wrap"
            v-for="(item, index) in $sectionData.images"
            v-styler:galleryItem="$sectionData.images[index]"
            :data-index="index"
            :key="index"
          >
            <a gallery-two-link="" :gallery-two-url="$sectionData.images[index].button.href" class="b-gallery-two__link"
               v-styler:index="`$sectionData.images[${index}].button`"
               v-bind:style="$sectionData.images[index].button.styles"
               @dblclick="onClick(item, index)"
            >
            </a>
            <div class="b-gallery-two__item-content">
              <img class="b-gallery-two__img ie-object-fit" :src="$sectionData.images[index].preview" :alt="$sectionData.images[index].title">
            </div>
          </div>
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
  cover: '/img/covers/gallery1.png',
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
    url: 'https://gn792.cdn.gamenet.ru/TY0Xv2riHu/6qfh3/o_1Pvytf.png',
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
.b-gallery-two
  display: flex
  align-items: center
  &.is-editable
    resize: vertical
    overflow: hidden
  @media only screen and (max-width: 768px)
    &
      flex-wrap: wrap
      height: auto !important
  &__wrap
    max-width: 160rem
    width: 60%
    margin: 0 auto
.b-gallery-two__item-wrap
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
.b-gallery-two__item-wrap_size-big
  width: 45%
.b-gallery-two__item-wrap_size-small
  width: 20%
.b-gallery-two__item-content
  position: relative
  height: 100%
  background-color: #fff
  background-position: center
  background-size: cover
  overflow: hidden
  pointer-events: none
  background: -webkit-linear-gradient(315deg, rgba(65, 63, 82, 0.4) 0%, rgba(28, 13, 142, 0.4) 100%)
  background: linear-gradient(135deg, rgba(65, 63, 82, 0.4) 0%, rgba(28, 13, 142, 0.4) 100%)
.b-gallery-two__item-wrap:hover .b-gallery-two__item-content
  background: linear-gradient(135deg, rgba(227, 223, 255, 0.3) 0%, rgba(23, 40, 125, 0.3) 100%)

.b-gallery-two__item-wrap .b-gallery-two__item-content .b-gallery-two__text,
.b-gallery-two__item-content:hover .b-gallery-two__text
  opacity: 1
.b-gallery-two__link
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
.b-gallery-two__link:before, .b-gallery-two__link:after
  content: ''
  position: absolute
  top: 50%
  left: 50%
.b-gallery-two__link:before
  margin: -43px 0 0 -43px
  width: 86px
  height: 86px
  -webkit-transform: scale(0.9)
  transform: scale(0.9)
  -webkit-transition: all 200ms
  transition: all 200ms
  background-image: url(https://gn897.cdn.gamenet.ru/TY0Xv2riHu/6u2ah/o_o01QL.png)
.b-gallery-two__link:after
  margin: -14px 0 0 -14px
  width: 28px
  height: 28px
  background-image: url(https://gn295.cdn.gamenet.ru/TY0Xv2riHu/6u2as/o_1MFnq3.png)
.b-gallery-two__item-wrap:hover .b-gallery-two__link:before
  transform: scale(1) rotate(-120deg)
.b-gallery-two__text
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
.b-gallery-two__img
  position: absolute
  top: 0
  left: 0
  width: 100%
  -o-object-fit: cover
  object-fit: cover
  height: 100%
  z-index: 50
@media only screen and (max-width: 768px)
  .b-gallery-two__item-wrap
    width: 40%
@media only screen and (max-width: 460px)
  .b-gallery-two
    margin-right: 0
  .b-gallery-two__item-wrap
    width: 100%
    padding: 0 0 2rem 0

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
