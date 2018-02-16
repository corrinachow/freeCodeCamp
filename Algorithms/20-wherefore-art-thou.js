function whatIsInAName(collection, source) {
  var sourceKeys = Object.keys(source);//returns keys of source as an array
  return collection.filter(function(objects) {//returns all the elements in collections that return true
    return sourceKeys.every(function (key) {//tests every element from sourceKeys (key)
      return objects.hasOwnProperty(key) && objects[key] === source[key]; //tests if collection objects has the same key and value as the source key
    });
  });
}