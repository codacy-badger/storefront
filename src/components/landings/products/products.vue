<template>
  <section class="l-products" v-styler:section="$sectionData.mainStyle" :class="$sectionData.mainStyle.classes" v-bind:style="$sectionData.mainStyle.styles">
      <div class="b-products">
        <div class="b-products-list flex flex_justify-content-center flex_align-items-start">
          <div class="b-products-list__item flex flex_columns"
            v-for="(item, index) in $sectionData.products"
            :key="index"
            v-styler:product="{el: $sectionData.products[index].el, path: `$sectionData.products[${index}].el`, type: 'product'}"
            :style="$sectionData.products[index].el.styles"
          >
            <div class="b-products-list__item-label" contenteditable="true"
                 v-styler:for="{ el: $sectionData.products[index].label, path:`$sectionData.products[${index}].label`, type: 'text' }"
                 v-html="$sectionData.products[index].label.text"
                 :style="$sectionData.products[index].label.styles"
                 v-bind:class="$sectionData.products[index].label.classes"
              >
            </div>
            <div class="b-products-list__item-image"
                 v-styler:for="{el: $sectionData.products[index].preview, path: `$sectionData.products[${index}].preview`}"
                 :style="$sectionData.products[index].preview.styles"
              >
            </div>
            <div class="b-products-list__item-wrap">
              <div>
                <span class="b-products-list__item-name" contenteditable="true"
                  v-styler:for="{ el: $sectionData.products[index].name, path:`$sectionData.products[${index}].name`, type: 'text' }"
                  v-html="$sectionData.products[index].name.text"
                  :style="$sectionData.products[index].name.styles"
                  >
                </span>
              </div>
              <div>
                <span class="b-products-list__item-title" contenteditable="true"
                  v-styler:for="{ el: $sectionData.products[index].title, path:`$sectionData.products[${index}].title`, type: 'text' }"
                  v-html="$sectionData.products[index].title.text"
                  :style="$sectionData.products[index].title.styles"
                  >
                </span>
              </div>
              <div>
                <span class="b-products-list__item-button" contenteditable="true"
                  v-styler:for="{ el: $sectionData.products[index].button, path:`$sectionData.products[${index}].button`, type: 'button' }"
                  v-html="$sectionData.products[index].button.text"
                  @click.prevent="openLink(item)" :target="$sectionData.products[index].button.target"
                  :style="$sectionData.products[index].button.styles"
                  v-bind:class="$sectionData.products[index].button.classes"
                  :href="$sectionData.products[index].button.href"
                  >
                </span>
              </div>
              <div>
                  <div class="b-products-list__item-block" v-for="(keyB, indexB) in $sectionData.products[index].blocks" :key="index + indexB">
                    <div class="b-products-list__item-row flex flex_center">
                        <div class="b-products-list__item-col b-products-list__item-col_text">
                          <div class="b-products-list__item-row-chapter" contenteditable="true"
                            v-styler:for="{ el: $sectionData.products[index].blocks[indexB].chapter, path:`$sectionData.products[${index}].blocks[${indexB}].chapter`, type: 'text' }"
                            v-html="$sectionData.products[index].blocks[indexB].chapter.text"
                            :style="$sectionData.products[index].blocks[indexB].chapter.styles"
                            >
                          </div>
                        </div>
                        <div class="b-products-list__item-col is-editable-show">
                          <span v-if="indexB !== $sectionData.products[index].blocks.length-1" tooltip-position="left" tooltip="remove block" class="b-products-list__item-col-delete is-editable-show"
                                @click="deleteBlock(index, indexB)"
                            >
                            <VuseIcon class="vuse-icon" name="close"></VuseIcon>
                          </span>
                          <span v-if="indexB === $sectionData.products[index].blocks.length-1" tooltip-position="left" tooltip="add block" class="b-products-list__item-col-add is-editable-show"
                                @click="addBlock(index, indexB)"
                            >
                            <VuseIcon class="vuse-icon" name="plus"></VuseIcon>
                          </span>
                        </div>
                    </div>
                    <div class="b-products-list__item-row flex" v-for="(keyR, indexR) in $sectionData.products[index].blocks[indexB].rows" :key="index + indexB + indexR">
                      <div class="b-products-list__item-col b-products-list__item-col_icon">
                        <div class="b-products-list__item-col-icon">
                            <button class="b-products-list__item-col-icon-btn controller-button is-green"
                              v-styler:for="{ el: $sectionData.products[index].blocks[indexB].rows[indexR].icon.type, path:`$sectionData.products[${index}].blocks[${indexB}].rows[${indexR}].icon.type`, type: 'icon' }"
                              :style="$sectionData.products[index].blocks[indexB].rows[indexR].icon.type.styles"
                              v-bind:class="$sectionData.products[index].blocks[indexB].rows[indexR].icon.type.classes"
                              >
                              <VuseIcon class="b-products-list__item-col-icon-i" :name="$sectionData.products[index].blocks[indexB].rows[indexR].icon.value"></VuseIcon>
                            </button>
                            <select class="b-products-list__item-col-icon-select is-editable-show" v-model="$sectionData.products[index].blocks[indexB].rows[indexR].icon.value">
                              <option v-for="option in $sectionData.products[index].blocks[indexB].rows[indexR].options" :value="option.value" :key="index + indexB + indexR + option.value">
                                {{ option.value }}
                              </option>
                            </select>
                        </div>
                      </div>
                      <div class="b-products-list__item-col b-products-list__item-col_text">
                        <div contenteditable="true" class=""
                          v-styler:for="{ el: $sectionData.products[index].blocks[indexB].rows[indexR].text, path:`$sectionData.products[${index}].blocks[${indexB}].rows[${indexR}].text`, type: 'text' }"
                          v-html="$sectionData.products[index].blocks[indexB].rows[indexR].text.text"
                          :style="$sectionData.products[index].blocks[indexB].rows[indexR].text.styles"
                         >
                        </div>
                      </div>
                      <div class="b-products-list__item-col is-editable-show">
                        <span v-if="indexR !== $sectionData.products[index].blocks[indexB].rows.length-1" tooltip-position="left" tooltip="remove row" class="b-products-list__item-col-delete is-editable-show"
                          @click="deleteRow(index, indexB, indexR)"
                          >
                          <VuseIcon class="vuse-icon" name="close"></VuseIcon>
                        </span>
                        <span v-if="indexR === $sectionData.products[index].blocks[indexB].rows.length-1" tooltip-position="left" tooltip="add row" class="b-products-list__item-col-add is-editable-show"
                              @click="addRow(index, indexB, indexR)"
                          >
                          <VuseIcon class="vuse-icon" name="plus"></VuseIcon>
                        </span>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
import * as types from '@editor/types'
import VuseIcon from '@editor/components/VuseIcon'
import Seeder from '@editor/seeder'
import * as _ from 'lodash-es'

const ICONS = [
  { value: 'plus' },
  { value: 'close' }
]

const ROW = {
  icon: { value: 'plus', type: types.Icon }, text: types.Text, options: ICONS.slice()
}

const BLOCK = {
  chapter: types.Text,
  rows: [
    _.merge({}, ROW),
    _.merge({}, ROW)
  ]
}

const PRODUCT = {
  el: types.Product,
  visible: true,
  preview: types.ImageNoResize,
  label: types.Label,
  name: types.Text,
  title: types.Text,
  button: types.Button,
  blocks: [
    _.merge({}, BLOCK),
    _.merge({}, BLOCK)
  ]
}

export default {
  name: 'Products',
  components: {
    VuseIcon
  },
  cover: '/img/covers/products.png',
  group: 'products',
  $schema: {
    mainStyle: types.StyleObject,
    products: [
      _.merge({}, PRODUCT),
      _.merge({}, PRODUCT)
    ]
  },
  props: {
    id: {
      type: Number,
      required: true
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
    },
    deleteRow (index, indexB, indexR) {
      this.$sectionData.products[index].blocks[indexB].rows.splice(indexR, 1)
    },
    addRow (index, indexB, indexR) {
      let newRow = Seeder.seed(_.merge({}, ROW))
      this.$sectionData.products[index].blocks[indexB].rows.push(newRow)
    },
    deleteBlock (index, indexB) {
      this.$sectionData.products[index].blocks.splice(indexB, 1)
    },
    addBlock (index, indexB) {
      let newBlock = _.merge({}, Seeder.seed(BLOCK))
      this.$sectionData.products[index].blocks.push(newBlock)
    }
  }
}
</script>

<style lang="sass" scoped="scoped">
@import '../../../assets/sass/_flex.sass'

.l-products
  position: relative
  width: 100%
  background-position: center
  background-size: cover
  color: #000
  padding: 3rem 0 1rem
  min-height: 12rem
  height: auto
.b-products
  display: flex
  align-items: center
  padding: 1rem
  max-width: 160rem
  width: 80%
  margin: 0 auto
  .is-mobile &,
  .is-tablet &
    width: 95%
  @media only screen and (max-width: 768px)
    &
      width: 95%
      height: auto !important
  &-list
    margin-bottom: 1rem
    .is-mobile &,
    .is-tablet &
      flex-wrap: wrap
    @media only screen and (max-width: 768px)
      &
        flex-wrap: wrap
    &__item
      max-width: 100%
      width: 23rem
      min-width: 20rem
      min-height: 60rem
      margin: 1rem 0.5rem
      padding: 0
      position: relative
      overflow: hidden
      &.is-editable
        resize: both
        .is-mobile &,
        .is-tablet &
          resize: vertical
        @media only screen and (max-width: 768px)
          &
            fresize: vertical
      &-wrap
        padding: 2rem
      &-image
        width: 100%
        margin: 0 auto
        height: 15rem
        min-height: 15rem
        overflow: hidden
        background-color: #fff
        background-image: url('https://gn652.cdn.gamenet.ru/TY0Xv2riHu/772iV/o_cDot3.png')
      &-name
        font-size: 3rem
        line-height: 1.4
        width: 100%
        color: #18d88b
        display: block
        text-align: center
      &-title
        font-size: 1.4rem
        line-height: 1.4
        width: 100%
        color: #fff
        display: block
        text-align: center
      &-button
        position: relative
        font-size: 2rem
        font-family: 'Open Sans'
        width: 15rem
        min-width: 6rem
        min-height: 2rem
        margin: 1rem auto
        padding: 0.5rem 1rem
        color: #fff
        background-color: #18d88b
        display: flex
        align-items: center
        justify-content: center
        flex-direction: column
        user-select: none
        cursor: pointer
        transition: background-color 300ms
        &:hover
          filter: brightness(120%)
        &:active
          filter: brightness(50%)
        &.is-editable
          resize: both
          overflow: hidden
      &-label
        position: absolute
        left: 0
        top: 0
        z-index: 1000
        padding: 0.5rem 1rem
        background-color: #18d88b
        color: #fff
        width: auto
        height: auto
        display: flex
        align-items: center
        justify-content: center
        &.is-editable
          resize: both
          overflow: hidden
      &-block
        margin: 3rem 0 1rem
        border-top: dotted rgba(255, 255, 255, 0.3) 0.1rem
        padding: 1rem 0
      &-row
        margin: 0 0 1rem
        &-chapter
          color: #fff
          text-align: center
          font-size: 1.6rem
          line-height: 1.4
      &-col
        &_icon
          width: 3rem
          padding: 0 1rem 0 0
        &_text
          color: #F8E71C
          width: 100%
          overflow: hidden
          .b-products-list__item-block:nth-child(2) &
            color: #9B9B9B
        &-icon
          position: relative
          &-btn
            width: 2rem
            height: 2rem
            display: inline-block
            position: relative
            top: -0.2rem
            padding: 0
            fill: #F8E71C
            .b-products-list__item-block:nth-child(2) &
              fill: #9B9B9B
          &-select
            position: absolute
            width: 2rem
            left: -2rem
            top: 0
            display: none
            .is-editable &
              display: block
        &-delete
          fill: #F44336
          color: #F44336
        &-add
          fill: #FFC107
          color: #FFC107

.is-editable-show
  display: none
  .is-editable &
    display: inline-block

</style>
