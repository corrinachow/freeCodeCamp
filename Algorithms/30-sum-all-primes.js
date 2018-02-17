function sumPrimes(num) {
  var numbers = [];
  var total = 0;
  for (i = 0; i <= num; i++) {
    numbers.push(i);
  };
  numbers.forEach(n => {
    var count = 0;
    for (j = 0; j <= n; j++) {
      if (n % numbers[j] == 0) {
        count ++ //Tallies the number of divisors
      }
      }
      if (count == 2) {//Adds number to total if it has exactly 2 divisors
        total += n;
    }
  })
  return total;
}
