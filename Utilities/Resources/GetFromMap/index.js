const getFromMap = (map) => {
  return new Proxy(map, {
    get (obj, prop) {
      return obj.get(prop)
    }
  })
}

module.exports = {
  getFromMap
}