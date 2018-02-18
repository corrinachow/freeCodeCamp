function dropElements(arr, func) {
  return arr.map(func).indexOf(true) != -1 ? arr.slice(arr.map(func).indexOf(true)) : []
}
