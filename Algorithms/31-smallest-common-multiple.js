function smallestCommons(arr) {
  var temp = Math.max(...arr);
  var divisors = []
  var smallestMultiple = 0;
  for (i = Math.min(...arr); i <= Math.max(...arr); i++) {
    divisors.push(i)
  }
  while (!smallestMultiple) {
    temp += Math.max(...arr);
    count = 0;
    divisors.forEach(divisor => {//Iterates through all divisors
      if (temp % divisor == 0) count++;
    });
    if (count == divisors.length) smallestMultiple += temp;
  }
  return smallestMultiple;
}
