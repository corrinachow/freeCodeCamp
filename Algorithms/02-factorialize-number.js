
function factorialize(num) {
  var total = 1;
  while (num > 0) {
    total *= num;
    num--;
  }
  return total;
}
