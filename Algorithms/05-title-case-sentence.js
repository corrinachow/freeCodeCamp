
function titleCase(str) {
  var sentenceArray = str.toLowerCase().split(" ");
  var newStr = "";
  for (i = 0; i < sentenceArray.length; i++) {
    newStr += sentenceArray[i].toString().charAt(0).toUpperCase() +sentenceArray[i].slice(1) + " ";
  }
  return newStr.slice(0, -1) ;
}
