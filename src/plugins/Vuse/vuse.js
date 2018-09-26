import merge from 'lodash-es/merge'
import Section from './section'
import VuseBuilder from './components/VuseBuilder.vue'
import VuseRenderer from './components/VuseRenderer.vue'
import styler from './styler'
import mixin from './mixin'
import { cleanDOM } from './util'

let PLUGINS = []
let mixier = {}
const BUILDER_OPTIONS = {
  title: '',
  intro: true,
  sections: [],
  plugins: [],
  themes: [],
  columnsPrefix: {
    mobile: 'is-mobile-',
    tablet: 'is-tablet-',
    desktop: 'is-desktop-',
    widescreen: 'is-widescreen-',
    ultrawide: 'is-ultrawide-'
  }
}

// To tell if it is installed or not
let _Vue = null

class Vuse {
  constructor (options) {
    this.isEditing = true
    this.isSorting = false
    this.isRendered = false
    this.title = options.title
    this.intro = options.intro
    this.sections = options.sections
    this.columnsPrefix = options.columnsPrefix
    this.themes = options.themes
    this.components = {}
    this.assets = {
      css: options.css,
      js: options.js || 'js/cjs.js'
    }
    this.installPlugins()
  }

  /**
     * Creates and adds a new section to the list of sections.
     * @param {*} options
     */
  add (options, position) {
    if (position !== undefined) {
      this.sections.splice(position, 0, new Section(options))
      return
    }
    this.sections.push(new Section(options))
  }

  /**
     * Finds a section with the specified id.
     *
     * @param {String|Number} id
     */
  find (id) {
    return this.sections.find(s => s.id === id)
  }

  /**
     * Removes a section with the specified id.
     * @param {String|Number} id
     */
  remove (section) {
    const id = this.sections.findIndex(s => s.id === section.id)
    this.sections.splice(id, 1)
    section.destroy()
  }

  /**
     * Removes a section with the specified id.
     * @param {String|Number} oldIndex
     * @param {String|Number} newIndex
     */
  sort (oldIndex, newIndex) {
    const section = this.sections[oldIndex]
    this.sections.splice(oldIndex, 1)
    this.sections.splice(newIndex, 0, section)
  }

  /**
     * Constructs a document fragment.
     */
  outputFragment () {
    const frag = document.createDocumentFragment()
    frag.appendChild(document.head.cloneNode(true))
    frag.appendChild(this.rootEl.cloneNode(true))

    return frag
  }

  /**
     * clears the builder sections.
     */
  clear () {
    const tempSections = this.sections
    this.sections.forEach(section => section.destroy())
    this.sections = []
    return tempSections
  }

  /**
     * Static helper for components registration pre-installation.
     *
     * @param {String} name
     * @param {Object} definition
     */
  static component (name, definition) {
    // Just make a plugin that installs a component.
    Vuse.use((ctx) => {
      ctx.builder.component(name, definition)
    })
  }

  /**
     * Acts as a mixin for subcomponents.
     * @param {Object} mixinObj
     */
  static mix (mixinObj) {
    mixier = merge(mixier, mixinObj)
  }

  /**
     * Adds a component section to the builder and augments it with the styler.
     * @param {*} name
     * @param {*} definition
     */
  component (name, definition) {
    // reoslve the component name automatically.
    if (typeof name === 'object') {
      definition = name
      name = definition.name
    }

    // if passed a plain object
    if (!definition.extend) {
      definition = _Vue.extend(definition)
    }

    this.components[name] = definition.extend({
      directives: { styler: this.styler },
      mixins: [this.mixin],
      components: mixier.components
    })
  }

  /**
     * Installs added plugins.
     */
  installPlugins () {
    PLUGINS.forEach((ctx) => {
      ctx.plugin({ builder: this, Vue: _Vue }, ctx.options)
    })
    // reset to prevent duplications.
    PLUGINS = []
  }

  static install (Vue, options = {}) {
    // already installed
    if (_Vue) return

    _Vue = Vue
    const builder = new Vuse(Object.assign({}, BUILDER_OPTIONS, options))
    // configer assets output location
    Vue.util.defineReactive(builder, 'sections', builder.sections)
    Vue.util.defineReactive(builder, 'isEditing', builder.isEditing)
    Vue.util.defineReactive(builder, 'isSorting', builder.isSorting)
    const extension = {
      components: builder.components,
      beforeCreate () {
        this.$builder = builder
      }
    }

    // register the main components.
    Vue.component('VuseBuilder', Vue.extend(VuseBuilder).extend(extension))
    Vue.component('VuseRenderer', Vue.extend(VuseRenderer).extend(extension))
  }

  /**
     * The plugin to be installed with the builder. The function receives the installation context which
     * contains the builder instance and the Vue prototype.
     *
     * @param {Function} plugin
     * @param {Object} options
     */
  static use (plugin, options = {}) {
    if (typeof plugin !== 'function') {
      return console.warn('Plugins must be a function')
    }

    // append to the list of to-be installed plugins.
    PLUGINS.push({ plugin, options })
  }

  set (data) {
    this.title = data.title !== undefined ? data.title : this.title
    if (data.sections && Array.isArray(data.sections)) {
      this.sections = data.sections.map(section => {
        const sectionData = {
          name: section.name,
          schema: section.schema,
          data: section.data
        }
        if (!sectionData.schema) {
          sectionData.schema = this.components[sectionData.name].options.$schema
        }

        return new Section(sectionData)
      })
    }
  }

  /**
     * Outputs a JSON representation of the builder that can be used for rendering with the renderer component.
     */
  toJSON () {
    return {
      title: this.title,
      sections: this.sections.map(s => ({
        name: s.name,
        data: s.data
      }))
    }
  }

  /**
     * Previews the created page in a seperate tap/window.
     */
  preview () {
    const frag = this.outputFragment()
    const artboard = frag.querySelector('#artboard')
    const printPreview = window.open('about:blank', 'print_preview')
    const printDocument = printPreview.document
    cleanDOM(frag)
    printDocument.open()
    printDocument.write(
      `<!DOCTYPE html>
        <html>
          <head>
            <title>${this.title}</title>
            <link href="${this.assets.css}" rel="stylesheet">
            <meta name="viewport" content="width=device-width, initial-scale=1">
          </head>
          <body>
            ${artboard.innerHTML}
            <script src="${this.assets.js}"></script>
          <body>
        </html>`
    )
  }

  getCss (fragment) {
    let styles = ''
    for (let node of fragment.querySelectorAll('style')) {
      styles += node.innerHTML
    }

    return styles
  }

  previewDevices () {
    const frag = this.outputFragment()
    const artboard = frag.querySelector('#artboard')
    const printPreview = window.open('about:blank', 'print_preview')
    const printDocument = printPreview.document
    cleanDOM(frag)
    let styles = this.getCss(frag)

    let html = `<!DOCTYPE html>
        <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style>
              ${styles}
            </style>
          </head>
          <body>
            ${artboard.innerHTML}
          <body>
            <script src="${window.location.origin + '/js/cjs.js'}"></script>
        </html>`

    html = encodeURIComponent(html)

    printDocument.open()
    printDocument.write(
      `<!DOCTYPE html>
        <html>
          <head>
            <title>${this.title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">

            <style type="text/css">
                button {
                    -webkit-appearance: button;
                    cursor: pointer;
                }

                .controller-panel {
                    position: fixed;
                    z-index: 200;
                    bottom: 30px;
                    right: 40px;
                }

                .controller-button.is-green {
                    background-color: #18d88b;
                }

                .controller-button:not(:last-child) {
                    margin-right: 20px;
                }

                .controller-button {
                    -webkit-transition: 0.2s;
                    transition: 0.2s;
                    border: none;
                    outline: none;
                    border-radius: 20px;
                    padding: 5px;
                    color: #fff;
                    fill: #fff;
                    font-size: 16px;
                }

                .controller-button.is-green:hover {
                    background-color: #13ad6f;
                }

                .controller-button svg {
                    -webkit-transition: 0.2s;
                    transition: 0.2s;
                }
                svg:not(:root) {
                    overflow: hidden;
                }

                .vuse-icon {
                    display: block;
                    width: 20px;
                    height: 20px;
                }

                iframe {
                    outline: medium none;
                    height: 100%;
                    border: none;
                    margin: auto;
                    display: block;
                    transition: width 0.35s ease,height 0.35s ease;
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                }

                iframe.is-desktop {
                    width: 100%;
                }

                iframe.is-tablet {
                    width: 768px;
                }

                iframe.is-mobile {
                    width: 375px;
                }
            </style>

            <script type="text/javascript">
                function setDevice(device) {
                  var frame = document.getElementById('container');

                  console.log(frame);

                  if (frame.length <= 0) {
                      return;
                  }

                  frame.className = device;
                }
            </script>
          </head>
          <body>
            <div class="controller-panel" style="height: 30px;">
                <button class="controller-button is-green" onclick="setDevice('is-desktop')">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="vuse-icon" viewBox="0 0 576 512">
                        <path d="M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"></path>
                    </svg>
                </button>
                <button class="controller-button is-green" onclick="setDevice('is-tablet')">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="vuse-icon" viewBox="0 0 448 512">
                        <path d="M400 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM224 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm176-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h328c6.6 0 12 5.4 12 12v312z"></path>
                    </svg>
                </button>
                <button class="controller-button is-green" onclick="setDevice('is-mobile')">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="vuse-icon" viewBox="0 0 320 512">
                        <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path>
                    </svg>
                </button>
            </div>
            <iframe id="container" allowfullscreen="allowfullscreen" class="is-desktop" src="data:text/html;charset=utf-8,${html}"></iframe>
          <body>
        </html>`
    )
  }

  /**
     * Exports the builder instance to a specified output. default is json.
     *
     * @param {String} method
     */
  export (method = 'json') {
    if (method === 'pwa' || method === 'zip') {
      if (typeof this.download === 'function') {
        return this.download(this.assets)
      }

      return console.warn('You do not have the zip plugin installed.')
    }

    if (method === 'preview') {
      return this.preview()
    }

    if (method === 'preview-devices') {
      return this.previewDevices()
    }

    return this.toJSON()
  }
};

// use the plugin API to add the styler and mixin functionalities.
Vuse.use(styler)
Vuse.use(mixin)

export default Vuse
