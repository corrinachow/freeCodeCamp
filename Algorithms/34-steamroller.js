function steamrollArray(arr) {
  return arr.join(',').replace(',,',',').split(',').map(entry => {
    console.log(entry)
    if (entry == '[object Object]') return {};
    else if (isNaN(entry)) return entry;
    else return parseInt(entry);
    });
}

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(steamrollArray([[["a"]], [["b"]]]));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(steamrollArray([1, [], [3, [[4]]]]))
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");