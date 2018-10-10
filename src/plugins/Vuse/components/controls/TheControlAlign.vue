<script>
import VuseIcon from '../VuseIcon'

export default {
  components: {
    VuseIcon
  },
  props: {
    isBox: {
      type: Boolean,
      required: true
    }
  },
  data: () => ({
    flex: {
      left: ['justify-content','flex-start','flex-start'],
      center: ['justify-content','center','center'],
      right: ['justify-content','flex-end','flex-end']
    },
    text: {
      left: ['text-align','left','left'],
      center: ['text-align','center','center'],
      right: ['text-align','right','right']
    }
  }),
  methods: {
    align (value) {
      if (this.isBox) {
        this.$emit('boxAligned', this.flex[value])
      } else {
        this.$emit('textAligned', this.text[value])
      }
    }
  }
}
</script>

<template>
  <ul class="align">
    <li>
    <button class="styler-button" @click="align('left')" title="Align left">
      <VuseIcon name="left"></VuseIcon>
    </button>
    </li>
    <li>
      <button class="styler-button" @click="align('center')" title="Align center">
        <VuseIcon name="center"></VuseIcon>
      </button>
    </li>
    <li>
      <button class="styler-button" @click="align('right')" title="Align right">
        <VuseIcon name="right"></VuseIcon>
      </button>
    </li>
  </ul>
</template>
