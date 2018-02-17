function uniteUnique(...arr) {
  var newArr = []
  arr.forEach(set => {
    set.map(number => {
      if (!newArr.includes(number)) {
        newArr.push(number);
      }
      });
    });
  return newArr;
}
