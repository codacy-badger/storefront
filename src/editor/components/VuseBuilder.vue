<template>
  <div>
    <div class="artboard" id="artboard" ref="artboard" :class="[{ 'is-sorting': $builder.isSorting, 'is-editable': $builder.isEditing, 'fp-scroll': fullPageScroll === 'yes'}, device]">
      <component v-for="section in $builder.sections" :is="section.name" :key="section.id" :id="section.id"></component>
      <div class="controller-intro" v-if="emptySections">
        <h3>&larr; Choose layout from the menu</h3>
      </div>
      <div class="controller-intro" v-if="showIntro && !this.$builder.sections.length">
        <label for="projectName">Hello, start your project</label>
        <input class="controller-input" id="projectName" placeholder="project name" v-model="title"/>
        <template v-if="themes">
          <div class="controller-themes">
            <button class="controller-theme" v-for="(theme, index) in themes" :key="index" @click="addTheme(theme)">{{ theme.name }}</button>
          </div>
        </template>
      </div>
    </div>
    <div class="controller">
        <div class="controller-panel">
          <button class="controller-button is-green" tooltip-position="top" tooltip="Page settings" @click="showSettings = !showSettings">
            <VuseIcon name="cog"></VuseIcon>
          </button>
          <button class="controller-button is-green" tooltip-position="top" tooltip="save" @click="save">
            <VuseIcon name="floppy"></VuseIcon>
          </button>
          <button class="controller-button is-green" tooltip-position="top" tooltip="preview" @click="preview">
              <VuseIcon name="eye"></VuseIcon>
          </button>
          <button class="controller-button is-green" tooltip-position="top" tooltip="export" @click="submit">
              <VuseIcon name="download"></VuseIcon>
          </button>
          <button class="controller-button is-red" v-if="!tempSections" tooltip-position="top" tooltip="clear sections" @click="clearSections">
              <VuseIcon name="trash"></VuseIcon>
          </button>
          <button class="controller-button is-gray" v-if="tempSections" tooltip-position="top" tooltip="undo" @click="undo">
              <VuseIcon name="undo"></VuseIcon>
          </button>
          <button class="controller-button is-blue" tooltip-position="top" tooltip="sorting" :class="{ 'is-red': $builder.isSorting }" @click="toggleSort">
              <VuseIcon name="sort"></VuseIcon>
          </button>
          <button class="controller-button is-blue" tooltip-position="top" tooltip="add section" :class="{ 'is-red': listShown, 'is-rotated': listShown }" :disabled="!$builder.isEditing" @click="newSection">
              <VuseIcon name="plus"></VuseIcon>
          </button>
          <button class="controller-button is-dark" tooltip-position="top" tooltip="Back to landings" @click="backToLandings">
            <VuseIcon name="back"></VuseIcon>
          </button>
        </div>
        <div class="main-panel">
          <button class="controller-button" tooltip-position="top" tooltip="on desktop" :class="{ 'is-blue': device === 'is-desktop', 'is-green': device !== 'is-desktop' }" @click="setDevice('is-desktop')">
            <VuseIcon name="monitor"></VuseIcon>
          </button>
          <button class="controller-button" tooltip-position="top" tooltip="on laptop" :class="{ 'is-blue': device === 'is-laptop', 'is-green': device !== 'is-laptop' }" @click="setDevice('is-laptop')">
            <VuseIcon name="laptop"></VuseIcon>
          </button>
          <button class="controller-button" tooltip-position="top" tooltip="on tablet" :class="{ 'is-blue': device === 'is-tablet', 'is-green': device !== 'is-tablet' }" @click="setDevice('is-tablet')">
            <VuseIcon name="tablet"></VuseIcon>
          </button>
          <button class="controller-button" tooltip-position="top" tooltip="on mobile" :class="{ 'is-blue': device === 'is-mobile', 'is-green': device !== 'is-mobile' }" @click="setDevice('is-mobile')">
            <VuseIcon name="mobile"></VuseIcon>
          </button>
        </div>
    </div>
    <ul class="menu" :class="{ 'is-visiable': listShown }" ref="menu">
        <li class="menu-group" v-for="(group, name) in groups" v-bind:key="name" v-if="group.length">
            <div class="menu-header" @click="toggleGroupVisibility"><span class="menu-title">{{ name }}</span><span class="menu-icon">
      <VuseIcon name="arrowDown"></VuseIcon></span></div>
            <div class="menu-body">
                <template v-for="(section, index) in group"><a class="menu-element" v-bind:key="index" @click="addSection(section)" @drag="currentSection = section"><img class="menu-elementImage" v-if="section.cover" :src="section.cover"/><span class="menu-elementTitle">{{ section.name }}</span></a></template>
            </div>
        </li>
    </ul>
    <aside class="page-settings" :class="{ 'is-visiable': showSettings }">
      <form v-on:submit.prevent="applySettings">
        <div class="page-settings__tabs">
          <a href="" v-for="(tab, index) in tabs"
             :key="index"
             :class="{'is-active': showTab === index}"
             class="page-settings__tab-button"
             @click.prevent="showTab = index">{{tab}}</a>
        </div>
        <div class="page-settings__tab-content" v-if="showTab === 0">
          <fieldset>
            <legend>Page title</legend>
            <input type="text" v-model="pageTitle" placeholder="type awesome title">
            <div class="page-settings__favicon">
              <div class="page-settings__favicon--preview">
                <img :src="favicon" alt="">
              </div>
              <div>
                <span class="page-settings__label">Page icon (32x32 ico, png, gif)</span>
                <input
                  style="display: none;"
                  type="file"
                  accept="image/*,video/mp4,video/x-m4v,video/*"
                  v-bind:ref="'choseIconContentInput'"
                  @change="onChooseIcon"/>
                <button class="styler-button" @click.prevent="choseIcon" title="Upload image">
                  <VuseIcon name="upload"></VuseIcon>
                </button>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>OpenGraph</legend>
            <div v-for="(item, index) in ogTags" :key="index" class="og-tag">
              <select v-model="item.property" class="og-input">
                <option value="og:title" selected>og:title</option>
                <option value="og:description">og:description</option>
                <option value="og:image">og:image</option>
                <option value="og:type">og:type</option>
                <option value="og:url">og:url</option>
                <option value="og:locale">og:locale</option>
                <option value="og:locale:alternate">og:locale:alternate</option>
                <option value="og:video">og:video</option>
              </select>
              <input type="text" v-model="item.content" placeholder="content" class="og-input">
              <button class="controller-button" @click.prevent="deleteTag(index)" v-if="index !== ogTags.length-1 ">
                <VuseIcon name="trash"></VuseIcon>
              </button>
              <button class="controller-button is-green" tooltip-position="top" tooltip="add tag" @click.prevent="addTag" v-if="index === ogTags.length-1 ">
                <VuseIcon name="plus"></VuseIcon>
              </button>
            </div>
          </fieldset>
          <fieldset>
            <legend>GTM container ID <a href="https://developers.google.com/tag-manager/quickstart" target="_blank" class="help">?</a> </legend>
            <input type="text" v-model="gtmId" placeholder="GTM-XXXXXX">
          </fieldset>
        </div>
        <div class="page-settings__tab-content" v-if="showTab === 1">
          <fieldset>
            <legend>Page background</legend>
            <div class="page-settings__upload">
              <input type="text" v-model="pageBackgroundUrl" placeholder="background url">
              <input
                style="display: none;"
                type="file"
                accept="image/*,video/mp4,video/x-m4v,video/*"
                v-bind:ref="'choseBackgroundContentInput'"
                @change="onChooseBackground"/>
              <button class="styler-button" @click.prevent="choseBackground" title="Upload image">
                <VuseIcon name="upload"></VuseIcon>
              </button>
            </div>
            <div><input type="text" v-model="pageBackgroundColor" placeholder="background color (#000000)"></div>
            <div>
              <span class="page-settings__label">Background position</span>
              <input type="text" v-model="pageBackgroundPosX" placeholder="x" class="small">
              <input type="text" v-model="pageBackgroundPosY" placeholder="y" class="small">
            </div>
            <div>
              <span class="page-settings__label">Background size</span>
              <select name="background-size" id="" v-model="bgSize">
                <option value="cover">cover</option>
                <option value="contain">contain</option>
              </select>
            </div>
            <div>
              <input type="checkbox" v-model="bgRepeat" true-value="repeat" false-value="no-repeat" name="bgrepeat" id="bgrepeat">
              <label for="bgrepeat">Repeat</label>
            </div>
            <div>
              <input type="checkbox" v-model="bgAttachment" true-value="fixed" false-value="scroll" name="bgfix" id="bgfix">
              <label for="bgfix">Fixed</label>
            </div>
            <br><br>
            <div>
            <span class="page-settings__label">
              Video background
            </span>
              <div class="page-settings__upload">
                <input type="text" v-model="bgVideo" placeholder="video url (*.mp4)">
                <input
                  style="display: none;"
                  type="file"
                  accept="image/*,video/mp4,video/x-m4v,video/*"
                  v-bind:ref="'choseVideoBackgroundContentInput'"
                  @change="onChooseVideoBackground"/>
                <button class="styler-button" @click.prevent="choseVideoBackground" title="Upload image">
                  <VuseIcon name="upload"></VuseIcon>
                </button>
              </div>
            </div>
            <div>
              <input type="checkbox" v-model="bgVideoFix" true-value="fixed" false-value="" name="bgvidfix" id="bgvidfix">
              <label for="bgvidfix">Fixed</label>
            </div>
          </fieldset>
          <fieldset>
            <legend>Full page scroll</legend>
            <input type="checkbox" id="fpscroll" v-model="fullPageScroll" true-value="yes" false-value="no">
            <label for="fpscroll">Enabled</label>
          </fieldset>
        </div>
        <div class="page-settings__controls">
          <input type="submit" value="Save" class="page-settings__save">
          <button class="page-settings__cancel">Cancel</button>
        </div>
      </form>
    </aside>
  </div>
</template>

<script>
import Sortable from 'sortablejs'
import VuseIcon from './VuseIcon'
import { mapState, mapActions } from 'vuex'
import api from '@store/api'

export default {
  name: 'VuseBuilder',
  components: {
    VuseIcon
  },
  props: {
    showIntro: {
      type: Boolean,
      default: true
    },
    data: {
      type: Object,
      default: () => ({
        title: '',
        sections: []
      })
    }
  },
  data () {
    return {
      title: null,
      listShown: false,
      tempSections: null,
      sections: this.getSections(),
      currentSection: '',
      groups: {},
      device: 'is-desktop',
      showSettings: false,
      pageTitle: '',
      pageBackgroundUrl: '',
      pageBackgroundColor: '',
      pageBackgroundPosX: '',
      pageBackgroundPosY: '',
      bgSize: '',
      bgAttachment: '',
      bgRepeat: 'no-repeat',
      bgVideo: '',
      bgVideoFix: '',
      fullPageScroll: 'no',
      ogTags: [ { property: '', content: '' } ],
      gtmId: '',
      favicon: 'https://protocol.one/wp-content/uploads/2018/09/03.png',
      tabs: ['SEO', 'View'],
      showTab: 0
    }
  },

  watch: {
    title (value) {
      this.$builder.title = value
      document.title = value
    },
    emptySections (value) {
      if (value) {
        this.listShown = true
      }
    }
  },
  created () {
    // sets the initial data.
    this.$builder.set(this.data)
    this.$builder.settings = {}
    this.title = this.$builder.title
    this.themes = this.$builder.themes
    this.generateGroups()

    if (this.$route.params.slug !== 'new') {
      this.getLandingData(this.$route.params.slug).then((data) => {
        this.$builder.landing = this.$route.params.slug
        // Open current landing/preset
        if (this.currentLanding.sections) {
          this.addTheme(this.currentLanding)
        } else {
          this.addTheme(Object.assign(this.data, this.currentLanding.theme))
        }

        if (data.settings && Object.keys(data.settings).length) {
          this.$builder.settings = data.settings
          if (this.$builder.settings.styles !== undefined) this.styleArtboard(this.$builder.settings.styles)
          this.ogTags = data.settings.ogTags
          this.bgVideo = data.settings.video
          this.bgVideoFix = data.settings.videoPosition
          this.pageTitle = data.settings.title
          this.fullPageScroll = data.settings.fullPageScroll
          this.pageBackgroundUrl = data.settings.styles.backgroundImage
          this.pageBackgroundColor = data.settings.styles.backgroundColor
          this.pageBackgroundPositionX = data.settings.styles.backgroundPositionX
          this.pageBackgroundPositionY = data.settings.styles.backgroundPositionY
          this.bgAttachment = data.settings.styles.backgroundAttachment
          this.bgRepeat = data.settings.styles.backgroundRepeat
          this.bgSize = data.settings.styles.backgroundSize
          this.gtmId = data.settings.gtmId
          this.favicon = data.sttings.favicon
        }

        if (this.bgVideo.length) this.insertVideo(this.bgVideo)
      })
    }
  },
  computed: {
    ...mapState([
      'currentLanding'
    ]),
    emptySections: function () {
      return !this.showIntro && !this.$builder.sections.length
    }
  },
  mounted () {
    this.$builder.rootEl = this.$refs.artboard
    const groups = this.$refs.menu.querySelectorAll('.menu-body')
    const _self = this
    groups.forEach((group) => {
      Sortable.create(group, {
        group: {
          name: 'sections-group',
          put: false,
          pull: 'clone'
        },
        sort: false
      })
    })
    this.sortable = Sortable.create(this.$refs.artboard, {
      group: {
        name: 'artboard',
        put: 'sections-group'
      },
      animation: 150,
      scroll: true,
      scrollSpeed: 10,
      sort: false,
      disabled: true,
      preventOnFilter: false,
      onAdd (evt) {
        _self.addSection(_self.currentSection, evt.newIndex)
        evt.item.remove()
      },
      onUpdate (evt) {
        _self.$builder.sort(evt.oldIndex, evt.newIndex)
      }
    })
  },

  updated () {
    if (this.$builder.scrolling) {
      this.$builder.scrolling(this.$refs.artboard)
    }
  },

  beforeDestroy () {
    this.$builder.clear()
  },
  methods: {
    ...mapActions([
      'getLandingData'
    ]),
    newSection () {
      // add the section immediatly if none are present.
      if (this.sections.length === 1) {
        this.addSection(this.sections[0])
        return
      }
      this.toggleListVisibility()
    },
    addSection (section, position) {
      this.$builder.add(section, position)
      this.toggleListVisibility()
    },
    clearSections () {
      this.tempSections = this.$builder.clear()
      setTimeout(() => {
        this.tempSections = null
      }, 5000)
    },
    undo () {
      this.$builder.sections = this.tempSections
      this.tempSections = null
    },
    addTheme (theme) {
      this.$builder.set(theme)
    },
    toggleSort () {
      this.$builder.isSorting = !this.$builder.isSorting
      this.$builder.isEditing = !this.$builder.isSorting
      if (!this.$builder.isSorting && this.sortable) {
        this.sortable.option('sort', false)
        this.sortable.option('disabled', true)
        return
      }
      this.sortable.option('disabled', false)
      this.sortable.option('sort', true)
    },
    toggleListVisibility () {
      this.listShown = !this.listShown
      this.sortable.option('disabled', !this.listShown)
    },
    showList () {
      this.listShown = true
      this.sortable.option('disabled', false)
    },
    hideList () {
      this.listShown = false
      this.sortable.option('disabled', true)
    },
    toggleGroupVisibility (e) {
      const element = e.target
      const group = element.closest('.menu-group')
      group.classList.toggle('is-visiable')
    },
    save () {
      this.$emit('save', this.$builder)
    },
    submit () {
      this.$emit('saved', this.$builder)
    },
    preview: function () {
      this.$emit('preview', this.$builder)
    },
    generateGroups () {
      let groups = { random: [] }

      // group sections together
      this.sections.forEach((section) => {
        let sectionGroup = section.group
        if (!sectionGroup) {
          groups.random.push(section)
          return
        }
        if (!groups[sectionGroup]) {
          groups[sectionGroup] = [section]
          return
        }
        groups[sectionGroup].push(section)
      })
      this.groups = groups
    },
    getSections () {
      let sections = []

      // get sections data
      sections = Object.keys(this.$builder.components).map((sec) => {
        return {
          name: sec,
          group: this.$builder.components[sec].options.group,
          cover: this.$builder.components[sec].options.cover,
          schema: this.$builder.components[sec].options.$schema
        }
      })
      return sections
    },
    setDevice (device) {
      this.device = device
    },
    backToLandings () {
      this.save()
      this.$router.push({ path: `/dashboard` })
    },
    applySettings () {
      const data = {
        title: this.pageTitle || false,
        video: this.bgVideo || false,
        videoPosition: this.bgVideoFix,
        ogTags: this.ogTags,
        fullPageScroll: this.fullPageScroll,
        gtmId: this.gtmId,
        favicon: this.favicon,
        styles: {
          backgroundImage: this.pageBackgroundUrl || false,
          backgroundColor: this.pageBackgroundColor || false,
          backgroundAttachment: this.bgAttachment,
          backgroundRepeat: this.bgRepeat,
          backgroundSize: this.bgSize,
          backgroundPositionX: this.pageBackgroundPosX,
          backgroundPositionY: this.pageBackgroundPosY
        }
      }
      this.styleArtboard(data.styles)
      if (data.video) this.insertVideo(data.video)
      this.$builder.settings = data

      this.showSettings = false
    },
    styleArtboard (styles) {
      Object.keys(styles).forEach((style) => {
        if (styles[style] && style !== 'backgroundImage') this.$refs.artboard.style[style] = styles[style]
        if (styles[style] && style === 'backgroundImage') this.$refs.artboard.style[style] = `url(${styles[style]})`
      })
    },
    insertVideo (video) {
      if (document.getElementById('video_bg')) {
        document.getElementById('video_bg').remove() // rm old video if exist
      }

      let node = document.createElement('video')
      node.id = 'video_bg'
      node.setAttribute('autoplay', 'autoplay')
      node.setAttribute('loop', 'loop')
      node.setAttribute('muted', true)
      if (this.bgVideoFix.length > 0) node.classList.add(this.bgVideoFix)
      node.innerHTML = `<source src="${video}" type="video/mp4"></source>`
      this.$refs.artboard.appendChild(node)
    },
    addTag () {
      this.ogTags.push({ property: '', content: '' })
    },
    deleteTag (index) {
      this.ogTags.splice(index, 1)
    },
    choseIcon () {
      this['$refs']['choseIconContentInput'].click()
    },
    onChooseIcon (event) {
      this.uploadFile(event)
        .then((data) => { this.favicon = data.src })
        .catch((error) => console.warn(error))
    },
    choseBackground: function () {
      this.backgroundUrl = ''
      this['$refs']['choseBackgroundContentInput'].click()
    },
    onChooseBackground (event) {
      this.uploadFile(event)
        .then((data) => { this.pageBackgroundUrl = data.src })
        .catch((error) => console.warn(error))
    },
    choseVideoBackground: function () {
      this.backgroundUrl = ''
      this['$refs']['choseVideoBackgroundContentInput'].click()
    },
    onChooseVideoBackground (event) {
      this.uploadFile(event)
        .then((data) => { this.bgVideo = data.src })
        .catch((error) => console.warn(error))
    },
    uploadFile (event) {
      let file = event.target.files || event.dataTransfer.files

      if (!file.length) {
        return
      }

      let request = new FormData()

      request.append('file[]', file[0])
      request.append('method', 'storefront.upload')
      request.append('format', 'json')

      return api.uploadFile(request)
    }
  }
}
</script>

<style lang="sass">
@import '../../assets/sass/app'

.artboard
  transform-origin: top center
  margin: 0 auto
  transition: 0.2s
  min-height: 100vh
  position: relative
  &.is-editable .is-editable
    outline: none
    &:hover
      box-shadow: inset 0 0 0.5rem 0.2rem $color-green
  &.is-desktop
    width: 100%
  &.is-laptop
    width: 120rem
  &.is-tablet
    width: 76rem
  &.is-mobile
    width: 37rem
  &.fp-scroll section
    height: 100vh !important
  &:before,
  &:after
    content: ''
    background-color: #9E9E9E
    position: absolute
    top: 0
    bottom: 0
    width: 10000rem
    z-index: 1
  &:before
    right: 100%
  &:after
    left: 100%

.controller
  box-sizing: border-box
  &-panel
    position: fixed
    z-index: 200
    bottom: 3rem
    right: 4rem
  &-input
    outline: none
    border: 1px solid $gray
    padding: 0.5rem 1rem
    margin: 2rem 0
    border-radius: 4rem
    width: 100%
    font-size: 1.6rem
    &:focus
      border-color: $blue
      box-shadow: 0 0 0 0.2rem rgba($blue, 50%)
  &-button
    transition: 0.2s
    border: none
    outline: none
    border-radius: 2rem
    padding: 0.5rem
    color: $white
    fill: $white
    font-size: 1.6rem
    svg
      transition: 0.2s
    &:not(:last-child)
      margin-right: 2rem
    &.is-rotated >svg
      transform: rotate(45deg)
    &:hover
      @extends $floatHover
    &.is-blue
      background-color: $blue
      &:hover
        background-color: darken($blue, 20%)
    &.is-red
      background-color: $red
      &:hover
        background-color: darken($red, 20%)
    &.is-green
      background-color: $green
      &:hover
        background-color: darken($green, 20%)
    &.is-dark
      background-color: $dark
      &:hover
        background-color: darken($dark, 20%)
    &.is-gray
      background-color: $gray
      &:hover
        background-color: darken($gray, 20%)
  &-intro
    width: 100%
    max-width: 50rem
    margin: auto
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    padding: 7rem 5rem
    text-align: center
    font-size: 3rem
    color: $dark

  &-themes
    display: flex
    flex-direction: column
    width: 100%

  &-theme
    background-color: $white
    color: $dark
    border: 0.1rem solid $gray
    margin: 0.5rem
    padding: 2rem
    border-radius: 0.4rem
    width: 100%
    cursor: pointer
    font-size: 1.6rem
    &:hover
      border-color: $blue
.menu
  $self: &
  user-select: none
  -moz-user-select: none
  position: fixed
  z-index: 1000
  top: 0
  left: 0
  bottom: 0
  margin: 0
  width: 25rem
  background: $white
  padding: 2rem 1rem
  display: flex
  flex-direction: column
  overflow-y: auto
  list-style: none
  transition: 0.4s
  box-shadow: 0.1rem 0 1rem rgba($dark, 20%)
  transform: translate3d(-100%, 0, 0)
  &.is-visiable
    transform: translate3d(0, 0, 0)
  &-body
    display: none
    padding: 0
    margin: 0
    list-style: none
    #{$self}-group &
      width: 100%
      margin: 0.5rem auto
    #{$self}-group.is-visiable &
      display: block
  &-icon
    width: 2rem
    height: 2rem
    fill: $gray
    transition: 0.2s
    cursor: pointer
    #{$self}-group.is-visiable &
      transform: rotate(180deg)

  &-element
    position: relative
    display: inline-flex
    justify-content: center
    align-items: center
    width: 100%
    min-height: 5rem
    margin: 0.5rem
    background: darken($gray, 10%)
    transition: 0.3s
    cursor: pointer
    color: $white
    overflow: hidden
    user-select: none
    -moz-user-select: none
    &:not(:last-child)
      margin-bottom: 1rem
    &:hover
      @extends $floatHover

  &-elementImage
    max-width: 100%
    pointer-events: none
    +
      #{$self}-elementTitle
        position: absolute
        right: 0
        bottom: 0
        left: 0
        text-shadow: 0.1rem 0.1rem 0.2rem rgba($black, 80%)
        text-align: center
        padding: 0.5rem
        display: none
        #{$self}-element:hover &
          display: inline-block

  &-header
    display: flex
    justify-content: space-between
    align-items: center
    padding: 1rem 0.5rem
    border-bottom: 0.1rem solid rgba($gray, 5%)
    cursor: pointer

.sortable-ghost
  opacity: 0.3
  box-shadow: 0 0 0.2rem 0.1rem $blue

.main-panel
  position: fixed
  z-index: 200
  bottom: 3rem
  left: 4rem

.b-landing-constructor__button
  width: 100%
  height: 100%
  display: inline-block
  font-weight: 400
  text-align: center
  white-space: nowrap
  vertical-align: middle
  border: 1px solid #545b62
  border-radius: .25rem
  transition: color .15s
  background-color: #545b62
  cursor: pointer
  color: #ffffff

.b-landing-constructor__video_type
  height: 100%
  display: flex
  justify-content: center
  align-items: center

.controller-panel, .styler
  z-index: 9999

.vuse-icon
  width: 2rem
  height: 2rem
  display: inline-block
  vertical-align: middle
  cursor: pointer
  &_trash

.floatHover
  cursor: pointer
  box-shadow: 0 14px 28px opacify($black, 0.125), 0 10px 10px opacify($black, 0.1)

.page-settings
  user-select: none
  -moz-user-select: none
  position: fixed
  top: 0
  right: 0
  bottom: 0
  margin: 0
  width: 45rem
  background: #fff
  padding: 2rem 1rem 8rem
  display: flex
  flex-direction: column
  overflow-y: auto
  list-style: none
  transition: 0.4s
  box-shadow: 0.1rem 0 1rem #323c47
  transform: translate3d(100%, 0, 0)
  z-index: 999
  &.is-visiable
    transform: translate3d(0, 0, 0)
  &__upload
    display: flex
    justify-content: space-between
    input[type="text"]
      width: 87% !important
  &__label
    display: block
    margin-bottom: 5px
  &__controls
    padding: 0 21px
  &__save, &__cancel
    border: none
    font-size: 14px
    border-radius: 3px
    color: #fff
    padding: 5px 10px
    margin-right: 8px
    cursor: pointer
    &:active
      position: relative
      top: 1px
  &__save
    background: $green
    &:hover
      background: lighten($green, 10%)
  &__cancel
    background: $dark
    &:hover
      background: lighten($dark, 10%)
  &__favicon
    display: flex
    justify-content: flex-start
    &--preview
      width: 64px
      height: 64px
      margin-right: 10px
      display: flex
      justify-content: center
      align-items: center
      background: $color-border-dark
      img
        max-width: 32px
  &__tabs
    padding-left: 21px
    margin-bottom: 25px
    border-bottom: 2px solid lighten($dark, 20%)
  &__tab-button
    text-decoration: none
    display: inline-block
    margin: 0 10px 10px 0
    border-radius: 4px
    padding: 7px 12px
    color: #fff
    background: lighten($dark, 20%)
    &.is-active
      background: $dark
  fieldset
    border: 1px solid #e7e8eb
    border-radius: 3px
    padding: 15px 20px
    margin-bottom: 20px
  legend
    font-size: 18px
    position: relative
  input[type="text"], select
    border: 1px solid #e7e8eb
    border-radius: 3px
    padding: 5px 10px
    font-size: 14px
    width: 100%
    margin-bottom: 10px
  input[type="checkbox"]
    position: relative
    top: 1px
  .small
    width: 20% !important
    margin-right: 10px
  .og-input
    width: 87% !important
  .og-tag
    position: relative
    .controller-button
      position: absolute
      right: 0
      top: 20px
  .help
    display: flex
    justify-content: center
    align-items: center
    width: 20px
    height: 20px
    color: #fff
    background: $green
    border-radius: 50%
    position: absolute
    top: -2px
    right: -21px

</style>
