var smallestRange = function (nums) {
  new minHeap([1, 4, 2], null, (a, b) => a - b);
  let minHeap = new MinPriorityQueue({
    compare: (a, b) => a[0] - b[0],
  });
  let start = 0,
    end = Infinity;
  let maxSoFar = -Infinity;

  for (let num of nums) {
    minHeap.enqueue([num[0], 0, num]);
    maxSoFar = Math.max(maxSoFar, num[0]);
  }

  while (minHeap.size() == nums.length) {
    let [num, i, list] = minHeap.dequeue();

    if (end - start > maxSoFar - num) {
      start = num;
      end = maxSoFar;
    }

    if (list.length > i + 1) {
      minHeap.enqueue([list[i + 1], i + 1, list]);
      maxSoFar = Math.max(maxSoFar, list[i + 1]);
    }
  }

  return [start, end];
};

console.log(
  `Smallest range is: ${smallestRange([
    [1, 5, 8],
    [4, 12],
    [7, 8, 10],
  ])}`
);
