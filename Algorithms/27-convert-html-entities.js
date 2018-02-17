function convertHTML(str) {
  var htmlEntities = {
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '\"':'&quot;',
    '\'':'&apos;'
  };
  return str.split('').map(function(letter) {
    return htmlEntities[letter] || letter;
  }).join('');
}