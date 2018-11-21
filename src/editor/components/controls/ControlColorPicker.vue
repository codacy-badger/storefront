<script>
import { Sketch } from 'vue-color'

export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      default: '#000'
    }
  },
  components: {
    ColorPicker: Sketch
  },
  data () {
    return {
      pickerValue: this.value
    }
  },
  watch: {
    value (value) {
      this.pickerValue = value
    },
    pickerValue (value) {
      this.$emit('change', value)
    }
  },

  methods: {
    close () {
      this.$emit('close', this.pickerValue)
    }
  }
}
</script>

<template>
  <div class="b-styler__bg_options_container">
    <div class="b-styler__bg_options__item">
      <ColorPicker
        v-model="pickerValue"
      />
      <button class="picker-apply-button" @click="close">Apply</button>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.picker-apply-button
  width: 100%
  margin-top: 10px
</style>
