<template>
  <section class="l-products" v-styler:section="$sectionData.mainStyle" :class="$sectionData.mainStyle.classes" v-bind:style="$sectionData.mainStyle.styles">
      <div class="b-products">
        <div class="b-products-list flex flex_center">
          <div class="b-products-list__item flex flex_columns"
               v-for="(item, index) in $sectionData.products"
               :key="index"
               v-styler:product="{el: $sectionData.products[index].el, path: `$sectionData.products[${index}].el`}"
               :style="$sectionData.products[index].el.styles"
            >
            <div class="b-products-list__item-label"
                 v-styler:for="{ el: $sectionData.products[index].label, path:`$sectionData.products[${index}].label` }"
                 v-html="$sectionData.products[index].label.text"
                 :style="$sectionData.products[index].label.styles"
                 v-bind:class="$sectionData.products[index].label.classes"
              >
            </div>
            <div class="b-products-list__item-image"
                 v-styler:for="{el: $sectionData.products[index].preview, path: `$sectionData.products[${index}].preview`}"
                 :style="$sectionData.products[index].preview.styles"
              >
              <div class="b-products-list__item-image-img">
                <uploader v-bind:path="'$sectionData.products[' + index + '].preview'" />
              </div>
            </div>
            <div class="b-products-list__item-wrap">
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
              <div>
                  <div class="b-products-list__item-block" v-for="(keyB, indexB) in $sectionData.products[index].blocks" :key="keyB">
                    <div class="b-products-list__item-row">
                        <div class="b-products-list__item-row-chapter" v-styler:for="{ el: $sectionData.products[index].blocks[indexB].chapter, path:`$sectionData.products[${index}].blocks[${indexB}].chapter` }"
                          v-html="$sectionData.products[index].blocks[indexB].chapter.text"
                          :style="$sectionData.products[index].blocks[indexB].chapter.styles"
                          >
                        </div>
                    </div>
                    <div class="b-products-list__item-row flex" v-for="(keyR, indexR) in $sectionData.products[index].blocks[indexB].rows" :key="keyR">
                      <div class="b-products-list__item-col b-products-list__item-col_icon">
                        <div class="b-products-list__item-col-icon">
                            <button class="b-products-list__item-col-icon-btn controller-button is-green is-editable-show"
                              v-styler:for="{ el: $sectionData.products[index].blocks[indexB].rows[indexR].icon.type, path:`$sectionData.products[${index}].blocks[${indexB}].rows[${indexR}].icon.type` }"
                              :style="$sectionData.products[index].blocks[indexB].rows[indexR].icon.type.styles"
                              v-bind:class="$sectionData.products[index].blocks[indexB].rows[indexR].icon.type.classes"
                              >
                              <VuseIcon class="b-products-list__item-col-icon-i" :name="$sectionData.products[index].blocks[indexB].rows[indexR].icon.value"></VuseIcon>
                            </button>
                            <select class="b-products-list__item-col-icon-select is-editable-show" v-model="$sectionData.products[index].blocks[indexB].rows[indexR].icon.value">
                              <option v-for="option in $sectionData.products[index].blocks[indexB].rows[indexR].options" :value="option.value" v-bind:key="option.value">
                                {{ option.value }}
                              </option>
                            </select>
                        </div>
                      </div>
                      <div class="b-products-list__item-col b-products-list__item-col_text">
                        <div class=""
                          v-styler:for="{ el: $sectionData.products[index].blocks[indexB].rows[indexR].text, path:`$sectionData.products[${index}].blocks[${indexB}].rows[${indexR}].text` }"
                          v-html="$sectionData.products[index].blocks[indexB].rows[indexR].text.text"
                          :style="$sectionData.products[index].blocks[indexB].rows[indexR].text.styles"
                         >
                        </div>
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

const Icons = [
  { value: 'plus' },
  { value: 'close' }
]

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
              { icon: { value: 'plus', type: types.Icon }, text: types.Text, options: Icons.slice() },
              { icon: { value: 'plus', type: types.Icon }, text: types.Text, options: Icons.slice() }
            ]
          },
          {
            chapter: types.Text,
            rows: [
              { icon: { value: 'close', type: types.Icon }, text: types.Text, options: Icons.slice() },
              { icon: { value: 'close', type: types.Icon }, text: types.Text, options: Icons.slice() }
            ]
          }
        ]
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
  @media only screen and (max-width: 768px)
    &
      height: auto !important
  &-list
    margin-bottom: 1rem
    .is-mobile &
      flex-wrap: wrap
    @media only screen and (max-width: 460px)
      &
        flex-wrap: wrap
    &__item
      max-width: 100%
      width: 30rem
      min-width: 30rem
      min-height: 60rem
      margin: 1rem
      padding: 0
      position: relative
      &.is-editable
        resize: both
        overflow: hidden
      &-wrap
        padding: 2rem
      &-image
        width: 100%
        margin: 0
        padding: 1rem
        height: 20rem
        overflow: hidden
        &.is-editable
          resize: vertical
        &-img
          height: 100%
          text-align: center
          & .uploader, & div img
            width: auto
            height: 100%
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
        width: 20rem
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
        margin: 0 0 0.5rem
        &-chapter
          color: #fff
          margin: 0 0 1rem
          text-align: center
      &-col
        &_icon
          width: 2rem
        &_text
          color: #F8E71C
          width: 90%
          padding: 0 0 0 1rem
          overflow: hidden
          .b-products-list__item-block:nth-child(2) &
            color: #9B9B9B
        &-icon
          position: relative
          & .vuse-icon
            fill: #F8E71C
            .b-products-list__item-block:nth-child(2) &
              fill: #9B9B9B
          &-btn
            width: 2rem
            height: 2rem
            display: inline-block
            position: relative
            top: -0.2rem
            padding: 0
          &-select
            position: absolute
            width: 2rem
            left: -2rem
            top: 0
            display: none
            .is-editable &
              display: block

</style>
