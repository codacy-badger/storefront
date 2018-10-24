<script>
import VuseIcon from '../VuseIcon'
import { Sketch } from 'vue-color'

export default {
  components: {
    VuseIcon,
    SketchColorPecker: Sketch
  },
  data: () => ({
    textSelectColor: '#000'
  }),
  methods: {
    /**
     * Modify box styles
     * @param type {string} values: fill
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
      <div class="b-styler__bg_options__item">
        <sketch-color-pecker @click.native="boxMode('fill', textSelectColor.hex, '')" v-model="textSelectColor"></sketch-color-pecker>
      </div>
    </div>
  </div>
</template>
