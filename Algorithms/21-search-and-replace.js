
function myReplace(str, before, after) {
  for (i = 0; i < before.length; i++) {//Checks for uppercase
  if (before.search(/[A-Z]/) != -1) after = after.charAt(before.search(/[A-Z]/)).toUpperCase() + after.substr(1);
}
  return str.replace(new RegExp(before), after)
}
