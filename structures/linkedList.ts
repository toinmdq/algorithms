
class MyNode {

	value: number;
	next: MyNode | null;

	constructor(value: number) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {

	head: MyNode | null;
	size: number;

	constructor() {
		this.head = null;
		this.size = 0;
	}

	isEmpty() {
		return this.size === 0;
	}

	getSize() {
		return this.size;
	}

	prepend(value: number) {
		const node = new MyNode(value);
		if (!this.isEmpty()) {
			node.next = this.head;
		}
		this.head = node;
		this.size++;
	}

	append(value: number) {
		const node = new MyNode(value);
		if (this.isEmpty()) {
			this.head = node;
		} else {
			let prev = this.head;
			while (prev?.next) {
				prev = prev.next;
			}
			prev!.next = node;
		}
		this.size++;
	}

	insert(value: number, index: number) {
		if (index < 0 || index > this.size) {
			console.log('Out of index');
			return;
		}
		if (index === 0) {
			this.prepend(value);
		} else {
			const node = new MyNode(value);
			let prev = this.head;
			for (let i = 0; i < index - 1; i++) {
				prev = prev!.next;
			}
			node.next = prev!.next;
			prev!.next = node;
			this.size++;
		}
	}

	print() {
		if (this.isEmpty()) {
			console.log('List is empty');
		} else {
			let curr = this.head;
			let listValues: number[] = [];
			while (curr) {
				listValues.push(curr.value);
				curr = curr.next;
			}
			console.log(listValues);
		}
	}

}

const list = new LinkedList()

list.prepend(10);
list.prepend(20);
list.prepend(30);
list.insert(8, 3);
list.append(40);
list.append(50);
list.insert(90, 3);
console.log('List size', list.getSize());
list.print();
