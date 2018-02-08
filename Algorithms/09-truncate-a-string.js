
function truncateString(str, num) {
  console.log(str);
  if (num <= 3) {
    return str.slice(0, num) + "...";
  } if (str.length > 3 && str.length > num) {
    return str.slice(0, num - 3) + "...";
  } if (str.length <= num) {
    return str;
  }
}
