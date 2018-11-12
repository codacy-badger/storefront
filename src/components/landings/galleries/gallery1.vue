<template>
  <section class="b-gallery-one" v-styler:section="$sectionData.mainStyle" :class="$sectionData.mainStyle.classes" v-bind:style="$sectionData.mainStyle.styles">
      <div class="b-gallery-one-list flex__item flex flex_center">
        <div class="b-gallery-one-list__tiles b-gallery-one-list__tiles_mobile">
          <div class="b-preview"
              v-for="(item, index) in $sectionData.images"
              :key="index"
            >
            <div class="b-preview__image"
              v-styler:galleryItem="{ el: $sectionData.images[index].preview, path:`$sectionData.images[${index}].preview` }"
              :style="$sectionData.images[index].preview.styles"
              :data-index="index"
              :gallery-one-preview="'loader__content_show'"
              >
            </div>
            <div class="b-preview__name"
              v-styler:for="{ el: $sectionData.images[index].label, path:`$sectionData.images[${index}].label` }"
              v-html="$sectionData.images[index].label.text"
              :style="$sectionData.images[index].label.styles"
              >
            </div>
          </div>
        </div>
        <div class="b-gallery-one-list__detail flex__item b-gallery-one-stage loader">
          <div class="loader__content loader__content_mobile" :gallery-one-stage="index" v-for="(item, index) in $sectionData.images" :key="index">
            <h2 class="b-gallery-one-stage__name"
               v-html="$sectionData.images[index].title.text"
               :style="$sectionData.images[index].title.styles"
               v-styler:for="{ el: $sectionData.images[index].title, path:`$sectionData.images[${index}].title`} ">
            </h2>
            <!-- image -->
            <div class="b-gallery-one-stage__img"
              :style="$sectionData.images[index].img.styles"
              v-styler:for="{ el: $sectionData.images[index].img, path:`$sectionData.images[${index}].img`} "
            />
            <!--/image -->
            <p class="b-gallery-one-stage__bio"
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
        label: types.Text,
        title: types.Text,
        img: types.Image,
        text: types.Text
      },
      {
        preview: types.GalleryItem,
        label: types.Text,
        title: types.Text,
        img: types.Image,
        text: types.Text
      },
      {
        preview: types.GalleryItem,
        label: types.Text,
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
    // resize: vertical
    // overflow: hidden
  @media only screen and (max-width: 768px)
    &
      height: auto !important

h2
  font-size: 2.3rem
  line-height: 2rem
  font-weight: 700

.b-preview
  cursor: pointer
  text-align: center
  display: inline-block
  vertical-align: top
  width: 12rem
  margin: 0 1rem
  border: 0.2rem solid transparent
  position: relative

.b-preview__image
  width: 12rem
  height: 18rem
  position: relative
  z-index: 0

.b-preview__name
  border-radius: 0rem
  padding: 1rem 0.5rem
  transition: all 200ms
  width: 100%
  height: auto
  min-height: 2rem
  position: relative
  z-index: 10
  overflow: hidden

.b-preview_active
  transform: scale(1.1)
  box-shadow: 0 0 2rem 0 rgba(50, 50, 50, 1)
  border: 0.2rem solid #18d88b

.b-gallery-one-list
 width: 95%
 max-width: 98rem
 margin: 0 auto
.b-gallery-one-list__tiles
  margin: 1rem
  text-align: center
  width: 50%
  opacity: 1
  height: auto
  &_mobile
    .is-tablet &,
    .is-mobile &
      opacity: 0
      width: 0
      height: 0
    @media only screen and (max-width: 768px)
      &
        opacity: 0
        width: 0
        height: 0

.b-gallery-one-list__tiles
  margin: 1rem
  text-align: center

.b-gallery-one-list__detail
  text-align: center
  width: 50%
  height: 50rem
  .is-tablet &,
  .is-mobile &
    width: 100%
    height: auto
  @media only screen and (max-width: 768px)
    &
      width: 100%
      height: auto
.is-tablet,
.is-mobile
  .b-gallery-one-list
    -webkit-box-orient: vertical
    -webkit-box-direction: normal
    -ms-flex-direction: column
    flex-direction: column
    .flex__item_size-2, .flex__item_size-1
      -webkit-box-flex: 0
      -ms-flex: 0 0 auto
      flex: 0 0 auto

@media only screen and (max-width: 768px)
  .b-gallery-one-list
    -webkit-box-orient: vertical
    -webkit-box-direction: normal
    -ms-flex-direction: column
    flex-direction: column
    .flex__item_size-2, .flex__item_size-1
      -webkit-box-flex: 0
      -ms-flex: 0 0 auto
      flex: 0 0 auto

.loader__content
  -webkit-transition: all 200ms
  transition: all 200ms
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  padding: 0
  opacity: 0
  visibility: hidden
  &_show
   opacity: 1
   visibility: visible
  &_mobile
      .is-tablet &,
      .is-mobile &
        opacity: 1
        visibility: visible
        margin: 10rem 0
        position: relative
      @media only screen and (max-width: 768px)
        &
          opacity: 1
          visibility: visible
          margin: 10rem 0
          position: relative
.b-gallery-one-stage
  position: relative
  .is-tablet &,
  .is-mobile &
    .b-gallery-one-stage
      margin-bottom: 1rem
  @media only screen and (max-width: 768px)
    &
      margin-bottom: 1rem

.b-gallery-one-stage__name
  font-weight: 400

.b-gallery-one-stage__bio
  font-size: 1.4rem
  line-height: 1.1
  max-width: 50rem
  margin: 1rem auto

.b-gallery-one-stage__img
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
    // resize: both
    // overflow: hidden
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
      // resize: both
      // overflow: hidden
// end button layout2 styles
</style>
