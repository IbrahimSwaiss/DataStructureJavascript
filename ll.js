'use strict';
const Node = require('./node.js');

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    push(value) {
        let newNode = new Node(value);
        //in-case of empty linked list
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    pop() {
        if (!this.head) return undefined;

        let current = this.head;
        let newTail = current;
        while (current) {
            if (current.next) {
                newTail = current;
            } else {
                newTail.next = null;
            }
            current = current.next;
        }
        this.tail = newTail;
    }

    shift() {
        if (!this.head) return undefined;
        this.head = this.head.next;
    }

    unshift(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode
        }
    }

    get(index) {
        let counter = 0;
        let current = this.head;
        while (true) {
            if (counter === index) {
                break;
            }
            counter++;
            current = current.next;
        }

        return current;
    }

    set(index, value) {
        let node = this.get(index);
        node.value = value;
    }

    insert(index, value) {
        let newNode = new Node(value);

        let prev = this.get(index - 1);
        newNode.next = prev.next;
        prev.next = newNode;
    }

    remove(index) {
        let prev = this.get(index - 1);
        let toRemove = prev.next;
        prev.next = toRemove.next;
    }

    reverse() {
        let current = this.head;
        let prev = null;
        let next = null;

        while(current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;

        // 1 -> 2
        // 2 -> 3
        // 3 -> 4
        // 4 -> null
    }

    // ////////////////////////////////////////////
    appendWithoutUsingTail(value) {
        let node = new Node(value);
        //in-case of empty linked list
        if (!this.head) {
            this.head = node;
            return;
        }

        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = node;
        return this;
    }
}

module.exports = LinkedList;