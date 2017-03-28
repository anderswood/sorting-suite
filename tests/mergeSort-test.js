// const assert = require('chai').assert;
import {assert} from 'chai'

// const mergeSort = require('../scripts/mergeSort.js')
import mergeSort from '../scripts/mergeSort.js'
import randNumGen from '../scripts/helperFuncs.js'


describe('Merge sort tests', () => {

  it('should be a function', () => {
    assert.isFunction(mergeSort);
  });

  it.skip('sort an array of letters', () => {
    const letterArray = ["d", "b", "a", "c"]

    assert.deepEqual(mergeSort(letterArray), ["a", "b", "c", "d"]);
  });

  it.skip('sort an array of letters with duplicate letters', () => {
    const letterArray = ["d", "b", "a", "c", "a", "d"]

    assert.deepEqual(mergeSort(letterArray), ["a", "a", "b", "c", "d", "d"]);
  });

  it.skip('sort an array of numbers', () => {
    const numberArray = [5, 2, 1, 0, 3]

    assert.deepEqual(mergeSort(numberArray), [0, 1, 2, 3, 5]);
  });

  it.skip('sort an array of numbers with negative numbers', () => {
    const numberArray = [-5, 2, -1, 0, 3, -14]

    assert.deepEqual(mergeSort(numberArray), [-14, -5, -1, 0, 2, 3]);
  });

  it.skip('sort an array of numbers with duplicate numbers', () => {
    const numberArray = [-5, 2, 2, 0, -14, -14]

    assert.deepEqual(mergeSort(numberArray), [-14, -14, -5, 0, 2, 2]);
  });

  it.skip('sort a big array of random numbers', () => {
    const min = 0;
    const max = 1e6;
    const n = 5;
    const randArray = randNumGen(min, max, n);

    assert.deepEqual(mergeSort(randArray), randArray.sort());
  });


})
