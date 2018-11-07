<template>
  <section class="slot">
      <button class="slot__tune" :class="{'active': showSettings}" @click.prevent="showList">
        <img src="https://gn337.cdn.stg.gamenet.ru/0/79ndM/o_DXxZz.svg" alt="">
      </button>
      <div class="slot__align" v-if="showSettings">
        <div>Horizontal</div>
        <ul class="slot__list">
          <li>
            <a href="#" @click.prevent="align({ 'justify-content': 'flex-start' })" tooltip-position="top" tooltip="Align left">
              <img src="https://gn696.cdn.stg.gamenet.ru/0/784bo/o_185fZr.svg" alt="">
            </a>
          </li>
          <li>
            <a href="#" @click.prevent="align({ 'justify-content': 'center' })" tooltip-position="top" tooltip="Align center">
              <img src="https://gn422.cdn.stg.gamenet.ru/0/784bL/o_NMJGv.svg" alt="">
            </a>
          </li>
          <li>
            <a href="#" @click.prevent="align({ 'justify-content': 'flex-end' })"  tooltip-position="top" tooltip="Align right">
              <img src="https://gn316.cdn.stg.gamenet.ru/0/784c0/o_1eRO2I.svg" alt="">
            </a>
          </li>
        </ul>
        <div>Vertical</div>
        <ul class="slot__list">
          <li>
            <a href="#" @click.prevent="align({ 'align-items': 'flex-start' })"  tooltip-position="top" tooltip="Align top">
              <img src="https://gn283.cdn.stg.gamenet.ru/0/784cH/o_1YHzH4.svg" alt="">
            </a>
          </li>
          <li>
            <a href="#" @click.prevent="align({ 'align-items': 'center' })" tooltip-position="top" tooltip="Align center">
              <img src="https://gn923.cdn.stg.gamenet.ru/0/784cr/o_Y3r1q.svg" alt="">
            </a>
          </li>
          <li>
            <a href="#" @click.prevent="align({ 'align-items': 'flex-end' })" tooltip-position="top" tooltip="Align bottom">
              <img src="https://gn738.cdn.stg.gamenet.ru/0/783tv/o_1N0F0t.svg" alt="">
            </a>
          </li>
        </ul>
        <div>Direction</div>
        <ul class="slot__list">
          <li>
            <a href="#" @click.prevent="align({ 'flex-direction': 'row' })" tooltip-position="top" tooltip="Row">
              <img src="https://gn708.cdn.stg.gamenet.ru/0/786Mc/o_19bvcb.svg" alt="" style="transform: rotate(90deg)">
            </a>
          </li>
          <li>
            <a href="#" @click.prevent="align({ 'flex-direction': 'column' })" tooltip-position="top" tooltip="Column">
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
    showElements: false
  }),
  methods: {
    align (data) {
      this.styles = Object.assign(this.styles, this.$section.get(this.path + '.styles'), data)
      this.$section.set(this.path, { styles: this.styles })
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
  justify-content: center
  align-items: center
  max-width: 100rem
  position: relative
  width: 100%
  height: 100%
  .is-editable &
    border: 1px dashed $green
  &__align
    width: 110px
    position: absolute
    z-index: 20
    right: -110px
    top: 0
    background: $color-form-text
    color: #fff
    padding: 10px 10px 0
    border-radius: 0 4px 4px 4px
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
