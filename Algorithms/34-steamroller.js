function steamrollArray(arr) {
  return arr.join(',').replace(',,',',').split(',').map(entry => {
    console.log(entry)
    if (entry == '[object Object]') return {};
    else if (isNaN(entry)) return entry;
    else return parseInt(entry);
    });
}

