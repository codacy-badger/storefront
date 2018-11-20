<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="width"
       :height="height"
       :aria-labelledby="iconName"
       role="presentation"
       :viewBox="icons[name].viewBox"
  >
      <g :fill="color">
        <component v-bind:is="icons[name].component"></component>
      </g>
      </svg>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'IconClose',
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
  data () {
    return {
      icons: {
        alignCenter: {
          component: 'IconAlignCenter',
          viewBox: '0 0 18 18'
        },
        alignLeft: {
          component: 'IconAlignLeft',
          viewBox: '0 0 18 18'
        },
        alignRight: {
          component: 'IconAlignRight',
          viewBox: '0 0 18 18'
        },
        arrowDropDown: {
          component: 'IconArrowDropDown',
          viewBox: '0 0 6 4'
        },
        close: {
          component: 'IconClose',
          viewBox: '0 0 8 8'
        },
        colorFill: {
          component: 'IconColorFill',
          viewBox: '0 0 15 18'
        },
        drag: {
          component: 'IconDrag',
          viewBox: '0 0 3 21'
        },
        equalizer: {
          component: 'IconEqualizer',
          viewBox: '0 0 18 16'
        },
        fontBold: {
          component: 'IconFontBold',
          viewBox: '0 0 11 14'
        },
        fontFamily: {
          component: 'IconFontFamily',
          viewBox: '0 0 15 17'
        },
        fontItalic: {
          component: 'IconFontItalic',
          viewBox: '0 0 12 14'
        },
        fontSize: {
          component: 'IconFontSize',
          viewBox: '0 0 20 17'
        },
        fontUnderline: {
          component: 'IconFontUnderline',
          viewBox: '0 0 12 15'
        },
        menu: {
          component: 'IconMenu',
          viewBox: '0 0 16 16'
        },
        platformDesktop: {
          component: 'IconPlatformDesktop',
          viewBox: '0 0 16 14'
        },
        platformLaptop: {
          component: 'IconPlatformLaptop',
          viewBox: '0 0 22 16'
        },
        platformMobile: {
          component: 'IconPlatformMobile',
          viewBox: '0 0 10 14'
        },
        plus: {
          component: 'IconPlus',
          viewBox: '0 0 16 16'
        }
      }
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
