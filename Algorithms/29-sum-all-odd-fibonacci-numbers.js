function sumFibs(num) {
var total = 1;
var val = [1, 1];
var temp = [];
while (val[1] <= num){
  temp = val[1];
  if (temp % 2 != 0) total += temp;
  val[1] = val[0] + val[1];
  val[0] = temp;
}



return total;

}

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(sumFibs(4000000));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
