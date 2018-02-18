
function binaryAgent(str) {
  var decode = ''
  str.split(' ').forEach(n => decode += String.fromCharCode(parseInt(n, 2)));
  return decode
}
