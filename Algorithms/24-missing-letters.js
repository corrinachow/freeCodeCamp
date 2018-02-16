function fearNotLetter(str) {
  for (i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) != (str.charCodeAt(i+1) -1) && str.charCodeAt(i+1)) {
      return String.fromCharCode(str.charCodeAt(i)+1)
    }
  }
}

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(fearNotLetter("bcd"));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

