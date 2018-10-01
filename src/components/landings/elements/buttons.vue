<template>
    <section class="pages__page pages__page_main layout2" v-styler:section="$sectionData.mainStyle" :class="$sectionData.mainStyle.classes"
             v-bind:style="$sectionData.mainStyle.styles">
        <div class="pages__bg p-bg">
            <div class="p-bg__cont">

            </div>
        </div>
        <div class="pages__wrap flex flex_columns flex_center ie-height-fix">
            <div class="flex__item flex flex_center">
                <div class="l-btn-lp1">
                    <a class="b-btn-lp1" target="_blank"
                       v-styler="$sectionData.buttons[0].button"
                       v-html="$sectionData.buttons[0].button.text"
                       :href="$sectionData.buttons[0].button.href"
                       v-bind:style="$sectionData.buttons[0].button.styles"
                       >
                    </a>
                </div>
            </div>
            <div class="flex__item flex flex_center">
                <div class="l-btn-lp2">
                    <a class="b-btn-lp2" target="_blank"
                       v-styler="$sectionData.buttons[1].button"
                       v-html="$sectionData.buttons[1].text"
                       :href="$sectionData.buttons[1].button.href"
                       v-bind:style="$sectionData.buttons[1].button.styles"
                       >
                    </a>
                </div>
            </div>
            <div class="flex__item flex flex_center">
                <div class="l-btn-lp1">
                    <a class="b-btn-lp1 b-btn-lp1_circle" target="_blank"
                       v-styler="$sectionData.buttons[2].button"
                       v-html="$sectionData.buttons[2].text"
                       :href="$sectionData.buttons[2].button.href"
                       v-bind:style="$sectionData.buttons[2].button.styles"
                       >
                    </a>
                </div>
            </div>
            <div class="flex__item flex flex_center">
                <div class="l-btn-lp2">
                    <a class="b-btn-lp2 b-btn-lp2_bg-girls" target="_blank"
                       v-styler="$sectionData.buttons[3].button"
                       v-html="$sectionData.buttons[3].text"
                       :href="$sectionData.buttons[3].button.href"
                       v-bind:style="$sectionData.buttons[3].button.styles"
                            >
                    </a>
                </div>
            </div>
            <div class="flex__item flex flex_center">
                <div class="l-btn-lp3">
                    <a class="b-btn-lp3" target="_blank"
                       v-styler="$sectionData.buttons[4].button"
                       v-html="$sectionData.buttons[4].button.text"
                       :href="$sectionData.buttons[4].button.href"
                       v-bind:style="$sectionData.buttons[4].button.styles"
                            >
                    </a>
                </div>
            </div>
            <div class="flex__item flex flex_center">
                <div class="l-btn-lp1">
                    <a class="b-btn-lp1 b-btn-lp1_anim" target="_blank"
                       v-styler="$sectionData.buttons[5].button"
                       v-html="$sectionData.buttons[5].button.text"
                       :href="$sectionData.buttons[5].button.href"
                       v-bind:style="$sectionData.buttons[5].button.styles"
                       >
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import * as types from '@plugins/Vuse/types'

export default {
  name: 'Buttons',
  cover: '/img/covers/social1.png',
  group: 'buttons',
  $schema: {
    mainStyle: types.StyleObject,
    title: types.Title,
    content: types.Text,
    images: [types.Image],
    buttons: [
      {
        text: 'Play Now',
        button: types.Button
      },
      {
        text: 'DOWNLOAD',
        button: types.Button
      },
      {
        text: 'Play Now',
        button: types.Button
      },
      {
        text: 'Play Free',
        button: types.Button
      },
      {
        text: 'Play',
        button: types.Button
      },
      {
        text: 'Click me please',
        button: types.Button
      }
    ]
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  methods: {

  }
}
</script>

<style lang="sass">
  // btn-lp1
  .l-btn-lp1
    width: 100%
    min-height: 10rem
    position: relative
    margin: 2rem 0
  .b-btn-lp1
    position: relative
    font-size: 2.3rem
    line-height: 1
    min-width: 5rem
    width: 20rem
    padding: 2rem
    color: #000
    margin: 0 auto
    background-color: #ffba00
    border: transparent solid  0
    border-color: #ffba00
    text-transform: uppercase
    user-select: none
    cursor: pointer
    display: flex
    align-items: center
    justify-content: center
    &:before
      content: ''
      position: absolute
      display: block
      border: transparent solid  0.2rem
      border-color: inherit
      top: -0.5rem
      right: -0.5rem
      bottom: -0.5rem
      left: -0.5rem
      pointer-events: none
      transition: all 200ms
      backface-visibility: hidden
      z-index: -1
    &_circle
      border-radius: 50%
      height: 20rem
      color: #333
      background-color: #555
      &:before, &:after
        display: none
    &_anim
      animation: animation-bt-lp1 1s linear infinite
    &:hover
      filter: brightness(120%)
      &:before
        border: inherit solid  1px
        top: 0
        right: 0
        bottom: 0
        left: 0
    &:active
      filter: brightness(50%)
    &.is-editable
      resize: both
      overflow: hidden
  @media only screen and (max-width: 768px)
    &
      font-size: 2rem

  // btn-lp2
  .l-btn-lp2
    width: 100%
    min-height: 10rem
    position: relative
    margin: 2rem 0
  .b-btn-lp2
    position: relative
    font-size: 2.3rem
    line-height: 1
    min-width: 5rem
    width: 23.9rem
    height: 6.6rem
    padding: 2rem
    color: #a6e1e1
    margin: 0 auto
    border: transparent solid  0
    background-color: transparent
    background-image: url(https://gn881.cdn.gamenet.ru/TY0Xv2riHu/6stmF/o_1lLdjP.png)
    background-repeat: no-repeat
    background-position: center center
    background-size: cover
    text-transform: uppercase
    user-select: none
    cursor: pointer
    display: flex
    align-items: center
    justify-content: center
    transition: all 200ms
    &:hover
      filter: brightness(120%)
    &_bg-girls
      color: #000
      width: 55rem
      height: 10rem
      background-image: url(https://gn241.cdn.gamenet.ru/TY0Xv2riHu/6su7Z/o_hxR9B.png)
    &:active
      filter: brightness(50%)
    &.is-editable
      resize: both
      overflow: hidden
  @media only screen and (max-width: 768px)
    &
      font-size: 2rem
  @media only screen and (max-width: 768px)
    .b-btn-lp2_bg-girls
      width: 27rem
      height: 6rem

  // btn-lp3
  .l-btn-lp3
    width: 100%
    min-height: 10rem
    position: relative
    margin: 2rem 0
  .b-btn-lp3
    font-family: Georgia, "Times New Roman", Serif
    text-decoration: none
    font-size: 3rem
    background-color: #6eb979
    color: #fff
    text-transform: uppercase
    padding: 1.5rem 0 2rem 0
    width: 30rem
    cursor: pointer
    position: relative
    text-align: center
    margin: 0 auto
    transition: all 200ms
    display: flex
    align-items: center
    justify-content: center
    transition: all 200ms
    &.is-editable
      resize: both
      overflow: hidden

  .b-btn-lp3::before,
  .b-btn-lp3::after
    box-sizing: border-box
    content: ''
    position: absolute
    width: 100%
    height: 100%

  .b-btn-lp3
    transition: color 0.25s

  .b-btn-lp3::before,
  .b-btn-lp3::after
    border: 0.3rem solid transparent
    width: 0
    height: 0

  .b-btn-lp3::before
    top: 0
    left: 0

  .b-btn-lp3::after
    bottom: 0
    right: 0

  .b-btn-lp3:hover
    filter: brightness(120%)

  .b-btn-lp3:hover::before,
  .b-btn-lp3:hover::after
    width: 100%
    height: 100%

  .b-btn-lp3:hover::before
    border-top-color: #fff
    border-right-color: #fff
    transition: width 0.25s ease-out, height 0.25s ease-out 0.25s

  .b-btn-lp3:hover::after
    border-bottom-color: #fff
    border-left-color: #fff
    transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s, height 0.25s ease-out 0.75s

  @keyframes animation-bt-lp1
    0%
      transform: scale(1)
      filter: brightness(100%)
    20%
      transform: scale(1.2)
      filter: brightness(120%)
    40%
      transform: scale(1.1)
      filter: brightness(100%)
    60%
      transform: scale(1.2)
      filter: brightness(150%)
    80%
      transform: scale(1.1)
      filter: brightness(100%)
    90%
      transform: scale(1.4)
      filter: brightness(120%)
    90%
      transform: scale(1)
      filter: brightness(100%)
</style>
