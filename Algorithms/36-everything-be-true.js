function truthCheck(collection, pre) {
  return collection.every(n => n[pre])
}