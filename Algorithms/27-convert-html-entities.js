function convertHTML(str) {
  var htmlEntities = {
    '&' : '&amp',
    '<' : '&lt',
    '>' : '&gt',
    '\"' : '&quot',
    '\'' : '&apos'
  };
  return str.split('').map(l => {
    return htmlEntities[l] || l;
  }).join('');
}


convertHTML("Dolce & Gabbana") //should //return Dolce &​amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") //should return Hamburgers &​lt; Pizza &​lt; Tacos.
convertHTML("Sixty > twelve") //should return Sixty &​gt; twelve.
convertHTML('Stuff in "quotation marks"') //should return Stuff in &​quot;quotation marks&​quot;.
convertHTML("Shindler's List") //should return Shindler&​apos;s List.
convertHTML("<>") //should return &​lt;&​gt;.