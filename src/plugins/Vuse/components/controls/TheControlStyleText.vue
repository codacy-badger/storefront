<script>
import VuseIcon from '../VuseIcon'
import { Sketch } from 'vue-color'
import VueCircleSlider from 'vue-circle-slider'

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
    }
  },
  data: () => ({
    style: {
      bold: ['font-weight','bold','normal'],
      italic: ['font-style','italic','normal'],
      underline: ['text-decoration','underline','none']
    },
    isShowFontSizer: false,
    isShowBorderRadius: false,
    isTextSelectColor: false,
    textSelectColor: '#000',
    fontSize: 2,
    borderRadius: 0
  }),
  methods: {
    stylize (value) {
      this.$emit('styled', this.style[value])
    },
    /**
     * Modify box styles
     * @param type {string} values: color, font-size, border-radius
     * @param value {string}
     * @param unit {string} values: %, rem, ''
     */
    boxMode (type, value, unit) {
      this.isShowFontSizer = false
      this.isShowBorderRadius = false
      this.isTextSelectColor = false
      this.$emit('boxStyled', { type, value, unit })
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
          <button class="styler-button" @click="isShowFontSizer = !isShowFontSizer" title="Font size">
            <VuseIcon name="fontSize"></VuseIcon>
          </button>
        </li>
        <li>
          <button class="styler-button" @click="isShowBorderRadius = !isShowBorderRadius" title="Border radius">
            <VuseIcon name="fillet"></VuseIcon>
          </button>
        </li>
        <li>
          <button class="styler-button" @click="isTextSelectColor = !isTextSelectColor" title="Text color">
            <VuseIcon name="palettes"></VuseIcon>
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
          v-model="fontSize"
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
          <div class="b-font-size" v-model="fontSize" v-text="fontSize" v-bind:style="{ 'font-size': fontSize + 'rem'}"/>
          <button class="button" @click="boxMode('font-size',fontSize, 'rem')">
            <VuseIcon name="check"></VuseIcon> Set
          </button>
        </div>
      </div>
    </div>

    <div v-if="isShowBorderRadius" class="b-styler__bg_options_container">
      <div class="b-styler__bg_options__item flex flex_center">
        <circle-slider
          @click.native=""
          v-model="borderRadius"
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
          <div class="b-border-radius" v-model="borderRadius" v-bind:style="{ 'border-radius': borderRadius + '%'}"/>
          <button class="button" style="width: 12rem;" @click="boxMode('border-radius', borderRadius, '%')">
            <VuseIcon name="check"></VuseIcon> Set
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
