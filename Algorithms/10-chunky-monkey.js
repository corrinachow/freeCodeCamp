function chunkArrayInGroups(arr, size) {
  var newArray = [];
  for (i = 0; i < arr.length; i += size) {
    newArray.push(arr.slice(i, i + size));
  }
  return newArray;
}
