/**
 * @param {string} component
 * @param {string} prop
 * @return {Function}
 */
export default function booleanValidator (component, prop) {
  return function validator (value) {
    if (typeof value !== 'boolean') {
      console.warn(
        `[${component}] property ${prop} = ${value} type not Boolean`
      )
    }
    return true
  }
}
