function convertToRoman(num){
  var roman = '';
  if (num >= 1000) {
    roman += 'M'.repeat(Math.floor(num/1000));
    num = num % 1000;
  }
  if (num >= 900){ roman += 'CM'; num -= 900; }
  if (num >= 500){ roman += 'D'; num -= 500; }
  if (num >= 400){ roman += 'CD'; num -= 400; }
  if (num >= 100) {
    roman += 'C'.repeat(Math.floor(num/100));
    num = num % 100;
  }
  if (num >= 90){ roman += 'XC'; num -= 90; }
  if (num >= 50){ roman += 'L'; num -= 50; }
  if (num >= 40){ roman += 'XL'; num -= 40; }
  if (num >= 10) {
    roman += 'X'.repeat(Math.floor(num/10));
    num = num % 10;
  }
  if (num >= 9){ roman += 'IX'; num -= 9; }
  if (num >= 5){ roman += 'V'; num -= 5; }
  if (num >= 4){ roman += 'IV'; num -= 4; }
  if (num >= 1) {
    roman += 'I'.repeat(num/1);
    num = num % 1;
  }
  return roman;
}

 console.log(convertToRoman(891)); //DCCCXCI
 console.log(convertToRoman(3999)); //MMMCMXCIX
