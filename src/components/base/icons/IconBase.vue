<template>
  <component
    :xmlns="'http://www.w3.org/2000/svg'"
    :is="componentName"
    :fill="color"
    :width="width"
    :height="height"
    :aria-labelledby="name"
    role="presentation">
  </component>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    color: {
      type: String,
      default: 'currentColor'
    }
  },

  computed: {
    componentName () {
      const nameByChar = this.name.split('')
      const firstChar = nameByChar.splice(0, 1).join('').toUpperCase()
      return `Icon${firstChar}${nameByChar.join('')}`
    }
  }
}
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: -2px; /* yes, I'm that particular about formatting */
}
</style>
