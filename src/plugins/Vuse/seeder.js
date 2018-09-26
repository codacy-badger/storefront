import * as types from './types'
import { isObject } from './util'

const ASSETS_DIR = window.location.origin
const data = new Map([
  [types.Title, 'Awesome title'],
  [types.Text, 'We\'re creating the best place to go when starting a new business or company.With Baianat you can instantly search domain names, social media handles, and see your logo in beautiful logotypes.'],
  [types.Avatar, 'https://gn792.cdn.gamenet.ru/TY0Xv2riHu/6qfh3/o_1Pvytf.png'],
  [types.Logo, 'https://gn792.cdn.gamenet.ru/TY0Xv2riHu/6qfh3/o_1Pvytf.png'],
  [types.Link, () => ({
    text: 'Click Me!',
    classes: [],
    href: '' })
  ],
  [types.Image, 'https://gn792.cdn.gamenet.ru/TY0Xv2riHu/6qfh3/o_1Pvytf.png'],
  [types.ClassList, () => []],
  [types.StyleObject, () => (
    {
      styles: {
        'background-image': 'https://gn510.cdn.gamenet.ru/TY0Xv2riHu/6nOTD/o_yT2c2.png',
        'background-position': false,
        'background-repeat': false,
        'background-size': false,
        'background-color': false,
        'background': false
      },
      classes: []
    })],
  [types.Button, () => (
    {
      text: 'Click Me!',
      classes: [],
      href: '',
      styles: {
        'background-image': 'https://gn510.cdn.gamenet.ru/TY0Xv2riHu/6nOTD/o_yT2c2.png',
        'background-position': false,
        'background-repeat': false,
        'background-size': false,
        'background-color': false,
        'background': false,
        'color': '#000',
        'font-size': '2rem'
      }
    }
  )],
  [types.Quote, 'When you were made a leader, you weren\'t given a crown; you were given the responsibility to bring out the best in others.'],
  [types.Grid, () => ({ mobile: '', tablet: '', desktop: '', widescreen: '' })],
  [Number, 100],
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
