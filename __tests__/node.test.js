'use strict';

const { expect } = require('@jest/globals');
const Node = require('../node.js');

test('constructor() - testing initialization should be correct', () => {
    // arrange
    let value = 'some value';
    // act
    let node = new Node(value);
    // assert
    expect(node.value).toEqual(value);
    expect(node.next).toBeNull();
});