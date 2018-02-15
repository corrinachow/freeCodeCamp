function sumAll(arr) {
  var total = 0;
  if (arr[0] > arr[1]) {
    for (i = arr[1]; i <= arr[0]; i++) {
      total += i;
    }
  } else {
    for (i = arr[0]; i <= arr[1]; i++) {
      total += i;
    }
  }
  return total;
}

console.log(sumAll([1, 4]));