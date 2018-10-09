<script>
import VuseIcon from '../VuseIcon'

const LIST_FONTS = [
  { title: 'Alice', name: 'alice-regular' },
  { title: 'Open sans', name: 'opensans-regular' },
  { title: 'Helvetica', name: 'Helvetica' },
  { title: 'Arial', name: 'Arial' },
  { title: 'Tahoma', name: 'Tahoma' },
  { title: 'Verdana', name: 'Verdana' },
  { title: 'Cambria', name: 'Cambria' },
  { title: 'Georgia', name: 'Georgia' },
  { title: 'Times New Roman', name: 'Times New Roman' },
  { title: 'Times', name: 'Times' }
]

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
    listFonts: LIST_FONTS,
    fontFamily: false,
    isShowFontFamily: false,
    fontName: ''
  }),
  methods: {
    /**
     * Modify box styles
     * @param type {string} values: font-family
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
      <template v-if="isBox">
        <li>
          <button class="styler-button" @click="isShowFontFamily = !isShowFontFamily" title="Font name">
            <VuseIcon name="font"></VuseIcon>
          </button>
        </li>
      </template>
    </ul>

    <div v-if="isShowFontFamily" class="">
      <div class="">
        <select v-model="fontName" @change="boxMode('font-family', fontName, '')">
          <option v-for="font in listFonts" v-bind:value="font.name">{{font.title}}</option>
        </select>
      </div>
    </div>

  </div>
</template>
