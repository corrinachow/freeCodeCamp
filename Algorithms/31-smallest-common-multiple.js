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
  divisors.forEach(divisor => {
    if (temp % divisor == 0) count ++;
  });
  if (count == divisors.length) smallestMultiple += temp;
}
  return smallestMultiple;
}

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(smallestCommons([23, 18]));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

/*
while (smallestMultiple == 0) {
    arr.forEach((n, index) => {
        temp[index] = arr[index] + arr[index];
        console.log('this is '+ temp)
        count = 1;
        divisors.forEach(divisor => {

          console.log(divisor);
          console.log(n);
          if (n % divisor == 0) {
            count++;

            console.log('current count is :' +count)
            console.log(n + ' is divisible by ' + divisor);
          }

          console.log('count is '+count)
        if (count == divisors.length)
          smallestMultiple = n
        })



      });
      */