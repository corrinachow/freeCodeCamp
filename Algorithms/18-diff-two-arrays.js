function diffArray(arr1, arr2) {
  newArr = [];
  arr1.forEach(val => {
    if (arr2.indexOf(val) == -1) {
      newArr.push(val);
    }
  });
  arr2.forEach(val => {
    if (arr1.indexOf(val) == -1) {
      newArr.push(val);
    }
  });
return newArr;
}
