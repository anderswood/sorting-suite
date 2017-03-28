// const assert = require('chai').assert;
import {assert} from 'chai'

// const bubbleSort = require('../scripts/bubbleSort.js')
import bubbleSort from '../scripts/bubbleSort.js'
import {randNumGen, compareNumbers} from '../scripts/helperFuncs.js'


describe('Bubble sort tests', () => {

  it('should be a function', () => {
    assert.isFunction(bubbleSort);
  });

  it('sort an array of letters', () => {
    const letterArray = ["d", "b", "a", "c"]

    assert.deepEqual(bubbleSort(letterArray), ["a", "b", "c", "d"]);
  });

  it('sort an array of letters with duplicate letters', () => {
    const letterArray = ["d", "b", "a", "c", "a", "d"]

    assert.deepEqual(bubbleSort(letterArray), ["a", "a", "b", "c", "d", "d"]);
  });

  it('sort an array of numbers', () => {
    const numberArray = [5, 2, 1, 0, 3]

    assert.deepEqual(bubbleSort(numberArray), [0, 1, 2, 3, 5]);
  });

  it('sort an array of numbers with negative numbers', () => {
    const numberArray = [-5, 2, -1, 0, 3, -14]

    assert.deepEqual(bubbleSort(numberArray), [-14, -5, -1, 0, 2, 3]);
  });

  it('sort an array of numbers with duplicate numbers', () => {
    const numberArray = [-5, 2, 2, 0, -14, -14]

    assert.deepEqual(bubbleSort(numberArray), [-14, -14, -5, 0, 2, 2]);
  });

  it('sort a big array of random numbers', () => {
    const min = 0;
    const max = 1e6;
    const n = 2;
    const randArray = randNumGen(min, max, n);

    assert.deepEqual(bubbleSort(randArray), randArray.sort(compareNumbers));
  });


})
