// const assert = require('chai').assert;
import {assert} from 'chai'

// const bubbleSort = require('../scripts/bubbleSort.js')
import bubbleSort from '../scripts/bubbleSort.js'


describe('Bubble sort tests', () => {

  it('should be a function', () => {
    assert.isFunction(bubbleSort);
  });

  it('sort an array of letters', () => {
    const letterArray = ["d", "b", "a", "c"]

    assert.deepEqual(bubbleSort(letterArray), ["a", "b", "c", "d"]);
  });

  it('sort an array of numbers', () => {
    const numberArray = [5, 2, -1, 0, 3, 3]

    assert.deepEqual(bubbleSort(numberArray), [-1, 0, 2, 3, 3, 5]);
  });


  it('sort a big array of random numbers', () => {
    const n = 100;
    const min = 0;
    const max = 1e6;
    let randomArray = [];

    const randomNumGenerator = (min, max) => {
      return Math.floor(Math.random() * (max - min)) + min
    }

    for (let i = 0; i < n; i++) {
      randomArray[i] = randomNumGenerator(min, max);
    }

    const array1 = randomArray
    const array2 = randomArray

    assert.deepEqual(bubbleSort(array1), array2.sort());
  });


})
