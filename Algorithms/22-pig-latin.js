
function translatePigLatin(str) {
  if (/[aioue]/.test(str.charAt(0))) {
    return str + 'way'
  } else {
    return str.substr(str.search(/[aioue]/)) + str.substr(0, str.search(/[aioue]/)) + 'ay'
  }
}