const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        // this._head = null;
        // this._tail = null;
    }

    append(data) {
        const new_node = new Node(data);

        if (this.length === 0) {
            this._head = new_node;
            this._tail = new_node;
        }
        else {
            new_node.prev = this._tail;
            this._tail.next = new_node;
            this._tail = new_node;
        }
        this.length++;
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        let current_node = this._head;

        for(let i = 0; i < index; i++) {
            current_node = current_node.next;
        }

        return current_node.data;
    }

    insertAt(index, data) {
        let new_node = new Node(data);
        let current_node = this._head;
        if (index > this.length) {
            return -1;
        }

        if (this.length === 0) {
            this.append(data);
        } else {
            for (let i = 0; i < index; i++) {
                current_node = current_node.next;
            }

            current_node.prev.next = new_node;
            new_node.prev = current_node.prev;
            new_node.next = current_node;
            current_node.prev = new_node;

            this.length++;
        }
        return this;
    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        this._head.data = null;
        this._tail.data = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        let current_node = this._head;

        for (let i = 0; i < index; i++) {
            current_node = current_node.next;
        }

        if (current_node.prev !== null) {
            current_node.prev.next = current_node.next;
        }

        if (current_node.next !== null) {
            current_node.next.prev = current_node.prev;
        }
        this.length--;
        return this;
    }

    reverse() {
        let current_node = this._head;

        for (let i = 0; i < this.length; i++) {
            [current_node.next, current_node.prev] = [current_node.prev, current_node.next];
            current_node = current_node.prev;
        }
        [this._tail, this._head] = [this._head, this._tail];
        return this;
    }

    indexOf(data) {
        let current_node = this._head;

        for(let i = 0; i < this.length; i++) {
            if(current_node.data === data) {
                return i;
            }
            current_node = current_node.next;
        }
        return -1;
    }
}

module.exports = LinkedList;
