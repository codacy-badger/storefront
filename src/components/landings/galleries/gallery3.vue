<template>
  <section class="b-gallery-three" v-styler:section="$sectionData.mainStyle" :class="$sectionData.mainStyle.classes" v-bind:style="$sectionData.mainStyle.styles">
      <div class="b-gallery-three__wrap">
        <div class="b-gallery-three-block flex flex_center">
          <div class="b-gallery-three-block__item flex flex_center flex_columns"
               v-for="(item, index) in $sectionData.images" :key="index"
               v-styler:galleryItem="$sectionData.images[index]"
               :data-index="index"
            >
            <div class="b-gallery-three-block__item-wrap">
              <a gallery-three-link="" :gallery-three-url="$sectionData.images[index].button.href" class="b-gallery-three-block__item-link"
                 v-styler:index="`$sectionData.images[${index}].button`"
                 v-bind:style="$sectionData.images[index].button.styles"
                 @dblclick="onClick(item, index)"
              >
              </a>
              <div class="b-gallery-three-block__item-content">
                <img class="b-gallery-three-block__item-img ie-object-fit" :src="$sectionData.images[index].preview" :alt="$sectionData.images[index].title">
              </div>
            </div>
            <div>
              <span class="b-gallery-three-block__item-title"
                v-styler="`$sectionData.images[${index}].title`"
                v-text="$sectionData.images[index].title"
                >
              </span>
            </div>
          </div>
        </div>
      </div>
      <div gallery-three-popup="" class="l-popup l-popup_flex flex_columns" v-show="true === $sectionData.isShowPopup">
          <div gallery-three-popup-close="" class="l-popup__close" v-bind:class="{'is-editable': $builder.isEditing}" @click.prevent="closePopup"></div>
          <div class="l-popup__logo">
            <div class="l-popup__logo-block" v-bind:class="{'is-editable': $builder.isEditing}">
              <uploader class="l-popup__logo-img"
                path="$sectionData.logos[0].path"
                :title="$sectionData.logos[0].alt"
                :alt="$sectionData.logos[0].alt">
              </uploader>
            </div>
          </div>
          <div gallery-three-popup-content="" class="l-popup__content flex flex_center" v-html="$sectionData.content"></div>
          <div class="b-gallery-three-btn-container">
            <span class="b-gallery-three-btn-container__button"
                  v-styler="$sectionData.button"
                  v-text="$sectionData.button.text"
                  v-bind:style="$sectionData.button.styles"
              >
              Начать игру
            </span>
          </div>
      </div>
  </section>
</template>

<script>
import * as types from '@plugins/Vuse/types'

export default {
  name: 'Gallery3',
  cover: 'img/covers/gallery1.png',
  group: 'galleries',
  $schema: {
    mainStyle: types.StyleObject,
    button: types.Button,
    images: [
      {
        preview: [types.Image],
        title: types.Title,
        button: types.Button
      },
      {
        preview: [types.Image],
        title: types.Title,
        button: types.Button
      },
      {
        preview: [types.Image],
        title: types.Title,
        button: types.Button
      }
    ],
    logos: [
      {
        path: 'https://gn616.cdn.gamenet.ru/TY0Xv2riHu/6nOTs/o_1My2mo.png',
        alt: 'Default Logo',
        logo: types.Logo
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
.b-gallery-three
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
    margin: 0 auto
    max-width: 160rem
    min-width: 60%
  &__subtitle
    margin-bottom: 0
    font-weight: 400

  &-block
    margin-bottom: 1rem
    margin-right: -2rem
    @media only screen and (max-width: 768px)
      &
        flex-wrap: wrap
    @media only screen and (max-width: 460px)
      &
        margin-right: 0

    &__item
      width: 20%
      &.is-editable
       resize: both
       overflow: hidden
       &:active
         border: dotted #333 1px
      &-wrap
        width: 100%
        height: 220px
        min-width: 5rem
        min-height: 5rem
        margin: 1rem
        padding: 1rem
        cursor: pointer
        position: relative
        &.is-editable
          resize: both
          overflow: hidden
        @media only screen and (max-width: 768px)
          &
            width: 40%
        @media only screen and (max-width: 460px)
          &
            width: 100%
            padding: 0 0 2rem 0

      &-content
        position: relative
        height: 100%
        background-color: #fff
        background-position: center
        background-size: cover
        overflow: hidden
        pointer-events: none
        background: -webkit-linear-gradient(315deg, rgba(65, 63, 82, 0.4) 0%, rgba(28, 13, 142, 0.4) 100%)
        background: linear-gradient(135deg, rgba(65, 63, 82, 0.4) 0%, rgba(28, 13, 142, 0.4) 100%)

      &-wrap:hover &-content
        background: linear-gradient(135deg, rgba(227, 223, 255, 0.3) 0%, rgba(23, 40, 125, 0.3) 100%)

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
        margin: 0
        z-index: 100
        &.is-editable
          top: 50%
          left: 50%
          width: 10rem
          height: 10rem
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

.l-popup__logo
  margin: 2rem
  width: 80%
  &-block
    min-width: 10rem
    width: 20rem
    height: auto
    margin: 0 auto
    &.is-editable
      resize: both
      overflow: hidden
      padding: 1rem
  &-img
    margin: 0 auto
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
  z-index: 1000
  cursor: pointer
  &_flex
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
