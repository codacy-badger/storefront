<template>
  <section class="b-layout-1"
           v-styler:section="$sectionData.mainStyle"
           :class="$sectionData.mainStyle.classes"
           v-bind:style="$sectionData.mainStyle.styles">
    <div class="b-layout-1__wrap">
      <div class="b-layout-1__content">
        <div class="b-layout-1__panel">
          <div class="b-layout-1__panel__wrap">
            <div class="b-layout-1__panel__section">
              <uploader class="b-layout-1__panel__logo-img" path="$sectionData.logos[0].path"
                :title="$sectionData.logos[0].alt" :alt="$sectionData.logos[0].alt"></uploader>
            </div>
            <div class="b-layout-1__panel__section">
              <div class="b-layout-1__panel__title" v-styler="$sectionData.slogan[0].text"
                   v-text="$sectionData.slogan[0].title"></div>
              <div class="b-layout-1__panel__title panel__title_big" v-styler="$sectionData.slogan[1].text"
                   v-text="$sectionData.slogan[1].title"></div>
            </div>

            <div class="b-layout-1__panel__section">
              <ul class="b-layout-1__panel__features">
                <li class="b-layout-1__panel__feature" v-for="(item, index) in $sectionData.titles" :key="index">
                  <span v-styler:index="`$sectionData.titles[${index}].title`">
                      {{ $sectionData.titles[index].text }}
                  </span>
                </li>
              </ul>
            </div>
            <div class="b-layout-1__panel__section b-layout-1__panel__section_grow">
              <a v-for="(item, index) in $sectionData.buttons" :key="index" class="b-layout-1__b-button" @click.prevent="onClick"
                 :href="$sectionData.buttons[index].button.href"
                 v-html="$sectionData.buttons[index].button.text"
                 v-styler:index="`$sectionData.buttons[${index}].button`"
                 :style="$sectionData.buttons[index].button.styles">
              </a>
            </div>
            <div class="b-layout-1__panel__section">
              <footer class="b-layout-1__footer">
                <div class="b-layout-1__footer__group">
                  <uploader class="b-layout-1__footer__el b-layout-1__footer__el_logo"
                            path="$sectionData.logos[1].path" :title="$sectionData.logos[1].alt"
                            :alt="$sectionData.logos[1].alt"></uploader>
                  <span class="b-layout-1__footer__el">
                    <span v-text="$sectionData.copyright.title"
                          v-styler="$sectionData.copyright.text">
                      2018-2018 gamesite.com
                    </span>
                  </span>
                </div>
                <div class="b-layout-1__footer__group b-layout-1__footer__group_light">
                  <span v-for="(item, index) in $sectionData.links" :key="index">
                      <a @click.prevent="openLink(item)" :class="`$sectionData.links[${index}].button.classes`"
                         class="b-layout-1__footer__el b-layout-1__footer__el_link"
                         :href="item.href" v-html="item.text"
                         v-styler:index="`$sectionData.links[${index}].button`"
                         :style="$sectionData.links[index].button.styles">
                      </a>
                  </span>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import * as types from '@plugins/Vuse/types'

export default {
  name: 'Layout1',
  cover: 'img/covers/layout1.png',
  group: 'layouts',
  $schema: {
    mainStyle: types.StyleObject,
    age: {
      title: '18+',
      text: types.Text
    },
    copyright: {
      title: '2018-2018 gamesite.com',
      text: types.Text
    },
    buttons: [
      {
        text: 'Play Now',
        href: '#',
        button: types.Button
      }
    ],
    titles: [
      {
        text: 'Modern 3D graphics in the browser',
        title: types.Title
      },
      {
        text: 'Create multiple characters on the server',
        title: types.Title
      },
      {
        text: 'Wide opportunities for pumping the hero',
        title: types.Title
      }
    ],
    slogan: [
      {
        title: 'CaLL',
        text: types.Text
      },
      {
        title: 'to action!',
        text: types.Text
      }
    ],
    logos: [
      {
        path: 'https://gn616.cdn.gamenet.ru/TY0Xv2riHu/6nOTs/o_1My2mo.png',
        alt: 'Default Logo',
        logo: types.Logo
      },
      {
        path: 'https://gn839.cdn.gamenet.ru/TY0Xv2riHu/6nOU5/o_21POBx.png',
        alt: 'Default Logo',
        logo: types.Logo
      }
    ],
    links: [
      {
        text: 'Catalog of games',
        button: types.Button
      },
      {
        text: 'Support',
        button: types.Button
      },
      {
        text: 'Rules',
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
    onClick () {
      /* if (this.$builder.isEditing) return

      const endpoint = this.$sectionData.buttons[0].href
      console.info(endpoint) */
    },
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
.b-layout-1
  ::-moz-selection
    background: #ffe421
    color: #fff

  ::selection
    background: #ffe421
    color: #fff

  ::-moz-selection
    background: #ffe421
    color: #fff

@media only screen and (max-width: 768px)
  .g-hidden-tab
    display: none

@media only screen and (max-width: 540px)
  .g-hidden-mobile
    display: none

body
  line-height: 1
  color: #000
  background-color: #fff
  font-size: 1rem
  margin: 0
  font-family: Georgia, serif
  font-weight: normal
  font-style: normal
  -webkit-font-smoothing: subpixel-antialiased
  -moz-osx-font-smoothing: auto
.b-layout-1
  position: relative
  min-height: 100vh
  background: center url(https://gn510.cdn.gamenet.ru/TY0Xv2riHu/6nOTD/o_yT2c2.png) no-repeat
  background-size: cover
  &__wrap
    position: relative
    width: 100%
    max-width: 106rem
    padding: 0 2rem
    margin: 0 auto
    min-height: 100vh
    display: -webkit-box
    display: -ms-flexbox
    display: flex
    -webkit-box-orient: vertical
    -webkit-box-direction: normal
    -ms-flex-direction: column
    flex-direction: column
    @media only screen and (max-width: 768px)
      &__wrap
        padding: 0 1rem
  &__content
    -webkit-box-flex: 1
    -ms-flex-positive: 1
    flex-grow: 1

  &__b-button
    position: relative
    display: block
    font-size: 2.4rem
    line-height: 2.4rem
    color: #442a10
    text-align: center
    background-color: #ffe421
    border: 1px solid #ffe663
    border-radius: 0.2rem
    box-shadow: inset 0 0 2.5rem #ffba21, 0 0 2.5rem #e45b00
    cursor: pointer
    -webkit-user-select: none
    -moz-user-select: none
    -ms-user-select: none
    padding: 2rem 3rem
    user-select: none
    display: flex
    align-items: center
    justify-content: center
    margin: 1rem 0
    @media only screen and (max-width: 540px)
      &
        padding: 1rem
    &:hover
      background-color: #ffef7c
      box-shadow: inset 0 0 2.5rem #ffba21, 0 0 3.5rem #e45b00
    &.is-editable
      resize: both
      overflow: hidden

  &__footer
    font-family: Arial, sans-serif
    font-size: 1.1rem
    color: #000
    &__group
      display: -webkit-box
      display: -ms-flexbox
      display: flex
      -ms-flex-wrap: wrap
      flex-wrap: wrap
      -webkit-box-pack: center
      -ms-flex-pack: center
      justify-content: center
      margin-bottom: 0.35rem
      &:last-child
        margin-bottom: 0
    &__el
      margin-right: 1rem
      margin-bottom: 0.5rem
      -webkit-box-flex: 0
      -ms-flex-positive: 0
      flex-grow: 0
      -ms-flex-negative: 0
      flex-shrink: 0
      &_logo
        width: 11.6rem
        margin-bottom: 0
        @media only screen and (max-width: 540px)
          &
            width: 8rem
      &_link
        line-height: 1.15
        border-bottom: 1px solid
        margin: 0 0.5rem
        white-space: nowrap
        &:hover
          border-bottom: 1px solid transparent
      &_age
        font-size: 1.4rem
      &:last-child
        margin-right: 0

      @media only screen and (max-width: 1600px)
        &_logo
          margin-bottom: 0.5rem

  &__panel
    height: 100vh
    background-color: rgba(96, 125, 139, 0.75)
    width: 40%
    padding: 0 0.3rem
    color: #fff
    line-height: 1
    @media only screen and (max-width: 540px)
      &
        width: 100%
    &__wrap
      display: -webkit-box
      display: -ms-flexbox
      display: flex
      -webkit-box-orient: vertical
      -webkit-box-direction: normal
      -ms-flex-direction: column
      flex-direction: column
      padding: 3rem 4.5rem
      height: 100%
      border-left: 1px dotted rgba(162, 143, 123, 0.5)
      border-right: 1px dotted rgba(162, 143, 123, 0.5)
      @media only screen and (max-width: 540px)
        &
          padding: 1rem
    &__section
      margin-bottom: 3rem
      &_grow
        -webkit-box-flex: 1
        -ms-flex-positive: 1
        flex-grow: 1
    &__section:last-child
      margin-bottom: 0
    &__logo-img
      display: block
      margin: 2rem auto 0
      max-width: 80%
      @media only screen and (max-width: 540px)
        &
          margin: 1rem auto
    &__title
      font-size: 2.4rem
      text-align: center
    &__title_big
      font-size: 3.5rem
      text-transform: uppercase
      @media only screen and (max-width: 540px)
        &
          font-size: 2rem
    &__features
      font-size: 1.9rem
      list-style: none
      padding-left: 3.5rem
      margin: 0 0 1rem 0
      @media only screen and (max-width: 540px)
        &
          font-size: 1.4rem
    &__feature
      margin-bottom: 0.5em
      position: relative
      display: block
    &__feature:before
      content: ''
      position: absolute
      display: block
      left: -3.5rem
      top: 0.4em
      width: 2.3rem
      height: 1.2rem
      margin-top: -0.6rem
      background: url("https://gn818.cdn.gamenet.ru/TY0Xv7cuq8/40uC7/o_27kZ5F.png")
  a, a:hover
    color: inherit
</style>
