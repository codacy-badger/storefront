<template>
  <section class="b-gallery-one" v-styler:section="$sectionData.mainStyle" :class="$sectionData.mainStyle.classes" v-bind:style="$sectionData.mainStyle.styles">
      <div class="p-split flex__item flex flex__item_full flex_center">
        <div class="p-split__tiles flex__item flex__item_size-2 clearfix">
          <div class="hero-tile"
              v-for="(item, index) in $sectionData.images"
              v-styler:galleryItem="{el: $sectionData.images[index].preview, path: `$sectionData.images[${index}].preview`}"
              :data-index="index"
              :key="index"
              :gallery-one-preview="'loader__content_show'"
              @click="onFocus(index)" >
            <div class="hero-tile__frame">
              <img class="hero-tile__img" :src="$sectionData.images[index].preview.url" :alt="item.title.text">
            </div>
            <span class="hero-tile__name"
               v-styler:for="{ el: $sectionData.images[index].label, path:`$sectionData.images[${index}].label` }"
               v-html="$sectionData.images[index].label.text"
               >
            </span>
          </div>
        </div>
        <div class="p-split__detail flex__item flex__item_size-1 hero-detail loader">
          <div class="loader__content" :gallery-one-stage="index" v-for="(item, index) in $sectionData.images" :key="index">
            <h2 class="hero-detail__name h1"
               v-html="$sectionData.images[index].title.text"
               v-styler:for="{ el: $sectionData.images[index].title, path:`$sectionData.images[${index}].title`} ">
            </h2>
            <!-- upload image -->
            <uploader class="hero-detail__img" v-bind:path="'$sectionData.images[' + index + '].img'" />
            <!--/upload image -->
            <p class="hero-detail__bio"
             v-styler:for="{el: $sectionData.images[index].text, path: `$sectionData.images[${index}].text`}"
             v-html="$sectionData.images[index].text.text">
            </p>
          </div>
        </div>
    </div>
  </section>

</template>

<script>
import * as types from '@plugins/Vuse/types'
import { galleryPreviewClick } from '@cscripts/gallery1'

export default {
  name: 'Gallery1',
  cover: '/img/covers/gallery1.png',
  group: 'galleries',
  $schema: {
    mainStyle: types.StyleObject,
    images: [
      {
        preview: types.Image,
        label: types.Text,
        title: types.Text,
        img: types.Image,
        text: types.Text
      },
      {
        preview: types.Image,
        label: types.Text,
        title: types.Text,
        img: types.Image,
        text: types.Text
      },
      {
        preview: types.Image,
        label: types.Text,
        title: types.Text,
        img: types.Image,
        text: types.Text
      }
    ],
    index: 0
  },
  props: {
    id: {
      type: Number, required: true
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

<style lang="sass">
@import '../../../assets/sass/_flex.sass'

.b-gallery-one
  font-family: Helvetica Neue, Helvetica, Arial
  display: flex
  align-items: center
  position: relative
  width: 100%
  background-position: center
  background-size: cover
  color: #000
  padding: 1rem
  min-height: 63rem
  &.is-editable
    resize: vertical
    overflow: hidden
  .is-tablet &,
  .is-mobile &
    height: auto !important
  @media only screen and (max-width: 768px)
    &
      height: auto !important
.overlay-bg,
.pages__page_videos .pages__bg,
.p-bg__cont
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAEAQMAAACTPww9AAAABlBMVEUAAAAAAAClZ7nPAAAAAnRSTlMmRiryqrkAAAANSURBVAjXY2BgWADCAAPIAUE7SEuEAAAAAElFTkSuQmCC")

.stains,
.l-popup__content,
.btn-container__button
  position: relative

img
  border: 0
  max-width: 100%
  height: auto

a
  color: inherit
  text-decoration: none
  &:hover
    color: #fcff00

*
  box-sizing: border-box
  &:before, &:after
    box-sizing: border-box

.pages__page
  font-family: Helvetica Neue, Helvetica, Arial
  position: relative
  width: 100%
  min-height: 100vh
  background-position: center
  background-size: cover
  color: #ffffff

.pages__page_main
  min-height: calc(100vh + 35px)
  padding-bottom: 35px

.pages__page_hero
  background: center url(https://gn510.cdn.gamenet.ru/TY0Xv2riHu/6nOTD/o_yT2c2.png) no-repeat
  background-size: cover
  background-color: #000

.pages__bg
  position: absolute
  z-index: 0
  pointer-events: none
  width: 100%
  height: 100%

.pages__wrap
  position: relative
  min-height: 100vh
  width: 100%
  max-width: 1260px
  margin: 0 auto
  padding: 2rem 0
  z-index: 500

.is-tablet,
.is-mobile
  .pages__wrap
    padding-left: 1rem
    padding-right: 1rem
@media only screen and (max-width: 1308px)
  .pages__wrap
    padding-left: 1rem
    padding-right: 1rem

.loader__content
  -webkit-transition: all 200ms
  transition: all 200ms
  opacity: 1
  display: none
  &_show
    display: block

// button layout2 styles
.l-layout2-btn
  width: 100%
  min-height: 10rem
  position: relative
.b-layout2-btn
  background-color: #fff
  color: #333
  font-size: 3rem
  text-align: center
  cursor: pointer
  z-index: 100
  transition: all 100ms
  margin: 0 auto
  line-height: 3rem
  padding: 2rem
  width: 20rem
  min-width: 5rem
  min-height: 2rem
  display: flex
  align-items: center
  justify-content: center
  &:hover
    filter: brightness(120%)
  &:active
    filter: brightness(80%)
  &.is-editable
    resize: both
    overflow: hidden
@media only screen and (max-width: 768px)
  .b-layout2-btn
    font-size: 2rem

.is-tablet,
.is-mobile
  .b-layout2-btn
    font-size: 2rem

.gallery1-btn-container
  text-align: center
  position: relative
  z-index: 100
  padding-bottom: 5vh
  &__button
    position: relative
    font-size: 3rem
    line-height: 3rem
    padding: 2rem 4rem
    background-color: #fff
    color: #000
    width: 25rem
    min-width: 5rem
    min-height: 2rem
    margin: 0 auto
    transition: 100ms
    cursor: pointer
    text-align: center
    display: flex
    align-items: center
    justify-content: center
    .is-tablet &,
    .is-mobile &
      font-size: 2rem
    @media only screen and (max-width: 768px)
      &
        font-size: 2rem
    &:hover
      filter: brightness(120%)
    &:active
      filter: brightness(80%)
    &.is-editable
      resize: both
      overflow: hidden
// end button layout2 styles

.p-bg__cont
  width: 100%
  height: 100%

.p-bg__heros
  width: 100%
  height: 100%

.logo
  display: block

.slogan
  display: -webkit-box
  display: -ms-flexbox
  display: flex
  -webkit-box-align: end
  -ms-flex-align: end
  align-items: flex-end
  width: 100%

.slogan__wrap
  width: 100%
  background-size: contain
  padding: 24px 0
  text-align: center
  margin-bottom: 2rem

.layout2
  color: #ffffff
  text-transform: uppercase
  h2
    font-size: 2.3rem
    line-height: 2rem
    font-weight: 700
  .h3
    font-size: 1.8rem
    line-height: 1.5rem
    font-weight: 400

.slogan__h2
  margin-bottom: 0.5rem

.slogan__h3
  margin-bottom: 0

.hero-tile
  margin: 0 12px 12px 0
  cursor: pointer
  text-align: center
  -webkit-backface-visibility: hidden
  backface-visibility: hidden
  display: inline-block
  vertical-align: top

.hero-tile__frame
  position: relative
  overflow: hidden
  border-radius: 0.5rem
  width: 13rem
  height: 15rem
  -webkit-transform: skewX(-14.92632deg) translateX(20px)
  transform: skewX(-14.92632deg) translateX(20px)
  border: 0.4rem solid #a7a1a1
  -webkit-transition: all 200ms
  transition: all 200ms

.hero-tile__img
  position: absolute
  top: 0
  left: -2rem
  width: 17rem
  max-width: 20rem
  height: 100%
  -o-object-fit: contain
  object-fit: contain
  -webkit-transform: skewX(14.92632deg)
  transform: skewX(14.92632deg)

.hero-tile__name
  border-radius: 0.25rem
  padding: 0.3rem 0.5rem
  display: inline-block
  -webkit-transition: all 200ms
  transition: all 200ms
  max-width: 13rem
  .is-tablet &,
  .is-mobile &
    max-width: 6.5rem
  @media only screen and (max-width: 768px)
    &
      max-width: 6.5rem

.hero-tile_active
  .hero-tile__frame
    border-color: #a7a1a1
    -webkit-transform: skewX(-14.92632deg) translateX(20px) scale(1.1)
    transform: skewX(-14.92632deg) translateX(20px) scale(1.1)
  .hero-tile__name
    background-color: #a7a1a1
    color: #000
    -webkit-transform: translateY(-1rem)
    transform: translateY(-1rem)

.hero-tile:hover .hero-tile__frame
  border-color: #a7a1a1

.is-tablet,
.is-mobile
  .hero-tile:nth-child(6)
    clear: left
  .hero-tile__frame
    width: 6.5rem
    height: 7.5rem
    -webkit-transform: skewX(-14.92584deg) translateX(10px)
    transform: skewX(-14.92584deg) translateX(10px)
  .hero-tile__img
    left: -1rem
    width: 8.5rem
    -webkit-transform: skewX(14.92584deg)
    transform: skewX(14.92584deg)
  .hero-tile_active
    .hero-tile__frame
      -webkit-transform: skewX(-14.92584deg) translateX(10px) scale(1.1)
      transform: skewX(-14.92584deg) translateX(10px) scale(1.1)
    .hero-tile__name
      -webkit-transform: translateY(-7px)
      transform: translateY(-7px)

@media only screen and (max-width: 768px)
  .hero-tile:nth-child(6)
    clear: left
  .hero-tile__frame
    width: 6.5rem
    height: 7.5rem
    -webkit-transform: skewX(-14.92584deg) translateX(10px)
    transform: skewX(-14.92584deg) translateX(10px)
  .hero-tile__img
    left: -1rem
    width: 8.5rem
    -webkit-transform: skewX(14.92584deg)
    transform: skewX(14.92584deg)
  .hero-tile_active
    .hero-tile__frame
      -webkit-transform: skewX(-14.92584deg) translateX(10px) scale(1.1)
      transform: skewX(-14.92584deg) translateX(10px) scale(1.1)
    .hero-tile__name
      -webkit-transform: translateY(-7px)
      transform: translateY(-7px)

.is-tablet,
.is-mobile
  .hero-tile
    &:nth-child(6)
      clear: none
    &:nth-child(5), &:nth-child(9)
      clear: left
.p-split__tiles
  margin: 1rem
  text-align: center
.p-split__detail
  text-align: center

@media only screen and (max-width: 600px)
  .hero-tile
    &:nth-child(6)
      clear: none
    &:nth-child(5), &:nth-child(9)
      clear: left
.p-split__tiles
  margin: 1rem
  text-align: center
.p-split__detail
  text-align: center

.is-tablet,
.is-mobile
  .p-split
    -webkit-box-orient: vertical
    -webkit-box-direction: normal
    -ms-flex-direction: column
    flex-direction: column
    .flex__item_size-2, .flex__item_size-1
      -webkit-box-flex: 0
      -ms-flex: 0 0 auto
      flex: 0 0 auto

@media only screen and (max-width: 768px)
  .p-split
    -webkit-box-orient: vertical
    -webkit-box-direction: normal
    -ms-flex-direction: column
    flex-direction: column
    .flex__item_size-2, .flex__item_size-1
      -webkit-box-flex: 0
      -ms-flex: 0 0 auto
      flex: 0 0 auto

.hero-detail__name
  font-weight: 400

.hero-detail__img
  position: relative
  width: 100%
  margin: 1rem auto
  background-repeat: no-repeat
  background-position: center
  background-size: contain
  height: 43rem
  .is-tablet &,
  .is-mobile &
    width: 70%
    max-height: none
    height: auto
    margin: 0.5rem auto
  @media only screen and (max-width: 768px)
    &
      width: 70%
      max-height: none
      height: auto
      margin: 0.5rem auto
  & img
    height: 100%
    width: auto !important
    margin: 0 auto
    .is-tablet &,
    .is-mobile &
      width: 100%
      height: auto
    @media only screen and (max-width: 768px)
      &
        width: 100%
        height: auto

.hero-detail__bio
  font-size: 1.4rem
  line-height: 1.1
  max-width: 50rem
  margin: 1rem auto

.is-tablet,
.is-mobile
  .hero-detail
    margin-bottom: 1rem

@media only screen and (max-width: 768px)
  .hero-detail
    margin-bottom: 1rem

.l-title
  &__title,
  &__subtitle
    text-align: center
</style>
