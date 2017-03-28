// const assert = require('chai').assert;
import {assert} from 'chai'

// const insertionSort = require('../scripts/insertionSort.js')
import insertionSort from '../scripts/insertionSort.js'


describe('Insertion sort tests', () => {

  it('should be a function', () => {
    assert.isFunction(insertionSort);
  });

  it('sort an array of letters', () => {
    const letterArray = ["d", "b", "a", "c"]

    assert.deepEqual(insertionSort(letterArray), ["a", "b", "c", "d"]);
  });

  it('sort an array of numbers', () => {
    const numberArray = [5, 2, -1, 0, 3, 3]

    assert.deepEqual(insertionSort(numberArray), [-1, 0, 2, 3, 3, 5]);
  });


  it('sort a big array of random numbers', () => {
    const n = 10;
    const min = 0;
    const max = 1e6;
    let randomArray = [];

    const randomNumGenerator = (min, max) => {
      return Math.floor(Math.random() * (max - min)) + min
    }

    for (let i = 0; i < n; i++) {
      randomArray[i] = randomNumGenerator(min, max);
    }

    const array1 = randomArray,
      array2 = randomArray;

    assert.deepEqual(insertionSort(array1), array2.sort());
  });


})
