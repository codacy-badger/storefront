<template>
  <section class="b-gallery-one" v-styler:section="$sectionData.mainStyle" :class="$sectionData.mainStyle.classes" v-bind:style="$sectionData.mainStyle.styles">
      <div class="p-split flex__item flex flex_center">
        <div class="p-split__tiles flex__item clearfix p-split__tiles_mobile">
          <div class="hero-tile"
              v-for="(item, index) in $sectionData.images"
              v-styler:galleryItem="{el: $sectionData.images[index].preview, path: `$sectionData.images[${index}].preview`}"
              :data-index="index"
              :key="index"
              :style="$sectionData.images[index].preview.styles"
              :gallery-one-preview="'loader__content_show'"
            >
            <span class="hero-tile__name"
               v-styler:for="{ el: $sectionData.images[index].label, path:`$sectionData.images[${index}].label` }"
               v-html="$sectionData.images[index].label.text"
               :style="$sectionData.images[index].label.styles"
               >
            </span>
          </div>
        </div>
        <div class="p-split__detail flex__item hero-detail loader">
          <div class="loader__content loader__content_mobile" :gallery-one-stage="index" v-for="(item, index) in $sectionData.images" :key="index">
            <h2 class="hero-detail__name h1"
               v-html="$sectionData.images[index].title.text"
               :style="$sectionData.images[index].title.styles"
               v-styler:for="{ el: $sectionData.images[index].title, path:`$sectionData.images[${index}].title`} ">
            </h2>
            <!-- image -->
            <div class="hero-detail__img"
              :style="$sectionData.images[index].img.styles"
              v-styler:for="{ el: $sectionData.images[index].img, path:`$sectionData.images[${index}].img`} "
            />
            <!--/image -->
            <p class="hero-detail__bio"
             v-styler:for="{el: $sectionData.images[index].text, path: `$sectionData.images[${index}].text`}"
             :style="$sectionData.images[index].text.styles"
             v-html="$sectionData.images[index].text.text">
            </p>
          </div>
        </div>
    </div>
  </section>

</template>

<script>
import * as types from '@editor/types'
import { galleryPreviewClick } from '@cscripts/gallery1'

export default {
  name: 'Gallery1',
  cover: '/img/covers/gallery1.png',
  group: 'galleries',
  $schema: {
    mainStyle: types.StyleObject,
    images: [
      {
        preview: types.GalleryItem,
        label: types.Button,
        title: types.Text,
        img: types.Image,
        text: types.Text
      },
      {
        preview: types.GalleryItem,
        label: types.Button,
        title: types.Text,
        img: types.Image,
        text: types.Text
      },
      {
        preview: types.GalleryItem,
        label: types.Button,
        title: types.Text,
        img: types.Image,
        text: types.Text
      }
    ]
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
  background: center url(https://gn652.cdn.gamenet.ru/TY0Xv2riHu/772iV/o_cDot3.png) no-repeat
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
  &_mobile
      .is-tablet &,
      .is-mobile &
        display: block
        margin: 10rem 0
      @media only screen and (max-width: 768px)
        &
          display: block
          margin: 10rem 0

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

.hero-tile__name
  border-radius: 0.25rem
  padding: 0.3rem 0.5rem
  display: inline-block
  -webkit-transition: all 200ms
  transition: all 200ms
  width: 13rem
  height: 2rem
  &.is-editable
    resize: vertical
    overflow: hidden

.hero-tile_active
  .hero-tile__name
    -webkit-transform: translateY(-1rem)
    transform: translateY(-1rem)

.is-tablet,
.is-mobile
  .hero-tile_active
    .hero-tile__name
      -webkit-transform: translateY(-7px)
      transform: translateY(-7px)

@media only screen and (max-width: 768px)
  .hero-tile_active
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
.p-split
 width: 95%
 max-width: 98rem
 margin: 0 auto
.p-split__tiles
  margin: 1rem
  text-align: center
  width: 50%
  &_mobile
    .is-tablet &,
    .is-mobile &
      display: none
    @media only screen and (max-width: 768px)
      &
        display: none
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
  width: 50%
  .is-tablet &,
  .is-mobile &
    width: 100%
  @media only screen and (max-width: 768px)
    &
      width: 100%

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

.hero-detail
  .is-tablet &,
  .is-mobile &
    .hero-detail
      margin-bottom: 1rem
  @media only screen and (max-width: 768px)
    &
      margin-bottom: 1rem

.hero-detail__name
  font-weight: 400

.hero-detail__bio
  font-size: 1.4rem
  line-height: 1.1
  max-width: 50rem
  margin: 1rem auto

.hero-detail__img
  width: 40rem
  height: 40rem
  margin: 0 auto
  .is-tablet &,
  .is-mobile &
    width: 30rem
    height: 30rem
  @media only screen and (max-width: 768px)
    &
      width: 30rem
      height: 30rem

.l-title
  &__title,
  &__subtitle
    text-align: center
</style>
