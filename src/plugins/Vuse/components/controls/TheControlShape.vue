<script>
import VuseIcon from '../VuseIcon'
import VueCircleSlider from 'vue-circle-slider'

export default {
  components: {
    VuseIcon,
    VueCircleSlider
  },
  props: {
    isBox: {
      type: Boolean,
      required: true
    }
  },
  data: () => ({
    isShowBorderRadius: false,
    borderRadius: 0,
  }),
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
  <div v-if="isBox">
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
        <div>
          <div class="b-border-radius" v-model="borderRadius" v-bind:style="{ 'border-radius': borderRadius + '%'}"/>
          <button class="button" style="width: 12rem;" @click="boxMode('border-radius', borderRadius, '%')">
            <VuseIcon name="check"></VuseIcon> Set
          </button>
        </div>
      </div><!--/b-styler__bg_options__item-->
    </div><!--/b-styler__bg_options_container-->
  </div>
</template>
