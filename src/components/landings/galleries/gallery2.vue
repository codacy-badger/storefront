<template>
  <section class="b-gallery-two" v-on:resize="closePopup" v-styler:section="$sectionData.mainStyle" :class="$sectionData.mainStyle.classes" v-bind:style="$sectionData.mainStyle.styles">
      <div class="b-gallery-two__wrap">
        <div class="b-gallery-two flex flex_center">
          <div class="b-gallery-two__item-wrap"
            v-for="(item, index) in $sectionData.images"
            v-styler:galleryItem="{el: $sectionData.images[index].preview, path: `$sectionData.images[${index}].preview`, type: 'galleryItem'}"
            :data-index="index"
            :key="index"
            :style="$sectionData.images[index].preview.styles"
          >
            <a gallery-two-link="" :gallery-two-url="$sectionData.images[index].button.href" class="b-gallery-two__link"
               v-styler:for="{ el: $sectionData.images[index].button, path:`$sectionData.images[${index}].button`, type: 'button'}"
               v-bind:style="$sectionData.images[index].button.styles"
               @dblclick="onClick(item, index)"
              >
            </a>
          </div>
        </div>
      </div>
      <div gallery-two-popup="" class="l-popup l-popup_on" v-show="true === $sectionData.isShowPopup" @click.prevent="closePopup">
        <div gallery-two-popup-padd="" class="l-popup__padd" v-bind:style="$sectionData.popupStyles">
          <div gallery-two-popup-close="" class="l-popup__close" @click.prevent="closePopup"></div>
          <div gallery-two-popup-content="" class="l-popup__content flex flex_center" v-html="$sectionData.content"></div>
        </div>
      </div>
  </section>
</template>

<script>
import * as types from '@editor/types'

export default {
  name: 'Gallery2',
  cover: '/img/covers/gallery2.png',
  group: 'galleries',
  $schema: {
    mainStyle: types.StyleObject,
    button: types.Button,
    slogan: {
      text: 'Title',
      type: types.Text
    },
    images: [
      {
        preview: types.Image,
        label: types.Text,
        button: types.Button
      },
      {
        preview: types.Image,
        label: types.Text,
        button: types.Button
      },
      {
        preview: types.Image,
        label: types.Text,
        button: types.Button
      }
    ],
    index: 0,
    isShowPopup: false,
    popupStyles: { width: 'auto', margin: '0' },
    url: 'https://gn652.cdn.gamenet.ru/TY0Xv2riHu/772iV/o_cDot3.png',
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
      setTimeout(() => {
        this.setHeight()
      }, 100)
    },
    setHeight () {
      this.$sectionData.isShowPopup = true

      let el = document.getElementById('content')
      let ab = document.getElementById('artboard')
      let actualWidth = null
      let calcHeight = null
      let calcMargin = null

      actualWidth = undefined !== ab ? ab.clientWidth : el.clientWidth
      calcHeight = actualWidth * 0.5625
      calcMargin = (document.body.clientWidth - actualWidth) / 2
      el.style.height = calcHeight + 'px'

      this.$sectionData.popupStyles['width'] = actualWidth + 'px'
      this.$sectionData.popupStyles['margin'] = '0 ' + calcMargin + 'px'
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
@import '../../../assets/sass/_flex.sass'

.b-gallery-two
  display: flex
  align-items: center
  flex-wrap: wrap
  padding: 1rem
  &.is-editable
    resize: vertical
    overflow: hidden
  @media only screen and (max-width: 768px)
    &
      height: auto !important
  &__wrap
    max-width: 160rem
    width: 80%
    margin: 0 auto
.b-gallery-two__item-wrap
  width: 28rem
  min-width: 10rem
  height: 22rem
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
.b-gallery-two__link
  position: absolute
  display: block
  top: 50%
  left: 50%
  width: 10rem
  height: 10rem
  margin: -5rem 0 0 -5rem
  z-index: 100
  background-image: url(https://gn779.cdn.gamenet.ru/TY0Xv2riHu/75YKm/o_1lNeRV.png)
  background-size: cover
  transition: all 200ms
  &.is-editable
    top: 50%
    left: 50%
    width: 10rem
    height: 10rem
    margin: -5rem 0 0 -5rem
  &:hover
    transform: scale(1.2) rotate(-120deg)
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

.is-tablet,
.is-mobile
  .b-gallery-two__item-wrap
    width: 40%
.is-mobile
  .b-gallery-two
    margin-right: 0
  .b-gallery-two__item-wrap
    width: 100%
    padding: 0 0 2rem 0

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
  &_on
    display: -webkit-box
    display: -ms-flexbox
    display: flex
  &__padd
    position: relative
    height: 100%
    display: -webkit-box
    display: -ms-flexbox
    display: flex
    justify-content: center
    align-items: center
  &__content
    border: 5px solid #fcff00
    background-color: #000
    max-width: 90%
    max-height: 90%
    overflow: hidden
    cursor: auto
    transition: all 200ms
  &__content iframe
    display: block
    width: 100%
    height: 100%
  &__content_video
    width: 70%
  &__close
    position: absolute
    top: 10px
    right: 10px
    width: 50px
    height: 50px
    pointer-events: none
  &__close:before,   &__close:after
    content: ''
    position: absolute
    top: 23px
    width: 50px
    height: 3px
    background-color: #fcff00
  &__close:before
    -webkit-transform: rotate(-45deg)
    transform: rotate(-45deg)
  &__close:after
    -webkit-transform: rotate(45deg)
    transform: rotate(45deg)
</style>
