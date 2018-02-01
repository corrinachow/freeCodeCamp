function rot13(str) { // LBH QVQ VG!
  return str.replace(/[A-Z]/g, letter => String.fromCharCode((letter.charCodeAt(0) % 26) + 65));
}
