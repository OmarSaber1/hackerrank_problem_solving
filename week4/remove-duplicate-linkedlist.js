var deleteDuplicates = function (head) {
  let current = head;

  while (current?.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
};
