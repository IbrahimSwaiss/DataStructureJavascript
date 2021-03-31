'use strict';
const { test, expect } = require('@jest/globals');
const LinkedList = require('../ll.js');

test('LinkedList - initiate linked list', () => {
    let ll = new LinkedList();
    expect(ll.head).toBeNull();
    expect(ll.tail).toBeNull();
});

test('LinkedList - test pushing to empty linked list', () => {
    // arrange
    let ll = new LinkedList();
    let value = 'first';
    // act
    ll.push(value);
    // assert
    expect(ll.head.value).toEqual(value);
    expect(ll.head.next).toBeNull();
    expect(ll.tail.value).toEqual(ll.head.value);
    expect(ll.head.next).toBeNull();
});

test('LinkedList - push to list with values', () => {
    // arrange
    let ll = new LinkedList();
    let value = 'first';
    let secondValue = 'second';
    // act
    ll.push(value);
    ll.push(secondValue);
    // assert
    expect(ll.head.value).toEqual(value);
    expect(ll.head.next.value).toEqual(secondValue);
    expect(ll.head.next.next).toBeNull();
    expect(ll.tail.value).toEqual(secondValue);
    expect(ll.tail.next).toBeNull();
});

test('LL - pop', () => {
    // arrange
    let ll = new LinkedList();
    ll.push('1');
    ll.push('2');
    ll.push('3');
    ll.push('4');
    let secondValue = 'new tail';
    ll.push(secondValue);
    let lastValue = 'last';
    ll.push(lastValue);
    // act
    ll.pop();
    // assert
    expect(ll.tail.value).toEqual(secondValue);
});

test('LL - shift', () => {
    // arrange
    let ll = new LinkedList();
    ll.push('1');
    ll.push('2');
    ll.push('3');
    ll.push('4');
    // act
    ll.shift();
    // assert
    expect(ll.head.value).toEqual('2');
    expect(ll.head.next.value).toEqual('3');
});

test('LL - unshift', () => {
    // arrange
    let ll = new LinkedList();
    ll.push('1');
    ll.push('2');
    ll.push('3');
    ll.push('4');
    // act
    ll.unshift('0');
    // assert
    expect(ll.head.value).toEqual('0');
    expect(ll.head.next.value).toEqual('1');
});

test('LL - get', () => {
    // arrange
    let ll = new LinkedList();
    ll.push('1');
    ll.push('2');
    ll.push('3');
    ll.push('4');
    // act
    var node = ll.get(2);
    // assert
    expect(node.value).toEqual('3');
    expect(node.next.value).toEqual('4');
});

test('LL - set', () => {
    // arrange
    let ll = new LinkedList();
    ll.push('1');
    ll.push('2');
    ll.push('3');
    ll.push('4');
    // act
    ll.set(2, '999');
    var node = ll.get(2);
    // assert
    expect(node.value).toEqual('999');
});


test('LL - insert', () => {
    // arrange
    let ll = new LinkedList();
    ll.push('1');//0
    ll.push('2');//1
    ll.push('3');//2
    ll.push('4');//3
    // act
    ll.insert(2, 'gg');
    // assert
    var node = ll.get(2);
    expect(node.value).toEqual('gg');
    expect(node.next.value).toEqual('3');
});

test('LL - remove', () => {
    // arrange
    let ll = new LinkedList();
    ll.push('1');//0
    ll.push('2');//1
    ll.push('3');//2
    ll.push('4');//3
    // act
    ll.remove(2);
    // assert
    var node = ll.get(2);
    expect(node.value).toEqual('4');
});

test('LL - reverse', () => {
    // arrange
    let ll = new LinkedList();
    ll.push('1');//0
    ll.push('2');//1
    ll.push('3');//2
    ll.push('4');//3
    // act
    ll.reverse();
    // assert
    var first = ll.head;
    expect(first.value).toEqual('4');
    expect(first.next.value).toEqual('3');
    expect(first.next.next.value).toEqual('2');
    expect(first.next.next.next.value).toEqual('1');
});

