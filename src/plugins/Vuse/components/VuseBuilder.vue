<template>
    <div>
        <div class="artboard" id="artboard" ref="artboard" :class="[{ 'is-sorting': $builder.isSorting, 'is-editable': $builder.isEditing}, device]">
            <component v-for="section in $builder.sections" :is="section.name" :key="section.id" :id="section.id"></component>
        </div>
        <div class="controller">
            <div class="controller-intro" v-if="showIntro && !this.$builder.sections.length">
                <label for="projectName">Hello, start your project</label>
                <input class="controller-input" id="projectName" placeholder="project name" v-model="title"/>
                <template v-if="themes">
                    <div class="controller-themes">
                        <button class="controller-theme" v-for="theme in themes" @click="addTheme(theme)">{{ theme.name }}</button>
                    </div>
                </template>
            </div>

            <div class="controller-intro" v-if="emptySections">
              <h3>&larr; Choose layout from the menu</h3>
            </div>

            <div class="controller-panel">
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
              <button class="controller-button is-green" tooltip-position="top" tooltip="View as on monitor" @click="setDevice('is-desktop')">
                <VuseIcon name="monitor"></VuseIcon>
              </button>
              <button class="controller-button is-green" tooltip-position="top" tooltip="View as on laptop" @click="setDevice('is-laptop')">
                <VuseIcon name="laptop"></VuseIcon>
              </button>
              <button class="controller-button is-green" tooltip-position="top" tooltip="View as on tablet" @click="setDevice('is-tablet')">
                <VuseIcon name="tablet"></VuseIcon>
              </button>
              <button class="controller-button is-green" tooltip-position="top" tooltip="View as on mobile" @click="setDevice('is-mobile')">
                <VuseIcon name="mobile"></VuseIcon>
              </button>
            </div>
        </div>
        <ul class="menu" :class="{ 'is-visiable': listShown }" ref="menu">
            <li class="menu-group" v-for="(group, name) in groups" v-if="group.length">
                <div class="menu-header" @click="toggleGroupVisibility"><span class="menu-title">{{ name }}</span><span class="menu-icon">
          <VuseIcon name="arrowDown"></VuseIcon></span></div>
                <div class="menu-body">
                    <template v-for="section in group"><a class="menu-element" @click="addSection(section)" @drag="currentSection = section"><img class="menu-elementImage" v-if="section.cover" :src="section.cover"/><span class="menu-elementTitle">{{ section.name }}</span></a></template>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import Sortable from 'sortablejs'
import VuseIcon from './VuseIcon'
import { mapState, mapActions } from 'vuex'

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
      device: 'is-desktop'
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
    }
  }
}
</script>

<style lang="sass">
@import '../../../assets/sass/app.sass'

.artboard
  transform-origin: top center
  margin: 0 auto
  transition: 0.2s
  background-color: $color-white
  &.is-editable .is-editable
    outline: none
    &:hover
      box-shadow: inset 0 0 0 0.1rem $color-green
  &.is-desktop
    width: 100%
  &.is-laptop
    width: 120rem
  &.is-tablet
    width: 76rem
  &.is-mobile
    width: 37rem

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
    color: $color-white

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
  z-index 1000
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

.floatHover
  cursor: pointer
  box-shadow: 0 14px 28px opacify($black, 0.125), 0 10px 10px opacify($black, 0.1)

</style>
