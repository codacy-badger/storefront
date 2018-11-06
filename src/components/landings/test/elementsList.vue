<template>
  <div class="ptah-elements">
    <button class="ptah-elements__show-list" @click="openList" :class="{'active': showList}">
      <img src="https://gn423.cdn.stg.gamenet.ru/0/79nas/o_1mRf76.svg" alt="">
    </button>
    <aside class="ptah-elements__list" v-if="showList">
      <ul>
        <li><a href="#" @click.prevent="addButton" class="ptah-elements__button">Add button</a></li>
        <li><a href="#" @click.prevent="addTitle" class="ptah-elements__button">Add title</a></li>
      </ul>
    </aside>
  </div>
</template>

<script>
import * as types from '@editor/types'
import Seeder from '@editor/seeder'

export default {
  name: 'ElementsList',
  props: {
  },
  data: () => ({
    showList: false,
    elements: [
      {
        name: 'PartButton',
        element: types.Button
      },
      {
        name: 'PartTitle',
        element: types.Text
      }
    ]
  }),
  created () {
    this.elements = Seeder.seed(this.elements)
  },
  methods: {
    addButton () {
      const el = JSON.parse(JSON.stringify(this.elements[0]))
      this.$emit('addEl', el)
    },
    addTitle () {
      const el = JSON.parse(JSON.stringify(this.elements[1]))
      this.$emit('addEl', el)
    },
    openList () {
      this.showList = true
      document.addEventListener('click', this.hideList, true)
    },
    hideList () {
      this.showList = false
      document.removeEventListener('click', this.hideList, true)
    }
  }
}
</script>

<style lang="sass">
  .ptah-elements
    position: absolute
    top: 30px
    right: 0
    &__show-list
      border: none
      background: lighten($color-form-text, 20%)
      width: 30px
      height: 30px
      display: flex
      justify-content: center
      align-items: center
      padding: 5px
      cursor: pointer
      &:hover, &.active
        background: $color-form-text
    &__list
      width: 110px
      position: absolute
      z-index: 20
      right: -110px
      top: 0px
      background: $color-form-text
      color: #fff
      padding: 10px 10px 0
      border-radius: 0 4px 4px 4px
      ul
        margin: 0
        padding: 0
        list-style: none
      li
        padding-bottom: 5px
    &__button
      display: flex
      justify-content: center
      align-items: center
      background: $dark
      color: white
      border-radius: 4px
      padding: 8px 5px
      width: 100%
</style>
