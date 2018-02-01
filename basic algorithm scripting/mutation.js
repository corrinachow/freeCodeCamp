function mutation(arr) {
  var str2 = arr[1].toLowerCase();
  var str1 = arr[0].toLowerCase();
  for (i = 0; i < str2.length; i++) {
    if (str1.indexOf(str2[i]) === -1)
      return false;
    }
  return true;
}
