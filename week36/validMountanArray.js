/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  if (arr.length < 3) return false;

  let i = 0;

  while (arr[i] < arr[i + 1] && i < arr.length) {
    i++;
  }

  if (i == arr.length - 1 || i == 0) return false;

  while (arr[i] > arr[i + 1] && i < arr.length) {
    i++;
  }

  return i == arr.length - 1;
};
