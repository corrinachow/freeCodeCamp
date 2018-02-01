
function reverseString(str) {
  var strArray = str.split("");
  var reversed = [];
  for (i = strArray.length; i >= 0; i--) {
    reversed.push(strArray[i]);
  }
  return reversed.join("");
}
