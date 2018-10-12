<script>
import VuseIcon from '../VuseIcon'
import VueCircleSlider from 'vue-circle-slider'

export default {
  components: {
    VuseIcon,
    VueCircleSlider
  },
  props: {
    borderRadius: {
      type: Number,
      required: true
    }
  },
  data: () => ({
    br: null
  }),
  created () {
    this.br = this.borderRadius
  },
  methods: {
    /**
     * Modify box styles
     * @param type {string} values: color, font-size, border-radius
     * @param value {string}
     * @param unit {string} values: %, rem, ''
     */
    boxMode (type, value, unit) {
      this.$emit('boxStyled', { type, value, unit })
    }
  }
}
</script>

<template>
  <div>
    <div class="b-styler__bg_options_container">
      <div class="b-styler__bg_options__item flex flex_center">
        <circle-slider
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
          <div class="b-border-radius" v-bind:style="{ 'border-radius': br + '%'}"/>
          <button class="button" style="width: 12rem;" @click="boxMode('border-radius', br, '%')">
            <VuseIcon name="check"></VuseIcon> Set
          </button>
        </div>
      </div><!--/b-styler__bg_options__item-->
    </div><!--/b-styler__bg_options_container-->
  </div>
</template>
