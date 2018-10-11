<script>
import VuseIcon from '../VuseIcon'
import { Sketch } from 'vue-color'
import VueCircleSlider from 'vue-circle-slider'

const LIST_FONTS = [
  'Open Sans',
  'Roboto',
  'Oswald',
  'Kodchasan',
  'Anton',
  'Helvetica',
  'Arial',
  'Tahoma',
  'Verdana',
  'Cambria',
  'Georgia',
  'Times New Roman'
]

export default {
  components: {
    VuseIcon,
    SketchColorPecker: Sketch,
    VueCircleSlider
  },
  props: {
    isBox: {
      type: Boolean,
      required: true
    },
    fontSize: {
      type: Number,
      required: true
    },
    borderRadius: {
      type: Number,
      required: true
    }
  },
  data: () => ({
    style: {
      bold: ['font-weight','bold','normal'],
      italic: ['font-style','italic','normal'],
      underline: ['text-decoration','underline','none']
    },
    fs: null,
    br: null,
    isShowFontSizer: false,
    isShowBorderRadius: false,
    isTextSelectColor: false,
    isShowFontFamily: false,
    fontSize: 2,
    listFonts: LIST_FONTS,
    fontName: ''
    textSelectColor: '#000'
  }),
  created () {
    this.fs = this.fontSize
    this.br = this.borderRadius
  },
  methods: {
    stylize (value) {
      this.$emit('styled', this.style[value])
      this.showBlocks()
    },
    /**
     * Modify box styles
     * @param type {string} values: color, font-size, border-radius
     * @param value {string}
     * @param unit {string} values: %, rem, ''
     */
    boxMode (type, value, unit) {
      this.$emit('boxStyled', { type, value, unit })
    },
    showBlocks (block) {
      this.isShowFontSizer = false
      this.isTextSelectColor = false
      this.isShowFontFamily = false

      if (undefined === block) {
        return
      }

      this[block] = !this[block]
    }
  }
}
</script>

<template>
  <div>
    <ul class="align">
      <li>
        <button class="styler-button" @click="stylize('bold')" title="Bold">
          <VuseIcon name="bold"></VuseIcon>
        </button>
      </li>
      <li>
        <button class="styler-button" @click="stylize('italic')" title="Italic">
          <VuseIcon name="italic"></VuseIcon>
        </button>
      </li>
      <li>
        <button class="styler-button" @click="stylize('underline')" title="Underline">
          <VuseIcon name="underline"></VuseIcon>
        </button>
      </li>
      <template v-if="isBox">
        <li>
          <button class="styler-button" title="Font size" @click="showBlocks('isShowFontSizer')">
            <VuseIcon name="fontSize"></VuseIcon>
          </button>
        </li>
        <li>
          <button class="styler-button" title="Text color" @click="showBlocks('isTextSelectColor')">
            <VuseIcon name="palettes"></VuseIcon>
          </button>
        </li>
        <li>
          <button class="styler-button"  title="Font name" @click="showBlocks('isShowFontFamily')">
            <VuseIcon name="font"></VuseIcon>
          </button>
        </li>
      </template>
    </ul>

    <div v-if="isTextSelectColor" class="b-styler__bg_options_container">
      <div class="b-styler__bg_options__item">
        <sketch-color-pecker @click.native="boxMode('color', textSelectColor.hex, '')" v-model="textSelectColor"></sketch-color-pecker>
      </div>
    </div>

    <div v-if="isShowFontSizer" class="b-styler__bg_options_container">
      <div class="b-styler__bg_options__item flex flex_center">
        <circle-slider
          @click.native=""
          v-model="fs"
          :step-size="0.5"
          :circle-width-rel="30"
          :progress-width-rel="15"
          :knob-radius-rel="8"
          :min="1"
          :max="8"
          circle-color="#fff"
          progress-color="#fcff00">
        </circle-slider>
        <div class="">
          <div class="b-font-size" v-model="fs" v-text="fs" v-bind:style="{ 'font-size': fs + 'rem'}"/>
          <button class="button" @click="boxMode('font-size',fs, 'rem')">
            <VuseIcon name="check"></VuseIcon> Set
          </button>
        </div>
      </div>
    </div>

    <div v-if="isShowBorderRadius" class="b-styler__bg_options_container">
      <div class="b-styler__bg_options__item flex flex_center">
        <circle-slider
          @click.native=""
          v-model="br"
          :step-size="0.1"
          :circle-width-rel="30"
          :progress-width-rel="15"
          :knob-radius-rel="8"
          :min="0"
          :max="50"
          circle-color="#fff"
          progress-color="#fcff00">
        </circle-slider>
        <div class="">
          <div class="b-border-radius" v-model="br" v-bind:style="{ 'border-radius': br + '%'}"/>
          <button class="button" style="width: 12rem;" @click="boxMode('border-radius', br, '%')">
            <VuseIcon name="check"></VuseIcon> Set
          </button>
        </div>
      </div>
    </div>

    <div v-if="isShowFontFamily" class="">
      <div class="">
        <select class="b-select-font-name" v-model="fontName" @change="boxMode('font-family', fontName, '')">
          <option class="" value="" hidden disabled selected>Choose font</option>
          <option v-for="font in listFonts" v-bind:value="font">{{font}}</option>
        </select>
      </div>
    </div>

  </div>
</template>

<style lang="sass">
.b-select-font-name
  background: $white
  color: $dark
  border: 0
  outline: 0
  width: auto
  height: 3rem
  border-radius: 3rem
  font-size: 1.4rem
  margin: 1rem auto
  padding: 0.5rem
  width: 20rem
  display: block
  & option:checked
    background-color: #333
    color: #fff
</style>
