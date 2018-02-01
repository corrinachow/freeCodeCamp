function palindrome(str) {
  var newStr = str.replace(/[_\W]/g, "").toLowerCase();
  if (str.replace(/[_\W]/g, "").split("").reverse().join("").toLowerCase() == newStr) {
    return true;
  } else
  return false;
}