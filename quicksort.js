function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var pivot = arr[arr.length - 1];
  var left = [];
  var right = [];
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quicksort(left), pivot, ...quicksort(right)];
}

var arr = [5, 3, 6, 2, 7, 1, 4];
var sortedArr = quicksort(arr);
console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 7]