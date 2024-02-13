
//   Definition for singly-linked list.
class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = (val === undefined ? 0 : val)
		this.next = (next === undefined ? null : next)
	}
}

function middleNode(head: ListNode | null): ListNode | null {

	let nextOnce = head;
	let nextTwice = head;

	while (nextOnce && nextTwice && nextTwice.next) {
		nextOnce = nextOnce.next;
		nextTwice = nextTwice.next.next;
	}

	return nextOnce;
};

console.log(middleNode({ val: 1, next: { val: 2, next: { val: 4, next: null } } }));