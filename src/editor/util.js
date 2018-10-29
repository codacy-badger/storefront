import * as _ from 'lodash-es'
import * as types from './types'

export function isObject (obj) {
  return obj && typeof obj === 'object' && obj !== null && !Array.isArray(obj)
}

export function isParentTo (target, parent) {
  let currentNode = target
  while (currentNode !== null) {
    if (currentNode === parent) return true
    currentNode = currentNode.parentNode
  }
  return false
}

/**
 *
 * @param {String} target
 * @param {Object} schema
 */
export function getTypeFromSchema (target, schema) {
  const tempTarget = target.split('.')
  tempTarget.shift()
  const value = _.get(schema, tempTarget.join('.'))
  if (value === types.Grid) return 'grid'
  if (value === types.Text) return 'text'
  if (value === types.Description) return 'text'
  if (value === types.Title) return 'title'
  if (value === types.Button) return 'button'
  if (value === types.Link) return 'link'
  if (value === types.ClassList) return 'section'
  if (value === types.StyleObject) return 'section'
  if (value === types.Product) return 'product'
  if (value === types.Label) return 'text'
  if (value === String) return 'text'
  if (value === Number) return 'text'

  return null
}

export function getImageBlob (URL) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', URL)
    xhr.responseType = 'blob'

    xhr.onload = function () {
      const imageBlob = this.response
      const fileType = this.response.type.split('/')[1].split('+')[0]
      const randomNumber = new Date().getUTCMilliseconds()
      const filename = `image-${randomNumber}.${fileType}`
      resolve({ blob: imageBlob, name: filename })
    }
    xhr.send(null)
  })
}

export function getTypeFromTagName (tagName) {
  tagName = tagName.toUpperCase()
  switch (tagName) {
    case 'H1':
      return 'title'
    case 'H2':
      return 'title'
    case 'H3':
      return 'title'
    case 'H4':
      return 'title'
    case 'H5':
      return 'title'
    case 'H6':
      return 'title'
    case 'P':
      return 'text'
    case 'B':
      return 'text'
    case 'SPAN':
      return 'title'
    case 'BUTTON':
      return 'button'
    case 'A':
      return 'button'
    case 'SECTION':
      return 'section'
    case 'HEADER':
      return 'section'
    default:
      break
  }
}

export function cleanDOM (artboard) {
  const editables = Array.from(artboard.querySelectorAll('.is-editable'))
  const uploaders = Array.from(artboard.querySelectorAll('.uploader'))
  const stylers = Array.from(artboard.querySelectorAll('.styler'))

  editables.forEach((el) => {
    el.contentEditable = 'inherit'
    el.classList.remove('is-editable')
  })
  uploaders.forEach((el) => {
    const input = el.querySelector(':scope > form input')
    const image = el.querySelector(':scope > img')

    image.classList.add('add-full-width')
    el.classList.remove('uploader')
    input.remove()
  })
  stylers.forEach((styler) => {
    styler.remove()
  })
}

export function randomPoneId () {
  return `pone${Math.random().toString().substring(2, 7)}`
}

/**
 * Return template of scoped style for el
 * @param poneId
 * @param data {Object} Like:
 *  {
 *    'hover': {
 *      'background-color': '#f2f3f6',
 *      'color': '#000000'
 *    }
 *  }
 * @returns {string}
 */
export function getPseudoTemplate(poneId, data) {
  let content = ''
  _.forEach(data, (styles, pseudo) => {
    let acc = ''
    _.forEach(styles, (value, style) => {
      acc += `${style}: ${value};`
    })
    content += `[data-pone="${poneId}"]:${pseudo} {
      ${acc}
    }`
  })

  return `<style type="text/css" id="${poneId}">${content}</style>`
}
