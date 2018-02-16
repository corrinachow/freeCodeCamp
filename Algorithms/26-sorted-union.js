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

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");