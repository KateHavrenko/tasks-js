function cutElemFromArr(arr, index){
  var arr = [0, 1, 2, 3, 4, 5];
  var nextElem = index + 1;
  var arrLeft = arr.slice(0, index);
  var arrRight = arr.slice(nextElem, arr.length);
  var cutedArray = arrLeft.concat(arrRight);
  return cutedArray;
}