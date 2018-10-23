<template>
  <section class="b-gallery-three force-polyfill" v-styler:section="$sectionData.mainStyle" :class="$sectionData.mainStyle.classes" v-bind:style="$sectionData.mainStyle.styles">
      <div class="b-gallery-three__wrap">
        <div class="b-gallery-three-block flex flex_center">
          <div class="b-gallery-three-block__item flex flex_center flex_columns force-polyfill"
               v-for="(item, index) in $sectionData.images" :key="index"
               v-styler:galleryItem="{el: $sectionData.images[index].preview, path: `$sectionData.images[${index}].preview`}"
               :data-index="index"
               :style="$sectionData.images[index].preview.styles"
            >
            <div class="b-gallery-three-block__item-wrap force-polyfill">
              <a gallery-three-link="" :gallery-three-url="$sectionData.images[index].button.href" class="b-gallery-three-block__item-link"
                 v-styler:for="{ el: $sectionData.images[index].button, path:`$sectionData.images[${index}].button`}"
                 v-bind:style="$sectionData.images[index].button.styles"
                 @dblclick="onClick(item, index)"
              >
              </a>
              <div class="b-gallery-three-block__item-content">
                <img class="b-gallery-three-block__item-img ie-object-fit" :src="$sectionData.images[index].preview.url" :alt="$sectionData.images[index].title.text">
              </div>
            </div>
            <div>
              <span class="b-gallery-three-block__item-title"
                v-styler:for="{ el: $sectionData.images[index].title, path:`$sectionData.images[${index}].title` }"
                v-html="$sectionData.images[index].title.text"
                :style="$sectionData.images[index].title.styles"
                >
              </span>
            </div>
          </div>
        </div>
      </div>
      <div gallery-three-popup="" class="l-popup l-popup_flex" v-show="true === $sectionData.isShowPopup">
          <div gallery-three-popup-padd="" v-bind:style="$sectionData.popupStyles" class="l-popup__padd flex flex_columns">
              <div gallery-three-popup-close="" class="l-popup__close" v-bind:class="{'is-editable': $builder.isEditing}" @click.prevent="closePopup"></div>
              <div class="l-popup__logos">
                  <div v-for="(logo, index) in $sectionData.logos" v-bind:class="{'is-editable': $builder.isEditing}" :key="index" class="b-logo">
                    <uploader class="b-logo__img" :path="`$sectionData.logos[${index}].element`"
                      v-styler:for="{ el: $sectionData.logos[index].element, path: `$sectionData.logos[${index}].element` }"
                      :style="$sectionData.logos[index].element.styles"
                      ></uploader>
                  </div>
              </div>
              <div gallery-three-popup-content="" class="l-popup__content flex flex_center" v-html="$sectionData.content"></div>
              <div class="b-gallery-three-btn-container">
                <span class="b-gallery-three-btn-container__button force-polyfil"
                      v-styler="$sectionData.button"
                      v-text="$sectionData.button.text"
                      v-bind:style="$sectionData.button.styles"
                  >
                  Начать игру
                </span>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
import * as types from '@editor/types'
import ResizePolyfill from 'resize-polyfill'

export default {
  name: 'Gallery3',
  cover: '/img/covers/gallery3.png',
  group: 'galleries',
  $schema: {
    mainStyle: types.StyleObject,
    button: types.Button,
    images: [
      {
        preview: types.Image,
        title: types.Text,
        button: types.Button
      },
      {
        preview: types.Image,
        title: types.Text,
        button: types.Button
      },
      {
        preview: types.Image,
        title: types.Text,
        button: types.Button
      }
    ],
    logos: [
      {
        element: types.Image
      }
    ],
    index: 0,
    isShowPopup: false,
    popupStyles: { width: 'auto', margin: '0' },
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

      if (undefined !== this.$sectionData.popupStyles) {
        this.$sectionData.popupStyles['width'] = actualWidth + 'px'
        this.$sectionData.popupStyles['margin'] = '0 ' + calcMargin + 'px'
      }
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
  },
  mounted () {
    let el = document.getElementsByClassName('force-polyfill')
    ResizePolyfill(el)
  }
}
</script>

<style lang="sass" scoped="scoped">
@import '../../../assets/sass/_flex.sass'

.b-gallery-three
  display: flex
  align-items: center
  &.is-editable
   resize: vertical
   overflow: hidden
  .is-tablet &,
  .is-mobile &
    flex-wrap: wrap
  @media only screen and (max-width: 768px)
    &
      flex-wrap: wrap
      height: auto !important
  &__wrap
    margin: 0 auto
    max-width: 160rem
    min-width: 80%
  &__subtitle
    margin-bottom: 0
    font-weight: 400

  &-block
    margin-bottom: 1rem
    margin-right: -2rem
    .is-tablet &,
    .is-mobile &
      flex-wrap: wrap
    .is-mobile &
      margin-right: 0
    @media only screen and (max-width: 768px)
      &
        flex-wrap: wrap
    @media only screen and (max-width: 460px)
      &
        margin-right: 0

    &__item
      width: 20%
      margin: 1rem
      &.is-editable
       resize: both
       overflow: hidden
       &:active
         border: dotted #333 1px
      &-wrap
        width: 100%
        // height: 100% // #5 in https://jira.protocol.one/browse/SFC-53?focusedCommentId=10186&page=com.atlassian.jira.plugin.system.issuetabpanels:comment-tabpanel#comment-10186
        min-width: 5rem
        min-height: 17rem
        padding: 1rem
        cursor: pointer
        position: relative
        &.is-editable
          resize: both
          overflow: hidden
      .is-tablet &
        width: 50%
      .is-mobile &
        width: 100%
        padding: 0 0 2rem 0
      @media only screen and (max-width: 768px)
        &
          width: 50%
      @media only screen and (max-width: 460px)
        &
          width: 100%
          padding: 0 0 2rem 0

      &-content
        position: absolute
        z-index: 0
        top: 0
        right: 0
        bottom: 0
        left: 0
        min-height: 10rem
        background-color: #fff
        background-position: center
        background-size: cover
        overflow: hidden
        pointer-events: none
        background: linear-gradient(135deg, rgba(204, 204, 204, 0.4) 0%, rgba(161, 161, 161, 0.4) 100%)
      &-wrap:hover &-content
        background: linear-gradient(135deg, rgba(204, 204, 204, 0.1) 0%, rgba(161, 161, 161, 0.1) 100%)

      &-title
        font-size: 1.6rem
        line-height: 1.4
        color: #000
        padding: 0 2rem
        display: block
        &::selection, & ::selection
          color: #ff0
          background: #000

      &-link
        position: absolute
        display: block
        top: 0
        left: 0
        width: 100%
        height: 100%
        min-width: 100%
        min-height: 100%
        margin: 0
        z-index: 100
        &.is-editable
          top: 50%
          left: 50%
          width: 10rem
          height: 10rem
          min-width: auto
          min-height: auto
          margin: -5rem 0 0 -5rem
        &:before, &:after
          content: ''
          position: absolute
          top: 50%
          left: 50%
        &:before
          margin: -43px 0 0 -43px
          width: 86px
          height: 86px
          -webkit-transform: scale(0.9)
          transform: scale(0.9)
          -webkit-transition: all 200ms
          transition: all 200ms
          background-image: url(https://gn897.cdn.gamenet.ru/TY0Xv2riHu/6u2ah/o_o01QL.png)
        &:after
          margin: -14px 0 0 -14px
          width: 28px
          height: 28px
          background-image: url(https://gn295.cdn.gamenet.ru/TY0Xv2riHu/6u2as/o_1MFnq3.png)
      &-wrap:hover &-link:before
          transform: scale(1) rotate(-120deg)

      &-img
        position: absolute
        top: 0
        left: 0
        width: 100%
        object-fit: cover
        height: 100%
        z-index: 50

  &-btn-container
    text-align: center
    position: relative
    z-index: 100
    margin: 2rem 0
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

.l-popup__logos
  margin: 2rem 0
  width: 100%
  text-align: center
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
  z-index: 199
  cursor: pointer
  &_flex
    display: -webkit-box
    display: -ms-flexbox
    display: flex
  &__padd
    position: relative
    height: 100%
    justify-content: center
    align-items: center
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
  top: 1rem
  right: 1rem
  width: 5rem
  height: 5rem
  &.is-editable
    top: 10rem
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

</style>
