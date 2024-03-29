class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const find_level_averages = function (root) {
  if (!root) return [];
  result = [];
  queue = [root];

  while (queue.length > 0) {
    const queueLength = queue.length;
    let currentLevelSum = 0;

    for (var i = 0; i < queueLength; i++) {
      const currentNode = queue.shift();

      currentLevelSum += currentNode.value;

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    result.push(currentLevelSum / queueLength);
  }
  return result;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(`Level averages are: ${find_level_averages(root)}`);
