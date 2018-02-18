function addTogether() {
  var a = arguments[0];
  var b = arguments[1];
  return Number.isInteger(a) ? Number.isInteger(b) ? a + b : !b ? function addition(b) {return Number.isInteger(b) ? a + b : undefined } : undefined : undefined
}