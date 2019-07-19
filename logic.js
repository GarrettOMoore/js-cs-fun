function getIthItemInLinkedList(head, i) {
	if (i<0) {
		throw new Error("i can't be negative: ", i)
	}

	var currentPosition = 0;
	var currentNode = head;

	while (currentNode) {
		if (currentPosition === i) {
			// found it
			return currentNode;
		}

		currentNode = currentNode.next;
		currentPosition++;
	}

	throw new Error("List has fever than i + 1(", (i + 1), ") nodes");
}