<template>
  <section class="l-products" v-styler:section="$sectionData.mainStyle" :class="$sectionData.mainStyle.classes" v-bind:style="$sectionData.mainStyle.styles">
      <div class="b-products flex flex_center">
        <div class="b-products-left b-products-left_mobile flex flex_center">
          <div class="b-products-list b-products-list_mini flex flex_justify-content-center flex_align-items-start">
            <div class="b-products-list__item b-products-list__item_mini flex flex_columns"
                 v-for="(item, index) in $sectionData.products"
                 :key="index"
                 v-styler:product="{el: $sectionData.products[index].mini.el, path: `$sectionData.products[${index}].mini.el`}"
                 :style="$sectionData.products[index].mini.el.styles"
                 :data-index="index"
                 :product-extend-preview="'b-products-list__item_active'"
              >
              <div class="b-products-list__item-label"
                   v-styler:for="{ el: $sectionData.products[index].mini.label, path:`$sectionData.products[${index}].mini.label` }"
                   v-html="$sectionData.products[index].mini.label.text"
                   :style="$sectionData.products[index].mini.label.styles"
                   v-bind:class="$sectionData.products[index].mini.label.classes"
                >
              </div>
              <div class="b-products-list__item-image b-products-list__item-image_mini"
                   v-styler:for="{el: $sectionData.products[index].mini.preview, path: `$sectionData.products[${index}].mini.preview`}"
                   :style="$sectionData.products[index].mini.preview.styles"
                >
                <div class="b-products-list__item-image-img">
                  <uploader v-bind:path="'$sectionData.products[' + index + '].mini.preview'" />
                </div>
              </div>
              <div class="b-products-list__item-wrap">
                <div>
                  <div class="b-products-list__item-cost"
                        v-styler:for="{ el: $sectionData.products[index].mini.cost, path:`$sectionData.products[${index}].mini.cost` }"
                        v-html="$sectionData.products[index].mini.cost.text"
                        :style="$sectionData.products[index].mini.cost.styles"
                    >
                  </div>
                </div>
                <div>
                  <span class="b-products-list__item-name b-products-list__item-name_mini"
                    v-styler:for="{ el: $sectionData.products[index].mini.name, path:`$sectionData.products[${index}].mini.name` }"
                    v-html="$sectionData.products[index].mini.name.text"
                    :style="$sectionData.products[index].mini.name.styles"
                    >
                  </span>
                </div>
                <div>
                  <span class="b-products-list__item-title b-products-list__item-title_mini"
                        v-styler:for="{ el: $sectionData.products[index].mini.title, path:`$sectionData.products[${index}].mini.title` }"
                        v-html="$sectionData.products[index].mini.title.text"
                        :style="$sectionData.products[index].mini.title.styles"
                    >
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div><!--/.b-products-left-->
        <div class="b-products-right b-products-right_mobile">
          <div class="b-products-list flex flex_justify-content-center flex_align-items-start">
            <div class="b-products-list__item b-products-list__item_mobile flex flex_columns"
                 v-for="(item, index) in $sectionData.products"
                 :key="index"
                 v-styler:product="{el: $sectionData.products[index].el, path: `$sectionData.products[${index}].el`}"
                 :style="$sectionData.products[index].el.styles"
                 :product-extend-stage="index"
              >
              <div class="b-products-list__item-label"
                   v-styler:for="{ el: $sectionData.products[index].label, path:`$sectionData.products[${index}].label` }"
                   v-html="$sectionData.products[index].label.text"
                   :style="$sectionData.products[index].label.styles"
                   v-bind:class="$sectionData.products[index].label.classes"
                >
              </div>
              <div class="b-products-list__item-header flex">
                <div class="b-products-list__item-header-col">
                  <div>
                    <span class="b-products-list__item-name"
                      v-styler:for="{ el: $sectionData.products[index].name, path:`$sectionData.products[${index}].name` }"
                      v-html="$sectionData.products[index].name.text"
                      :style="$sectionData.products[index].name.styles"
                      >
                    </span>
                  </div>
                  <div>
                    <span class="b-products-list__item-title"
                      v-styler:for="{ el: $sectionData.products[index].title, path:`$sectionData.products[${index}].title` }"
                      v-html="$sectionData.products[index].title.text"
                      :style="$sectionData.products[index].title.styles"
                      >
                    </span>
                  </div>
                  <div>
                    <span class="b-products-list__item-button"
                      v-styler:for="{ el: $sectionData.products[index].button, path:`$sectionData.products[${index}].button` }"
                      v-html="$sectionData.products[index].button.text"
                      @click.prevent="openLink(item)" :target="$sectionData.products[index].button.target"
                      :style="$sectionData.products[index].button.styles"
                      v-bind:class="$sectionData.products[index].button.classes"
                      :href="$sectionData.products[index].button.href"
                      >
                    </span>
                  </div>
                </div>
                <div>
                  <div class="b-products-list__item-image"
                     v-styler:for="{el: $sectionData.products[index].preview, path: `$sectionData.products[${index}].preview`}"
                     :style="$sectionData.products[index].preview.styles"
                    >
                    <div class="b-products-list__item-image-img">
                      <uploader v-bind:path="'$sectionData.products[' + index + '].preview'" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="b-products-list__item-wrap">
                <div class="flex flex_wrap flex_justify-content-center flex_align-items-start">
                    <div class="b-products-list__item-block" v-for="(keyB, indexB) in $sectionData.products[index].blocks" :key="index + indexB">
                      <div class="b-products-list__item-row flex flex_center">
                          <div class="b-products-list__item-col b-products-list__item-col_text">
                            <div class="b-products-list__item-row-chapter" v-styler:for="{ el: $sectionData.products[index].blocks[indexB].chapter, path:`$sectionData.products[${index}].blocks[${indexB}].chapter` }"
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
                                v-styler:for="{ el: $sectionData.products[index].blocks[indexB].rows[indexR].icon.type, path:`$sectionData.products[${index}].blocks[${indexB}].rows[${indexR}].icon.type` }"
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
                            v-styler:for="{ el: $sectionData.products[index].blocks[indexB].rows[indexR].text, path:`$sectionData.products[${index}].blocks[${indexB}].rows[${indexR}].text` }"
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
        </div><!--/.b-products-right-->
      </div>
  </section>
</template>

<script>
import * as types from '@editor/types'
import VuseIcon from '@editor/components/VuseIcon'
import { productExtendPreviewClick } from '@cscripts/productExtend'

const Icons = [
  { value: 'plus' },
  { value: 'close' }
]

export default {
  name: 'ProductsExtend',
  components: {
    VuseIcon
  },
  cover: '/img/covers/product1.png',
  group: 'products',
  $schema: {
    mainStyle: types.StyleObject,
    products: [
      {
        el: types.Product,
        visible: true,
        preview: types.Image,
        label: types.Label,
        name: types.Text,
        title: types.Text,
        button: types.Button,
        blocks: [
          {
            chapter: types.Text,
            rows: [
              { id: 'row10', icon: { value: 'plus', type: types.Icon }, text: types.Text, options: Icons.slice() },
              { id: 'row11', icon: { value: 'plus', type: types.Icon }, text: types.Text, options: Icons.slice() }
            ]
          },
          {
            chapter: types.Text,
            rows: [
              { id: 'row20', icon: { value: 'close', type: types.Icon }, text: types.Text, options: Icons.slice() },
              { id: 'row21', icon: { value: 'close', type: types.Icon }, text: types.Text, options: Icons.slice() }
            ]
          }
        ],
        mini: {
          el: types.Product,
          visible: true,
          preview: types.Image,
          label: types.Label,
          name: types.Text,
          title: types.Text,
          cost: types.Cost
        }
      }
    ]
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  watch: {
    $sectionData: {
      handler: function () {
        setTimeout(this.bindingProductExtendPreviewClick(), 1000)
      },
      deep: true
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
      let obj = this.$sectionData.products[index].blocks[indexB].rows[indexR]
      let newObj = JSON.parse(JSON.stringify(obj))
      this.$sectionData.products[index].blocks[indexB].rows.push(newObj)
    },
    deleteBlock (index, indexB) {
      this.$sectionData.products[index].blocks.splice(indexB, 1)
    },
    addBlock (index, indexB) {
      let obj = this.$sectionData.products[index].blocks[indexB]
      let newObj = JSON.parse(JSON.stringify(obj))
      this.$sectionData.products[index].blocks.push(newObj)
    },
    bindingProductExtendPreviewClick (index) {
      productExtendPreviewClick(index)
    }
  },
  mounted: function () {
    this.bindingProductExtendPreviewClick(0)
  },
  updated: function () {
    this.bindingProductExtendPreviewClick(this.index)
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
.b-products
  display: flex
  align-items: center
  padding: 1rem
  max-width: 160rem
  width: 80%
  margin: 0 auto
  @media only screen and (max-width: 768px)
    &
      height: auto !important
  &-left
    width: 50%
    height: 100%
    &_mobile
      .is-tablet &,
      .is-mobile &
        width: 0
        overflow: hidden
      @media only screen and (max-width: 768px)
        &
          width: 0
          overflow: hidden
  &-right
    width: 50%
    .is-mobile &
        width: 100%
    .is-tablet &
        width: 80%
    @media only screen and (max-width: 768px)
      &
        width: 80%
    @media only screen and (max-width: 540px)
      &
        width: 100%
  &-list
    margin-bottom: 1rem
    &_mini
      flex-wrap: wrap
    .is-mobile &,
    .is-tablet &
      flex-wrap: wrap
    @media only screen and (max-width: 768px)
      &
        flex-wrap: wrap
    &__item
      width: 100%
      height: 100%
      min-width: 34rem
      min-height: 34rem
      margin: 1rem 0.5rem
      padding: 0
      position: relative
      display: none
      border: 0.5rem solid transparent
      .is-mobile &
      .is-tablet &
        max-width: 100%
      @media only screen and (max-width: 768px)
        &
          width: 100%
      &_mini
        width: 23rem
        min-width: 15rem
        min-height: 15rem
        max-width: 30rem
        max-height: 30rem
        display: block
      &_active
        display: block
        box-shadow: 0 0 2rem 0 rgba(50, 50, 50, 1)
        border: 0.5rem solid #18d88b
      &_mobile
        .is-tablet &,
        .is-mobile &
          display: block
          margin: 2rem 0
          width: 100%
        @media only screen and (max-width: 768px)
          &
            display: block
            margin: 2rem 0
            width: 100%
      &.is-editable
        resize: both
        overflow: hidden
      &-wrap
        padding: 2rem
      &-cost
        width: 100%
        min-width: 6rem
        height: 3rem
        display: inline-block
        font-size: 3rem
        display: flex
        align-items: center
        justify-content: center
        flex-direction: column
        max-width: 100%
        max-height: 10rem
        margin: 0 auto
        &.is-editable
          resize: both
          overflow: hidden
      &-image
        width: 10rem
        margin: 0
        padding: 1rem
        height: 10rem
        overflow: hidden
        &.is-editable
          resize: both
          overflow: hidden
        &_mini
          margin: 0 auto
          &.is-editable
            resize: both
        &-img
          height: auto
          text-align: center
      &-name
        font-size: 3rem
        line-height: 1.4
        width: 100%
        color: #18d88b
        display: block
        text-align: left
        &_mini
          font-size: 2rem
          text-align: center
      &-title
        font-size: 1.4rem
        line-height: 1.4
        width: 100%
        color: #fff
        display: block
        text-align: left
        &_mini
          text-align: center
      &-button
        position: relative
        font-size: 2rem
        font-family: 'Open Sans'
        width: 15rem
        min-width: 6rem
        min-height: 2rem
        margin: 1rem 0
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
        &_mini
          width: 6rem
          min-width: 6rem
          margin: 0 auto
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
        min-width: 6rem
        min-height: 2rem
        display: flex
        align-items: center
        justify-content: center
        &.is-editable
          resize: both
          overflow: hidden
      &-block
        margin: 3rem 1rem 1rem
        border-top: dotted rgba(255, 255, 255, 0.3) 0.1rem
        padding: 1rem 0
        width: 40%
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
      &-header
        &-col:nth-child(1)
          width: 70%
          min-height: 10rem
          padding: 2rem 2rem 0
        &-col:nth-child(2)
          width: 30%
          min-height: 10rem

.is-editable-show
  display: none
  .is-editable &
    display: inline-block

</style>
