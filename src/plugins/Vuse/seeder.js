import * as types from './types'
import { isObject } from './util'
import * as _ from 'lodash-es'

const ASSETS_DIR = window.location.origin
const DEFAULT_OPTIONS = {
  text: '',
  classes: [],
  styles: {},
  resizable: false,
  hasLink: false,
  removable: false,
  aligned: false,
  typography: false,
  colorize: false,
  box: false, // (colorer)
  canCopy: false
}

/**
 * Deprecated types:
 * Logo, Avatar, Quote, Number, ClassList, Title
 * @type {Map}
 */
const data = new Map([
  [types.Text, () => (_.merge({}, DEFAULT_OPTIONS, {
    box: true,
    text: 'Lorem ipsum',
    aligned: true,
    typography: true,
    removable: true,
    colorize: true,
    styles: {
      'font-family': "Open Sans",
      'font-size': false,
      'font-weight': false,
      'font-style': false,
      'text-decoration': false,
      'text-align': false,
      'color': false,
    }
  }))],
  [types.Image, 'https://gn792.cdn.gamenet.ru/TY0Xv2riHu/6qfh3/o_1Pvytf.png'],
  [types.Link, () => ({
    text: 'Link',
    canCopy: true,
    classes: [],
    href: '' })
  ],
  [types.StyleObject, () => (_.merge({}, DEFAULT_OPTIONS,
    {
      box: true,
      resizable: true,
      removable: true,
      styles: {
        'background-image': 'https://gn510.cdn.gamenet.ru/TY0Xv2riHu/6nOTD/o_yT2c2.png',
        'background-position': false,
        'background-repeat': false,
        'background-size': false,
        'background-color': false,
        'background': false
      }
    })
  )],
  [types.Button, () => (_.merge({}, DEFAULT_OPTIONS,
    {
      box: true,
      canCopy: true,
      resizable: true,
      hasLink: true,
      removable: true,
      aligned: true,
      typography: true,
      text: 'Click Me!',
      classes: [],
      href: '',
      styles: {
        'background-image': false,
        'background-position': false,
        'background-repeat': false,
        'background-size': false,
        'background-color': false,
        'background': false,
        'color': '#000',
        'border-color': false,
        'font-size': '1.4',
        'border-radius': 0,
        'font-weight': false,
        'font-style': false,
        'font-family': "Open Sans",
        'text-decoration': false,
        'justify-content': false,
        'width': '',
        'height': ''
      }
    })
  )],
  [types.Grid, () => ({ mobile: '', tablet: '', desktop: '', widescreen: '' })],
  [String, 'This is pretty neat'],
  [types.GalleryItem, 'https://gn792.cdn.gamenet.ru/TY0Xv2riHu/6qfh3/o_1Pvytf.png']
])

export default class Seeder {
  // Seeds values using a schema.
  static seed (schema) {
    if (isObject(schema)) {
      return Object.keys(schema).reduce((values, key) => {
        values[key] = Seeder.seed(schema[key])
        return values
      }, {})
    } else if (Array.isArray(schema)) {
      return schema.map(s => {
        return Seeder.seed(s)
      })
    }

    let value = data.get(schema)

    if (value === undefined) {
      value = schema
    }
    return typeof value === 'function' ? value() : value
  }
};
