import * as types from './types'
import { isObject } from './util'
import * as _ from 'lodash-es'

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
  canCopy: false,
  background: false,
  shape: false, // border-radius prop
  pseudo: false // can have a pseudo-class
}

/**
 * Deprecated types:
 * Logo, Avatar, Quote, Number, ClassList, Title
 * @type {Map}
 */
const data = new Map([
  [types.Description, () => (_.merge({}, DEFAULT_OPTIONS, {
    text: 'Your Game takes players on a grand adventure filled with detractors, monsters, gold hunters and grave danger. Dramatic events unfolded which overturned your life and now you have to fight for survival in a new hostile world. Discover, explore, and conquer as you survive through different dimensions of reality!',
    aligned: true,
    typography: true,
    styles: {
      'font-family': 'Open Sans',
      'font-size': 1.4,
      'font-weight': false,
      'font-style': false,
      'text-decoration': false,
      'text-align': false,
      'color': false,
      'background-image': false,
      'background-position': false,
      'background-repeat': false,
      'background-size': false,
      'background-color': false,
      'background': false,
      'justify-content': false
    }
  }))],
  [types.Text, () => (_.merge({}, DEFAULT_OPTIONS, {
    text: 'Enter your text',
    aligned: true,
    typography: true,
    styles: {
      'font-family': 'Open Sans',
      'font-size': 1.4,
      'font-weight': false,
      'font-style': false,
      'text-decoration': false,
      'text-align': false,
      'color': false,
      'background-image': false,
      'background-position': false,
      'background-repeat': false,
      'background-size': false,
      'background-color': false,
      'background': false,
      'justify-content': false
    }
  }))],
  // [types.Image, 'https://gn792.cdn.gamenet.ru/TY0Xv2riHu/6qfh3/o_1Pvytf.png'],
  [types.Image, () => (_.merge({}, DEFAULT_OPTIONS, {
    resizable: true,
    alt: 'Default image',
    url: 'https://gn652.cdn.gamenet.ru/TY0Xv2riHu/772iV/o_cDot3.png',
    background: true,
    styles: {
      'background-image': 'url(https://gn652.cdn.gamenet.ru/TY0Xv2riHu/772iV/o_cDot3.png)',
      'background-position': 'center center',
      'background-repeat': 'no-repeat',
      'background-size': 'contain',
      'background-color': '#fff',
      'width': '',
      'height': ''
    }
  }))],
  [types.Logo, () => (_.merge({}, DEFAULT_OPTIONS, {
    resizable: true,
    alt: 'Default logo',
    url: 'https://gn451.cdn.gamenet.ru/TY0Xv2riHu/772cm/o_s1Xtu.png',
    background: true,
    styles: {
      'background-image': false,
      'background-position': false,
      'background-repeat': false,
      'background-size': false,
      'background-color': false,
      'background': false,
      'height': ''
    }
  }))],
  [types.Link, () => (_.merge({}, DEFAULT_OPTIONS, {
    canCopy: true,
    hasLink: true,
    removable: true,
    typography: true,
    text: 'Click Me!',
    href: '',
    target: '_blank',
    styles: {
      'font-family': 'Open Sans',
      'font-size': 1.4,
      'font-weight': false,
      'font-style': false,
      'text-decoration': false,
      'text-align': false,
      'color': false,
      'background-image': false,
      'background-position': false,
      'background-repeat': false,
      'background-size': false,
      'background-color': false,
      'background': false,
      'justify-content': false
    }
  })
  )],
  [types.StyleObject, () => (_.merge({}, DEFAULT_OPTIONS,
    {
      box: true,
      resizable: false,
      removable: true,
      styles: {
        'background-image': 'https://gn510.cdn.gamenet.ru/TY0Xv2riHu/6nOTD/o_yT2c2.png',
        'background-position': false,
        'background-repeat': false,
        'background-size': false,
        'background-color': false,
        'background': false,
        'height': ''
      }
    })
  )],
  [types.Button, () => (_.merge({}, DEFAULT_OPTIONS,
    {
      box: true,
      canCopy: true,
      resizable: true,
      hasLink: true,
      aligned: true,
      typography: true,
      background: true,
      shape: true,
      pseudo: {},
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
        'font-size': 3,
        'border-radius': 0,
        'font-weight': false,
        'font-style': false,
        'font-family': 'Open Sans',
        'text-decoration': false,
        'justify-content': false,
        'width': '',
        'height': ''
      }
    })
  )],
  [types.Label, () => (_.merge({}, DEFAULT_OPTIONS,
    {
      box: true,
      resizable: true,
      typography: true,
      background: true,
      aligned: true,
      shape: true,
      text: 'Label',
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
        'font-size': 1,
        'border-radius': 0,
        'font-weight': false,
        'font-style': false,
        'font-family': 'Open Sans',
        'text-decoration': false,
        'justify-content': false,
        'width': '',
        'height': ''
      }
    })
  )],
  [types.Cost, () => (_.merge({}, DEFAULT_OPTIONS,
    {
      box: true,
      resizable: true,
      typography: true,
      background: true,
      aligned: true,
      text: '$90',
      classes: [],
      href: '',
      styles: {
        'background-image': false,
        'background-position': false,
        'background-repeat': false,
        'background-size': false,
        'background-color': false,
        'background': false,
        'color': '#e4a11e',
        'border-color': false,
        'font-size': 2,
        'border-radius': 0,
        'font-weight': false,
        'font-style': false,
        'font-family': 'Open Sans',
        'text-decoration': false,
        'justify-content': false,
        'width': '',
        'height': ''
      }
    })
  )],
  [types.Icon, () => (_.merge({}, DEFAULT_OPTIONS,
    {
      box: false,
      resizable: true,
      hasLink: true,
      background: true,
      colorFill: true,
      shape: true,
      target: '_blank',
      text: '',
      classes: [],
      href: '',
      styles: {
        'background-image': false,
        'background-position': false,
        'background-repeat': false,
        'background-size': false,
        'background-color': '#333',
        'fill': false,
        'border-radius': '100%',
        'width': '',
        'height': ''
      }
    })
  )],
  [types.Grid, () => ({ mobile: '', tablet: '', desktop: '', widescreen: '' })],
  [String, 'This is pretty neat'],
  [types.GalleryItem, () => (_.merge({}, DEFAULT_OPTIONS, {
    removable: true,
    resizable: true,
    alt: 'Default image',
    url: 'https://gn548.cdn.gamenet.ru/TY0Xv2riHu/772oj/o_OnTml.png',
    background: true,
    styles: {
      'background-image': 'https://gn652.cdn.gamenet.ru/TY0Xv2riHu/772iV/o_cDot3.png',
      'background-position': false,
      'background-repeat': false,
      'background-size': false,
      'background-color': false,
      'background': '#fff',
      'width': '',
      'height': ''
    }
  }))],
  [types.Product, () => (_.merge({}, DEFAULT_OPTIONS, {
    removable: true,
    resizable: true,
    background: true,
    styles: {
      'background-image': 'https://gn510.cdn.gamenet.ru/TY0Xv2riHu/6nOTD/o_yT2c2.png',
      'background-position': false,
      'background-repeat': false,
      'background-size': false,
      'background-color': false,
      'background': '#333',
      'width': '',
      'height': ''
    }
  }))],
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
