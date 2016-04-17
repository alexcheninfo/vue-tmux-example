const _ = {}

// Common

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

_.keys = (obj) => {
  return Object.keys(obj)
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
  if (found) found.splice(found.indexOf(obj), 0, newObj)
  return arr
}

_.insertDownDeep = (arr, obj, newObj) => {
  const found = _.findDeep(arr, obj)
  if (found) found.splice(found.indexOf(obj) + 1, 0, newObj)
  return arr
}

_.insertLeftDeep = (arr, newArr, obj, newObj) => {
  const found = _.findDeep(arr, obj)
  if (found) {
    found.splice(found.indexOf(obj), 1) // to avoid duplicating obj
    newArr.children.push(newObj)
    newArr.children.push(obj)
    found.splice(found.indexOf(obj), 0, newArr)
  }
  return arr
}

_.insertRightDeep = (arr, newArr, obj, newObj) => {
  const found = _.findDeep(arr, obj)
  if (found) {
    found.splice(found.indexOf(obj), 1) // to avoid duplicating obj
    newArr.children.push(obj)
    newArr.children.push(newObj)
    found.splice(found.indexOf(obj), 0, newArr)
  }
  return arr
}

export default _
