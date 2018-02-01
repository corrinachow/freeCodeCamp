function largestOfFour(arr) {
  var newArr =[];
  for (i = 0; i < arr.length; i++) {
    arr[i].sort(function(a, b) {
      return b - a;
    })
    newArr.push(arr[i][0]);
  }
  return newArr;
}
