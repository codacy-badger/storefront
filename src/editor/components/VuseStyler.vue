<template>
  <div class="styler is-editable" ref="styler" id="styler" v-if="$builder.isEditing" :class="{ 'is-visible': isVisible }"
       @click.stop="">
    <ul class="styler-list">
      <!-- aligned -->
      <li v-if="options.aligned">
        <button class="styler-button" @click="updateOption('align')" title="Text align">
          <VuseIcon name="align"></VuseIcon>
        </button>
      </li>
      <!-- font and him styles-->
      <li v-if="options.typography">
        <button class="styler-button" @click="updateOption('textStyle')" title="Text style">
          <VuseIcon name="textStyle"></VuseIcon>
        </button>
      </li>
      <!-- background -->
      <li v-if="options.background || type === 'section' || type === 'galleryItem' || type === 'product'">
        <button class="styler-button" @click="updateOption('colorer')" title="Set background">
          <VuseIcon name="pic"></VuseIcon>
        </button>
      </li>
      <!-- colorFill -->
      <li v-if="options.colorFill">
        <button class="styler-button" @click="updateOption('colorFill')" title="Change fill color icon">
          <VuseIcon name="fill"></VuseIcon>
        </button>
      </li>
      <!-- link -->
      <li v-if="options.hasLink">
        <button class="styler-button" @click="updateOption('link')" title="Link">
          <VuseIcon name="link"></VuseIcon>
        </button>
      </li>
      <!-- shape -->
      <li v-if="options.shape">
        <button class="styler-button" @click="updateOption('shape')" title="Change shape">
          <VuseIcon name="fillet"></VuseIcon>
        </button>
      </li>
      <!-- hover -->
      <li v-if="options.pseudo">
        <button class="styler-button" @click="updateOption('pseudo')" title="Change shape">
          <VuseIcon name="hand"></VuseIcon>
        </button>
      </li>

      <template v-if="type === 'product' && section.data.products.length !== 0">
        <li>
          <button class="styler-button" @click="copyItemProduct">
            <VuseIcon name="plus"></VuseIcon>
          </button>
        </li>
      </template>

      <template v-if="type === 'galleryItem'">
        <li>
          <button class="styler-button" @click="copyItemGallery">
            <VuseIcon name="plus"></VuseIcon>
          </button>
        </li>
        <li>
          <div style="display: none;">
            <form>
              <input
                type="file"
                accept="image/*,video/mp4,video/x-m4v,video/*"
                v-bind:ref="'choseGalleryItemPreviewInput'"
                @change="onChooseGalleryItemPreview"/>
            </form>
          </div>
        </li>
        <li v-if="type === 'link'">
          <button class="styler-button" @click="updateOption('link')">
            <VuseIcon name="link"></VuseIcon>
          </button>
        </li>
      </template>

      <template v-if="type === 'grid'">
        <li>
          <button class="styler-button" @click="selectDevice('mobile')">
            <VuseIcon name="mobile"></VuseIcon>
          </button>
        </li>
        <li>
          <button class="styler-button" @click="selectDevice('desktop')">
            <VuseIcon name="laptop"></VuseIcon>
          </button>
        </li>
       </template>

      <!-- remove -->
      <li v-if="options.removable">
        <button class="styler-button" @click="removeElement" title="Delete">
          <VuseIcon name="trash" class="vuse-icon"></VuseIcon>
        </button>
      </li>

      <!-- dimensions -->
      <li v-if="options.resizable" class="styler-list__dimensions">
        <span v-text="dimensions.width"></span> x <span v-text="dimensions.height"></span>
      </li>

    </ul><!--/.styler-list-->

    <ul class="styler-list">
      <li v-if="currentOption === 'colorer'">
        <ul class="colorer">
          <li v-if="type !== 'button' && type !== 'galleryItem' && type !== 'product'">
            <button class="styler-button" @click="showBackgroundSettingsSection('link')">
              <VuseIcon name="link"></VuseIcon>
            </button>
          </li>

          <li>
            <div style="display: none">
              <form>
                <input
                  type="file"
                  accept="image/*,video/mp4,video/x-m4v,video/*"
                  v-bind:ref="'choseBackgroundContentInput'"
                  @change="onChooseBackground"/>
              </form>
            </div>

            <button class="styler-button" @click="choseBackground">
              <VuseIcon name="upload"></VuseIcon>
            </button>
          </li>

          <li v-if="imageBgSelected === true || videoBgSelected === true">
            <button class="styler-button" @click="identifyBackgroundSettingsSection">
              <VuseIcon name="cog"></VuseIcon>
            </button>
          </li>

          <li>
            <button class="styler-button" @click="showColorPeckerSection">
              <VuseIcon name="palettes"></VuseIcon>
            </button>
          </li>
        </ul>

        <div v-if="backgroundSettingsShow.color === true" class="b-styler__bg_options_container">
          <div class="b-styler__bg_options__item">
            <sketch-color-pecker @click.native="setBackgroundColor(backgroundColor)" v-model="backgroundColor"></sketch-color-pecker>
          </div>
        </div>

        <div v-if="backgroundSettingsShow.link === true" class="b-styler__bg_options_container">
          <div class="b-styler__bg_options__item">
            <div class="input-group is-rounded has-itemAfter is-primary b-styler__bg_options__item">
              <input class="input" type="text" placeholder="Link to image or video" v-model="backgroundUrl"/>
              <button class="button" @click="addBackgroundAsLink">
                <VuseIcon name="link"></VuseIcon>
              </button>
            </div>
          </div>
        </div>

        <div v-if="imageBgSelected === true && backgroundSettingsShow.image === true" class="b-styler__bg_options_container">
          <div class="b-styler__bg_options__item">
              <label>Repeat</label>
              <select class="form-control" v-model="backgroundSelectedOptions.repeat" title="backgroundRepeatOption">
                  <option v-for="(option, index) in backgroundOptions.repeat" v-bind:key="index" v-bind:value="option">
                      {{ option }}
                  </option>
              </select>
          </div>

          <div class="b-styler__bg_options__item">
            <label>Position</label>
            <select class="form-control" v-model="backgroundSelectedOptions.position" title="backgroundPositionOption">
              <option v-for="(option, index) in backgroundOptions.positions" v-bind:key="index" v-bind:value="option">
                {{ option }}
              </option>
            </select>
          </div>

          <div class="b-styler__bg_options__item">
            <label>Size</label>
            <select class="form-control" v-model="backgroundSelectedOptions.size" title="backgroundSizeOption">
              <option v-for="(option, index) in backgroundOptions.sizes" v-bind:key="index" v-bind:value="option">
                {{ option }}
              </option>
            </select>
          </div>
        </div>

        <div v-if="videoBgSelected === true && backgroundSettingsShow.video === true" class="b-styler__bg_options_container">
          <div class="b-styler__bg_options__item">
            <label>Upload video at other format</label>
            <div>
              <button class="button" @click="choseBackground" style="width: 100%;"
                      v-bind:disabled="isRequestProcess === true">
                <VuseIcon name="upload"></VuseIcon>
              </button>
            </div>
          </div>

          <div class="b-styler__bg_options__item">
            <label>Upload poster image</label>
            <div>
              <button class="button" @click="choseVideoBackgroundPoster" style="width: 100%;"
                      v-bind:disabled="isRequestProcess === true">
                <VuseIcon name="upload"></VuseIcon>
              </button>
            </div>
          </div>
        </div>
      </li>

      <!-- Set color fill-->
      <li v-if="currentOption === 'colorFill'">
        <ControlColorFill
          @boxStyled="onBoxStyled">
        </ControlColorFill>
      </li>

      <!-- Set link -->
      <li v-if="currentOption === 'link'">
        <ControlSetUrl
          v-bind:url="options.href"
          v-bind:target="options.target"
          v-bind:isBox="options.box"
          @setUrl="addLink">
        </ControlSetUrl>
      </li>

      <!-- Text align -->
      <li v-if="currentOption === 'align'">
        <ControlAlign
          v-bind:isBox="options.box"
          @boxAligned="onBoxAligned"
          @textAligned="onTextAligned">
        </ControlAlign>
      </li>

      <!-- Text style -->
      <li v-if="currentOption === 'textStyle'">
        <ControlStyleText
          v-bind:fontSize="fontSize"
          v-bind:fontFamily="fontFamily"
          @styled="onBoxAligned"
          @boxStyled="onBoxStyled">
        </ControlStyleText>
      </li>

      <!-- shape -->
      <li v-if="currentOption === 'shape'">
        <ControlShape
          v-bind:borderRadius="borderRadius"
          @boxStyled="onBoxStyled">
        </ControlShape>
      </li>

      <!-- -->
      <li v-if="currentOption === 'columnWidth'">
        <ul class="align">
          <li>
            <button class="styler-button" @click="gridValue--">
              <VuseIcon name="arrowLeft"></VuseIcon>
            </button>
          </li>
          <li>
            <input class="styler-input" type="number" min="0" max="12" v-model="gridValue"/>
          </li>
          <li>
            <button class="styler-button" @click="gridValue++">
              <VuseIcon name="arrowRight"></VuseIcon>
            </button>
          </li>
        </ul>
      </li>

      <!-- Hover -->
      <li v-if="currentOption === 'pseudo'">
        <ul class="align">
          <li>
            <button class="styler-button" @click="showPseudoBg = !showPseudoBg">
              <VuseIcon name="palettes"></VuseIcon>
            </button>
          </li>
          <li>
            <span>Animation: </span>
            <select v-model="animation" @change="selectAnimation">
              <option v-for="(anim, index) in animationList" :key="index" :value="anim">{{anim.name}}</option>
            </select>
          </li>
        </ul>

        <div v-if="showPseudoBg" class="b-styler__bg_options_container">
          <div class="b-styler__bg_options__item">
            <sketch-color-pecker @click.native="changePseudoStyle({ 'background-color': backgroundHoverColor.hex + ' !important' })" v-model="backgroundHoverColor"></sketch-color-pecker>
          </div>
        </div>
      </li>

    </ul><!--/.styler-list-->
  </div>
</template>

<script>
import Popper from 'popper.js'
import VuseIcon from './VuseIcon'
import ControlAlign from './controls/TheControlAlign.vue'
import ControlStyleText from './controls/TheControlStyleText.vue'
import ControlShape from './controls/TheControlShape.vue'
import ControlSetUrl from './controls/TheControlSetUrl.vue'
import ControlColorFill from './controls/TheControlColorFill.vue'
import { isParentTo, randomPoneId, getPseudoTemplate } from '../util'
import { Sketch } from 'vue-color'
import $ from 'jquery'
import axios from 'axios'
import * as _ from 'lodash-es'
import ResizeObserver from 'resize-observer-polyfill'

const DEFAULT_BACKGROUND_REPEAT = 'no-repeat'
const DEFAULT_BACKGROUND_POSITION = 'center center'
const DEFAULT_BACKGROUND_SIZE = 'contain'

const VIDEO_BACKGROUND_MP4_EXTENSION = 'mp4'
const VIDEO_BACKGROUND_WEBM_EXTENSION = 'webm'

export default {
  name: 'Styler',
  components: {
    VuseIcon,
    ControlAlign,
    ControlStyleText,
    ControlShape,
    ControlSetUrl,
    ControlColorFill,
    SketchColorPecker: Sketch
  },
  props: {
    el: {
      required: true,
      validator: function (value) {
        return (
          typeof HTMLElement === 'object' ? value instanceof HTMLElement
            : value && typeof value === 'object' && value !== null && value.nodeType === 1 &&
              typeof value.nodeName === 'string'
        )
      }
    },
    type: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    section: {
      type: Object,
      required: true
    },
    options: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    oldColorerColor: '',
    colorerColor: '',
    mouseTarget: '',
    currentOption: '',
    url: '',
    title: '',
    text: '',
    preview: '',
    image: '',
    gridValue: 0,
    isVisible: false,
    imageBgSelected: false,
    videoBgSelected: false,
    videoBackgroundSources: [],
    backgroundUrl: '',
    backgroundColor: '#ffffff',
    backgroundHoverColor: '#ffffff',
    backgroundOptions: {
      repeat: ['no-repeat', 'repeat', 'repeat-x', 'repeat-y'],
      positions: [
        'left top',
        'left center',
        'left bottom',
        'right top',
        'right center',
        'right bottom',
        'center top',
        'center center',
        'center bottom'
      ],
      sizes: ['auto', 'cover', 'contain']
    },
    backgroundSelectedOptions: {
      repeat: DEFAULT_BACKGROUND_REPEAT,
      position: DEFAULT_BACKGROUND_POSITION,
      size: DEFAULT_BACKGROUND_SIZE
    },
    backgroundSettingsShow: { video: false, image: false, link: false, color: false },
    isVideoBackgroundPoster: false,
    videoBackgroundPosterSource: '',
    isRequestProcess: false,
    textSelectColor: '#000',
    fontSize: null,
    fontFamily: null,
    borderRadius: 0,
    dimensions: {
      width: null,
      height: null
    },
    showPseudoBg: false,
    pseudoStyles: {},
    animation: { name: 'none', className: '' },
    animationList: [
      { name: 'none', className: '' },
      { name: 'tada', className: 'ptah-a-tada' },
      { name: 'fade', className: 'ptah-a-fade' },
      { name: 'shake', className: 'ptah-a-shake' },
      { name: 'bounce', className: 'ptah-a-bounce' },
      { name: 'jerk', className: 'ptah-a-jerk' }
    ]
  }),
  watch: {
    colorerColor: function () {
      this.changeColor()
    },
    gridValue: function () {
      this.gridValue = Math.min(Math.max(this.gridValue, 0), 12)
      this.section.set(this.name, (grid) => {
        grid[this.device] = this.gridValue
      })
    },
    'backgroundSelectedOptions.repeat': function (value) {
      this.addStyle('background-repeat', value)
    },
    'backgroundSelectedOptions.position': function (value) {
      this.addStyle('background-position', value)
    },
    'backgroundSelectedOptions.size': function (value) {
      this.addStyle('background-size', value)
    }
  },
  created () {
    if (this.type === 'text') {
      this.el.contentEditable = 'true'
    }
    if (this.type === 'title') {
      this.el.contentEditable = 'true'
    }
    if (this.type === 'link') {
      this.el.contentEditable = 'true'
    }
    if (this.type === 'button') {
      this.el.contentEditable = 'true'
    }

    this.dimensions.width = this.el.offsetWidth.toFixed(0)
    this.dimensions.height = this.el.offsetHeight.toFixed(0)
  },
  mounted () {
    if (this.$builder && !this.$builder.isEditing) return

    this.el.addEventListener('click', this.showStyler)
    this.el.addEventListener('focus', this.showStyler)

    this.setInitialValue()

    // Restoring from a snapshot
    // to apply the pseudoclass to the element
    if (Object.keys(this.options.pseudo).length) {
      _.forEach(this.options.pseudo, (styles, pseudo) => {
        this.changePseudoStyle(styles, pseudo)
      })
    }

    // Apply animation to element
    this.options.classes.forEach((name, index) => {
      if (name.indexOf('ptah-a-') > -1) {
        this.animation = _.find(this.animationList, ['className', name])
      }
    })
  },
  updated () {
    if (this.options.resizable) {
      // listen resize event, add params to element
      let handler = (e) => {
        this.dimensions.width = e[0].contentRect.width
        this.dimensions.height = e[0].contentRect.height
        if (document.getElementById('artboard') && !document.getElementById('artboard').classList.contains('fp-scroll')) {
          this.addStyle('width', `${this.el.offsetWidth}px`)
          this.addStyle('height', `${this.el.offsetHeight}px`)
        }
      }

      let ro = new ResizeObserver(handler)
      ro.observe(this.el)
    }

    this.setInitialValue()
  },
  beforeDestroy () {
    this.hideStyler()
    this.$refs.styler.remove()
    this.el.classList.remove('is-editable')
    this.el.removeEventListener('click', this.showStyler)
    document.removeEventListener('click', this.hideStyler, true)
  },
  methods: {
    setInitialValue () {
      if (this.type === 'button') {
        // listen event change border-radius
        let br = this.section.get(`${this.name}.styles['border-radius']`)
        if (undefined !== br) {
          this.borderRadius = parseFloat(br)
        }
      }
      if (this.type === 'text' || this.type === 'button' || this.type === 'link') {
        // listen event change font-size
        let fs = this.section.get(`${this.name}.styles['font-size']`)
        if (undefined !== fs) {
          this.fontSize = parseFloat(fs)
        }

        // listen event change font-family
        let ff = this.section.get(`${this.name}.styles['font-family']`)
        if (undefined !== ff) {
          this.fontFamily = ff
        }
      }
      if (this.options.background === true) {
        this.backgroundUrl = this.options.styles['background-image']
        if (this.options.styles['background-image'] !== '') {
          this.imageBgSelected = true
        }
      }
    },
    onBoxAligned (value) {
      this.addTextStyle(value[0], value[1], value[2])
    },
    onTextAligned (value) {
      this.addTextStyle(value[0], value[1], value[2])
      // this.execute(value)
    },
    /**
       * Add styles to 'box' element (e.g. button)
       * @param styles
       */
    onBoxStyled (styles) {
      this.el.focus()
      this.addStyle(styles.type, `${styles.value}${styles.unit}`)
    },
    updateOption (option) {
      this.currentOption = option
      this.$nextTick(() => {
        this.popper.update()
      })
    },
    addLink (options) {
      this.section.set(`${this.name}.href`, options.url)
      this.section.set(`${this.name}.target`, options.target)
    },
    openLink () {
      if (this.$builder.isEditing || this.url === '') return

      window.top.open(this.url)
    },
    changeColor () {
      this.removeClass(`is-${this.oldColorerColor}`)
      this.oldColorerColor = this.colorerColor
      this.addClass(`is-${this.colorerColor}`)
    },
    addClass (className) {
      this.section.set(this.name, (value) => {
        if (value && value.classes && Array.isArray(value.classes)) {
          value = value.classes
        }
        value.push(className)
      })
    },
    selectDevice (device) {
      const gridValue = this.section.get(this.name)[device]
      this.updateOption('columnWidth')
      this.device = device
      this.gridValue = gridValue
    },
    removeClass (className) {
      if (Array.isArray(className)) {
        return className.forEach(c => {
          this.removeClass(c)
        })
      }
      this.section.set(this.name, value => {
        if (value && value.classes && Array.isArray(value.classes)) {
          value = value.classes
        }
        const idx = value.indexOf(className)
        value.splice(idx, 1)
      })
    },
    addStyle: function (style, sValue) {
      let self = this

      this.section.set(this.name, (value) => {
        if (!value || !value.hasOwnProperty('styles') || typeof value.styles !== 'object' ||
            !value.styles.hasOwnProperty(style)) {
          return
        }

        value.styles[style] = sValue

        $(self.el).find('div.b-video-bg').remove()
      })
    },
    addTextStyle: function (style, sValue, def) {
      this.section.set(this.name, (value) => {
        if (!value ||
            !value.hasOwnProperty('styles') ||
            typeof value.styles !== 'object' ||
            !value.styles.hasOwnProperty(style)) {
          return
        }

        if (value.styles[style] === false || def === value.styles[style]) {
          value.styles[style] = sValue
        } else {
          value.styles[style] = def
        }
      })
    },
    addVideoBackground: function () {
      let el = $(this.el)
      let content = '<div class="b-video-bg">' +
          '<video preload="auto" autoplay="autoplay" loop="loop" muted="muted"'

      if (this.isVideoBackgroundPoster === true) {
        content += ' poster="' + this.videoBackgroundPosterSource + '">'
      } else {
        content += '>'
      }

      for (let i = 0; i < this.videoBackgroundSources.length; i++) {
        content += '<source src="' + this.videoBackgroundSources[i]['source'] + '" type="' + this.videoBackgroundSources[i]['type'] + '" />'
      }

      content += '</video></div>'

      el.append(content)

      this.section.set(this.name, (value) => {
        if (!value || !value.hasOwnProperty('styles') || typeof value.styles !== 'object' ||
            !value.styles.hasOwnProperty('background-image')) {
          return
        }

        value.styles['background-image'] = 'none'
        value.styles['background-color'] = 'transparent'
      })
    },
    /**
     * Remove from editor
     */
    removeElement () {
      if (this.type === 'section' || this.type === 'header') {
        this.$builder.remove(this.section)
      } else {
        let path = _.split(this.name, '.')[1] // find path to element
        if (this.name.indexOf('[') > 0) { // if array element
          path = _.toPath(path)
          this.section.data[path[0]].splice(parseInt(path[1]), 1)
        } else {
          this.section.data[path].text = ''
          this.section.data[path].url = ''
          Object.assign(this.section.data[path].styles, { 'display': 'none' })
        }
        this.el.remove()
        this.$refs.styler.remove()
      }
    },
    copyItemGallery () {
      let newObj = JSON.parse(JSON.stringify(this.section.data.images[0]))
      let l = Object.assign({}, newObj)
      this.section.data.images.push(l)
      this.section.schema.images.push(l)
    },
    copyItemProduct () {
      let newObj = JSON.parse(JSON.stringify(this.section.data.products[0]))
      let l = Object.assign({}, newObj)
      this.section.data.products.push(l)
      this.section.schema.products.push(l)
    },
    execute (command, value = null) {
      this.el.focus()
      document.execCommand(command, false, value)
    },
    showStyler (event) {
      event.stopPropagation()

      if (this.isVisible) return
      this.isVisible = true

      if (!this.popper) {
        let position = ''
        let inner = ''

        if (this.$props.type === 'section') {
          position = 'left-start'
          inner = true
        } else {
          position = 'bottom'
          inner = false
        }

        this.popper = new Popper(
          this.el,
          this.$refs.styler,
          {
            modifiers: {
              inner: {
                enabled: inner
              }
            },
            placement: position
          }
        )
      }

      document.addEventListener('click', this.hideStyler, true)
      // TODO: this work incorrectly
      // document.addEventListener('blur', this.hideStyler);
      this.currentOption = ''
    },
    hideStyler (event) {
      if (event && isParentTo(event.target, this.$el)) {
        return
      }

      this.isVisible = false

      if (this.popper) {
        this.popper.destroy()
        this.popper = null
      }

      document.removeEventListener('click', this.hideStyler, true)
      document.removeEventListener('blur', this.hideStyler, true)

      if (this.type === 'section' || this.type === 'grid') {
        return
      }

      this.section.set(`${this.name}.text`, this.el.innerHTML)

      /* if (this.type === 'button') {
          this.section.set(`${this.name}.text`, this.el.innerHTML);
          return;
        }

        this.section.set(this.name, this.el.innerHTML); */
    },
    choseBackground: function () {
      this.backgroundUrl = ''
      this['$refs']['choseBackgroundContentInput'].click()
    },
    choseVideoBackgroundPoster: function () {
      this.isVideoBackgroundPoster = true
      this.choseBackground()
    },
    onChooseBackground: function (event) {
      let self = this
      let file = event.target.files || event.dataTransfer.files

      if (!file.length) {
        return
      }

      this.isRequestProcess = true

      let request = new FormData()
      let $form = $(event.target).parent()

      request.append('file[]', file[0])
      request.append('method', 'storefront.upload')
      request.append('format', 'json')

      $form[0].reset()

      axios.post('http://images.stg.gamenet.ru/restapi', request)
        .then(function (response) {
          if (!response.hasOwnProperty('data') || !response['data'].hasOwnProperty('response') ||
              !response['data']['response'].hasOwnProperty('data') ||
              !Array.isArray(response['data']['response']['data'])) {
            return
          }

          self.showBackground(response['data']['response']['data'][0])
        }).catch(function (e) {
          console.warn(e)
        }).then(function () {
          self.isRequestProcess = false
        })
    },
    setBackgroundColor: function () {
      this.imageBgSelected = false
      this.videoBgSelected = false
      this.backgroundSettingsShow.color = false
      this.addStyle('background-color', this.backgroundColor.hex8)
      this.addStyle('border-color', this.backgroundColor.hex8)
    },
    /**
     * Add style to pseudocalss
     * @param style {object}
     * @param pseudoClass {string}
     */
    changePseudoStyle (style, pseudoClass = 'hover') {
      let poneId = ''
      let pseudoClassValue = {}
      pseudoClassValue[pseudoClass] = style
      poneId = randomPoneId()
      this.el.dataset.pone = poneId
      _.merge(this.pseudoStyles, pseudoClassValue)
      this.options.pseudo = this.pseudoStyles

      let styleTemplate = getPseudoTemplate(poneId, this.pseudoStyles)

      document.head.insertAdjacentHTML('beforeend', styleTemplate)
    },
    /**
     * Add animation to element
     */
    selectAnimation () {
      this.options.classes.forEach((name, index) => {
        // remove other animation classes
        if (name.indexOf('ptah-a') > -1) {
          this.options.classes.splice(index, 1)
        }
      })
      this.options.classes.push(this.animation.className)
    },
    identifyBackgroundSettingsSection: function () {
      if (this.imageBgSelected === true) {
        this.showBackgroundSettingsSection('image')
      }

      if (this.videoBgSelected === true) {
        this.showBackgroundSettingsSection('video')
      }
    },
    showBackground: function (data) {
      if (data['type'] === 'video') {
        this.videoBackgroundSources.push({ source: data['src'], type: data['mime'] })
        this.addVideoBackground()
        this.imageBgSelected = false
        this.videoBgSelected = true
        this.isVideoBackgroundPoster = false
        this.showBackgroundSettingsSection('video')
      } else if (this.isVideoBackgroundPoster === true) {
        this.videoBackgroundPosterSource = data['src']
        this.addVideoBackground()
        this.imageBgSelected = false
        this.videoBgSelected = true
        this.backgroundColor = '#ffffff'
        this.isVideoBackgroundPoster = false
        this.showBackgroundSettingsSection('video')
      } else {
        this.videoBackgroundSources = []
        this.addStyle('background-image', 'url(' + data['src'] + ')')
        this.addStyle('background-position', DEFAULT_BACKGROUND_POSITION)
        this.addStyle('background-repeat', DEFAULT_BACKGROUND_REPEAT)
        this.addStyle('background-size', DEFAULT_BACKGROUND_SIZE)
        this.imageBgSelected = true
        this.videoBgSelected = false
        this.isVideoBackgroundPoster = false
        this.videoBackgroundPosterSource = ''
        this.showBackgroundSettingsSection('image')
      }
    },
    addBackgroundAsLink: function () {
      const extension = (/[.]/.exec(this.backgroundUrl)) ? /[^.]+$/.exec(this.backgroundUrl).pop() : undefined

      if (extension === VIDEO_BACKGROUND_MP4_EXTENSION || extension === VIDEO_BACKGROUND_WEBM_EXTENSION) {
        this.showBackground({ type: 'video', mime: 'video/' + extension, src: this.backgroundUrl })
      } else {
        this.showBackground({ src: this.backgroundUrl })
      }
    },
    showColorPeckerSection: function () {
      this.showBackgroundSettingsSection('color')
    },
    showBackgroundSettingsSection: function (type) {
      for (let key in this.backgroundSettingsShow) {
        if (!this.backgroundSettingsShow.hasOwnProperty(key)) {
          continue
        }

        this.backgroundSettingsShow[key] = false
      }

      if (!this.backgroundSettingsShow.hasOwnProperty(type)) {
        return
      }

      this.backgroundSettingsShow[type] = true
    },
    choseGalleryItemPreview: function () {
      this['$refs']['choseGalleryItemPreviewInput'].click()
    },
    onChooseGalleryItemPreview: function (event) {
      let self = this
      let file = event.target.files || event.dataTransfer.files
      let index = this.el.getAttribute('data-index')

      if (!file.length) {
        return
      }

      let request = new FormData()
      let $form = $(event.target).parent()

      request.append('file[]', file[0])
      request.append('method', 'storefront.upload')
      request.append('format', 'json')

      $form[0].reset()

      axios.post('http://images.stg.gamenet.ru/restapi', request)
        .then(function (response) {
          if (!response.hasOwnProperty('data') || !response['data'].hasOwnProperty('response') ||
              !response['data']['response'].hasOwnProperty('data') ||
              !Array.isArray(response['data']['response']['data'])) {
            return
          }

          const data = response['data']['response']['data'][0]

          self.section.data.images[index].preview.url = data.src
        }).catch(function (e) {
          console.warn(e)
        })
    }
  }
}
</script>

<style lang="sass">
@import '../../assets/sass/app'

.styler
  position: absolute
  top: 0
  z-index: 200
  visibility: hidden
  opacity: 0
  margin: 10px 0
  padding: 5px
  background: $dark
  border-radius: 26px
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  color:#fff
  &-list
    display: flex
    justify-content: center
    align-items: center
    list-style: none
    margin: 0
    padding: 0
    &__dimensions
      margin-right: 5px
  &-input
    background: $white
    color: $dark
    border: 0
    outline: 0
    width: 3rem
    height: 3rem
    border-radius: 3rem
    margin: 0 5px 0 0
    text-align: center
    -webkit-appearance: none
    -moz-appearance: textfield
    appearance: none
  &-button
    display: flex
    justify-content: center
    align-items: center
    outline: 0
    background: $dark
    border: 0
    fill: $white
    color: $white
    width: 3rem
    height: 3rem
    border-radius: 3rem
    margin: 0 5px 0 0
    &:hover
      background: darken($dark, 20%)
    &:first-child
      margin-left: 5px
  &-selector
    margin: 0 5px
  &.is-visible
    visibility: visible
    opacity: 1
  .input-group
    margin: 5px
  input
    border: none
    padding: 0.75rem
    display: inline-block
    vertical-align: top
    border-radius: 1rem
  button
    border: none
    padding: 0.5rem
    border-radius: 1rem

.align
  @extend .styler-list
  height: 42px

.colorer
  @extend .styler-list
  height: 42px
  li
    input
      -webkit-appearance: none
      -moz-appearance: textfield
      appearance: none
      width: 2rem
      height: 2rem
      border-radius: 2rem
      border: 0.2rem solid darken($dark, 20%)
      margin: 0 5px
      outline: none
      &:checked
        border-color: lighten($dark, 20%)
      &:hover
        border-color: lighten($dark, 20%)
      &.is-red
        background: $red
      &.is-blue
        background: $blue
      &.is-green
        background: $green
      &.is-black
        background: $black
      &.is-white
        background: $white

.is-hidden
  display: none

input[type=number]::-webkit-inner-spin-button
input[type=number]::-webkit-outer-spin-button
  -webkit-appearance: none
  margin: 0

label
  display: inline-block
  max-width: 100%
  margin-bottom: 5px
  font-weight: 400

.form-control
  display: block
  width: 100%
  height: 34px
  font-size: 14px
  line-height: 1.42857143
  color: #555
  background-color: #fff
  background-image: none
  border: 1px solid #ccc
  border-radius: 4px
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075)
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075)
  -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s
  -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s
  transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s

.b-styler__bg_options_container
  margin-top: 10px
  padding: 15px 5px
  border-top: 1px solid #ffffff
  display: flex
  flex-direction: column

.b-styler__bg_options__item
  margin-bottom: 0.2rem

.b-font-size
  font-family: Helvetica Neue, Helvetica, Arial
  color: #fff
  width: 100%
  height: 10rem
  text-align: center
  line-height: 10rem

.b-border-radius
  font-family: Helvetica Neue, Helvetica, Arial
  background-color: #fff
  width: 8rem
  height: 8rem
  margin: 1rem auto
  text-align: center
  line-height: 10rem

.button
  min-width: 10rem
  cursor: pointer
  background-color: #ffba00
  transition: all 200ms
  white-space: nowrap
  font-size: 1.4rem
  &:hover
    filter: brightness(120%)
</style>
