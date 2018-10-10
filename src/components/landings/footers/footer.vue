<template>
  <section class="l-footer" v-styler:section="$sectionData.mainStyle" :class="$sectionData.mainStyle.classes" v-bind:style="$sectionData.mainStyle.styles">
    <footer class="b-footer">
      <div class="b-footer__group b-footer__group_1">
        <div class="b-footer__logo" v-for="(item, index) in $sectionData.images"
             v-styler:galleryItem="$sectionData.images[index]"
             :data-index="index"
             :key="index"
          >
          <img class="b-footer__logo-img" :src="$sectionData.images[index].preview" />
        </div>
      </div>
      <div class="b-footer__group b-footer__group_2">
          <span class="b-layout-1__footer__el">
            <span v-text="$sectionData.copyright.title" v-styler="$sectionData.copyright.text">
              2018-2018 gamesite.com
            </span>
          </span>
        </div>
      <div class="b-footer__group b-footer__group_3">
        <span v-for="(item, index) in $sectionData.buttons" :key="index">
          <a @click.prevent="openLink(item)" target="_blank" :class="`$sectionData.buttons[${index}].button.classes`"
            class="b-footer__link"
            :href="$sectionData.buttons[index].button.href" v-html="item.text"
            v-styler:index="`$sectionData.buttons[${index}].button`"
            :style="$sectionData.buttons[index].button.styles">
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
    copyright: {
      title: '2018-2018 gamesite.com',
      text: types.Text
    },
    images: [
      {
        preview: [types.Image],
        alt: 'Default Logo'
      },
      {
        preview: [types.Image],
        alt: 'Default Logo'
      }
    ],
    buttons: [
      {
        text: 'First link',
        button: types.Button
      },
      {
        text: 'Second',
        button: types.Button
      },
      {
        text: 'Third',
        button: types.Button
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
