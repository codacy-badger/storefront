<template>
  <section class="slot">
      <button class="slot__tune ptah-control" :class="{'active': showSettings}" @click.prevent="showList">
        <img src="https://gn337.cdn.stg.gamenet.ru/0/79ndM/o_DXxZz.svg" alt="">
      </button>
      <div class="slot__align ptah-control" v-if="showSettings">
        <div>{{ dir[0].title }}</div>
        <ul class="slot__list">
          <li>
            <a href="#" @click.prevent="align({ 'justify-content': 'flex-start' })" tooltip-position="top" tooltip="Align left">
              <img :src="dir[0].img1" alt="">
            </a>
          </li>
          <li>
            <a href="#" @click.prevent="align({ 'justify-content': 'center' })" tooltip-position="top" tooltip="Align center">
              <img :src="dir[0].img2" alt="">
            </a>
          </li>
          <li>
            <a href="#" @click.prevent="align({ 'justify-content': 'flex-end' })"  tooltip-position="top" tooltip="Align right">
              <img :src="dir[0].img3" alt="">
            </a>
          </li>
        </ul>
        <div>{{ dir[1].title }}</div>
        <ul class="slot__list">
          <li>
            <a href="#" @click.prevent="align({ 'align-items': 'flex-start' })"  tooltip-position="top" tooltip="Align top">
              <img :src="dir[1].img1" alt="">
            </a>
          </li>
          <li>
            <a href="#" @click.prevent="align({ 'align-items': 'center' })" tooltip-position="top" tooltip="Align center">
              <img :src="dir[1].img2" alt="">
            </a>
          </li>
          <li>
            <a href="#" @click.prevent="align({ 'align-items': 'flex-end' })" tooltip-position="top" tooltip="Align bottom">
              <img :src="dir[1].img3" alt="">
            </a>
          </li>
        </ul>
        <div>Direction</div>
        <ul class="slot__list">
          <li>
            <a href="#" @click.prevent="align({ 'flex-direction': 'row' }, 'row')" tooltip-position="top" tooltip="Row">
              <img src="https://gn708.cdn.stg.gamenet.ru/0/786Mc/o_19bvcb.svg" alt="" style="transform: rotate(90deg)">
            </a>
          </li>
          <li>
            <a href="#" @click.prevent="align({ 'flex-direction': 'column' }, 'column')" tooltip-position="top" tooltip="Column">
              <img src="https://gn708.cdn.stg.gamenet.ru/0/786Mc/o_19bvcb.svg" alt="">
            </a>
          </li>
        </ul>
      </div>

      <slot>

      </slot>
  </section>
</template>

<script>
import { correctArray } from '@editor/util'

export default {
  name: 'Sandbox',
  inject: ['$builder', '$section'],
  props: {
    path: {
      type: String,
      required: true
    }
  },
  data: () => ({
    styles: {},
    showSettings: false,
    showElements: false,
    dir: [
      {
        title: 'Horizontal',
        img1: 'https://gn696.cdn.stg.gamenet.ru/0/784bo/o_185fZr.svg',
        img2: 'https://gn422.cdn.stg.gamenet.ru/0/784bL/o_NMJGv.svg',
        img3: 'https://gn316.cdn.stg.gamenet.ru/0/784c0/o_1eRO2I.svg'
      },
      {
        title: 'Vertical',
        img1: 'https://gn283.cdn.stg.gamenet.ru/0/784cH/o_1YHzH4.svg',
        img2: 'https://gn923.cdn.stg.gamenet.ru/0/784cr/o_Y3r1q.svg',
        img3: 'https://gn738.cdn.stg.gamenet.ru/0/783tv/o_1N0F0t.svg'
      }
    ]
  }),
  methods: {
    align (data, dir) {
      this.styles = Object.assign(this.styles, this.$section.get(this.path + '.styles'), data)
      this.$section.set(this.path, { styles: this.styles })

      if ((!!dir && dir === 'column' && this.dir[0].title === 'Horizontal') || (!!dir && dir === 'row' && this.dir[0].title === 'Vertical')) {
        correctArray(this.dir, [0, 1])
      }
    },
    showList () {
      this.showSettings = true
      document.addEventListener('click', this.hideList, true)
    },
    hideList () {
      this.showSettings = false
      document.removeEventListener('click', this.hideList, true)
    }
  }
}
</script>

<style lang="sass">
.slot
  display: flex
  flex-wrap: wrap
  justify-content: center
  align-items: center
  max-width: 100rem
  position: relative
  width: 100%
  .is-editable &
    border: 1px dashed $green
  &__align
    width: 110px
    position: absolute
    z-index: 20
    right: 30px
    top: 0
    background: $color-form-text
    color: #fff
    padding: 10px 10px 0
    border-radius: 4px 0px 4px 4px
  &__list
    display: flex
    list-style: none
    margin: 5px 0 15px 0
    padding: 0
    li
      margin: 5px 10px 5px 0
      padding: 0px
    a
      display: flex
      width: 20px
      height: 20px
      justify-content: center
      align-items: center
      background: #f5f5f5
      border-radius: 4px
      &:hover
        background: #fff
      img
        max-width: 100%
  &__tune
    background: lighten($color-form-text, 20%)
    border: none
    width: 30px
    height: 30px
    display: flex
    justify-content: center
    align-items: center
    position: absolute
    top: 0px
    right: 0px
    padding: 5px
    cursor: pointer
    &:hover, &.active
      background: $color-form-text
    img
      width: 20px
      height: 20px
  &__elements
    background: lighten($color-form-text, 20%)
    border: none
    width: 30px
    height: 30px
    display: flex
    justify-content: center
    align-items: center
    position: absolute
    top: 30px
    right: 0px
    padding: 5px
    cursor: pointer
    &:hover, &.active
      background: $color-form-text
</style>
