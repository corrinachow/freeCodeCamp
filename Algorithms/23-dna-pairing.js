function pairElement(str) {
  var dnaStr = []
  str.split('').forEach(base => {
    var basePair = [];
    switch (base) {
      case 'G': basePair.push(base, 'C'); dnaStr.push(basePair);
      break;
      case 'C': basePair.push(base, 'G'); dnaStr.push(basePair);
      break;
      case 'A': basePair.push(base, 'T'); dnaStr.push(basePair);
      break;
      case 'T': basePair.push(base, 'A'); dnaStr.push(basePair);
      break;
    }
  });
  return dnaStr;
}
