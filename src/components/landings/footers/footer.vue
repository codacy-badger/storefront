<template>
  <section class="l-footer" v-styler:section="$sectionData.mainStyle" :class="$sectionData.mainStyle.classes" v-bind:style="$sectionData.mainStyle.styles">
    <footer class="b-footer">
      <div class="b-footer__group b-footer__group_1">
        <div class="b-footer__logo" v-for="(item, index) in $sectionData.images"
             v-styler:galleryItem="{el: $sectionData.images[index], path: `$sectionData.images[${index}]`}"
             :data-index="index"
             :key="index"
             :style="$sectionData.images[index].styles"
          >
          <img class="b-footer__logo-img" :src="$sectionData.images[index].url" />
        </div>
      </div>
      <div class="b-footer__group b-footer__group_2">
          <span class="b-footer__group-el" v-for="(item, index) in $sectionData.copyrights" :key="index">
            <span class="b-footer__group-el-text"
              v-html="$sectionData.copyrights[index].element.text"
              v-styler:for="{ el:$sectionData.copyrights[index].element, path: `$sectionData.copyrights[${index}].element`}"
              :style="$sectionData.copyrights[index].element.styles"
              >
            </span>
          </span>
        </div>
      <div class="b-footer__group b-footer__group_3">
        <span v-for="(item, index) in $sectionData.links" :key="index">
          <a @click.prevent="openLink(item)" :target="$sectionData.links[index].element.target" class="b-footer__link"
            :class="`$sectionData.links[${index}].button.classes`"
            :href="$sectionData.links[index].element.href"
            v-html="$sectionData.links[index].element.text"
            v-styler:for="{ el:$sectionData.links[index].element, path: `$sectionData.links[${index}].element`}"
            :style="$sectionData.links[index].element.styles">
          </a>
        </span>
      </div>
    </footer>
  </section>
</template>

<script>
import * as types from '@plugins/Vuse/types'

export default {
  name: 'Footer',
  cover: '/img/covers/footer1.png',
  group: 'footers',
  $schema: {
    mainStyle: types.StyleObject,
    copyrights: [{
      element: types.Text
    }],
    images: [
      types.Image, types.Image
    ],
    links: [
      {
        element: types.Link
      },
      {
        element: types.Link
      },
      {
        element: types.Link
      }
    ]
  },
  props: {
    id: {
      type: Number, required: true
    }
  },
  methods: {
    openLink (el) {
      if (this.$builder.isEditing) return

      if (!el) {
        return
      }

      const href = el.href

      if (el && undefined !== href) {
        window.open(href)
      }
    }
  }
}
</script>

<style lang="sass">

.l-footer
  display: flex
  align-items: center
  position: relative
  width: 100%
  background-position: center
  background-size: cover
  color: #000
  padding: 1rem
  min-height: 6rem
  background: center url(https://gn510.cdn.gamenet.ru/TY0Xv2riHu/6nOTD/o_yT2c2.png) no-repeat
  &.is-editable
    resize: vertical
    overflow: hidden
.b-footer
  width: 100%
  display: flex
  align-items: center
  justify-content: center
  .is-tablet &,
  .is-mobile &
    flex-wrap: wrap
  @media only screen and (max-width: 768px)
    &
      flex-wrap: wrap
  &__group
    display: flex
    flex-wrap: wrap
    justify-content: center
    margin: 0 1rem 0.35rem 1rem
    .is-mobile &
      &_2
       order: 3
        margin: 2rem 0 0
      &_3
       order: 2
    @media only screen and (max-width: 768px)
      &
        &_2
          order: 3
          margin: 2rem 0 0
        &_3
          order: 2
    &-el
      display: block
      &-text
        display: block
  &__logo
    width: 8rem
    height: 8rem
    margin: 0 0.5rem
    display: flex
    align-items: center
    justify-content: center
    &.is-editable
      resize: both
      overflow: hidden
  &__link
    font-size: 1.4rem
    line-height: 1.8rem
    padding: 0 0.5rem
    text-decoration: underline
    cursor: pointer
</style>
