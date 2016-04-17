const _ = {}

// Checkers

_.isString = function (val) {
  return typeof val === 'string'
}

_.isArray = (val) => {
  return Array.isArray(val)
}

_.isObject = function (obj) {
  return obj !== null && typeof obj === 'object'
}

_.isFunction = function (val) {
  return typeof val === 'function'
}

// Common

_.keys = (obj) => {
  return Object.keys(obj)
}

_.insertBefore = (arr, obj, newObj) => {
  return arr.splice(arr.indexOf(obj), 0, newObj)
}

_.insertAfter = (arr, obj, newObj) => {
  return arr.splice(arr.indexOf(obj) + 1, 0, newObj)
}

// For recursive arrays

_.findDeep = (arr, obj) => {
  return arr.map(item => {
    const key = _.keys(obj)[0]
    if (item[key] === obj[key]) return arr
    if (item.children) return _.findDeep(item.children, obj)
    return undefined
  }).reduce((prev, curr) => {
    return prev || curr
  })
}

_.insertUpDeep = (arr, obj, newObj) => {
  const found = _.findDeep(arr, obj)
  if (found) _.insertBefore(found, obj, newObj)
  return arr
}

_.insertDownDeep = (arr, obj, newObj) => {
  const found = _.findDeep(arr, obj)
  if (found) _.insertAfter(found, obj, newObj)
  return arr
}

_.insertLeftDeep = (arr, obj, newObj, contObj) => {
  const found = _.findDeep(arr, obj)
  if (found) {
    contObj.children[1].children.push(obj)
    contObj.children[0].children.push(newObj)
    _.insertBefore(found, obj, contObj)
    found.splice(found.indexOf(obj), 1) // to avoid duplicating obj
  }
  return arr
}

_.insertRightDeep = (arr, obj, newObj, contObj) => {
  const found = _.findDeep(arr, obj)
  if (found) {
    contObj.children[0].children.push(obj)
    contObj.children[1].children.push(newObj)
    _.insertBefore(found, obj, contObj)
    found.splice(found.indexOf(obj), 1) // to avoid duplicating obj
  }
  return arr
}

export default _
