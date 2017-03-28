// const assert = require('chai').assert;
import {assert} from 'chai'

// const insertionSort = require('../scripts/insertionSort.js')
import insertionSort from '../scripts/insertionSort.js'
import randNumGen from '../scripts/helperFuncs.js'


describe('Insertion sort tests', () => {

  it('should be a function', () => {
    assert.isFunction(insertionSort);
  });

  it('sort an array of letters', () => {
    const letterArray = ["d", "b", "a", "c"]

    assert.deepEqual(insertionSort(letterArray), ["a", "b", "c", "d"]);
  });

  it('sort an array of letters with duplicate letters', () => {
    const letterArray = ["d", "b", "a", "c", "a", "d"]

    assert.deepEqual(insertionSort(letterArray),
      [
        "a", "a", "b", "c", "d", "d"
      ]);
  });

  it('sort an array of numbers', () => {
    const numberArray = [5, 2, 1, 0, 3]

    assert.deepEqual(insertionSort(numberArray), [0, 1, 2, 3, 5]);
  });

  it('sort an array of numbers with negative numbers', () => {
    const numberArray = [-5, 2, -1, 0, 3, -14]

    assert.deepEqual(insertionSort(numberArray), [-14, -5, -1, 0, 2, 3]);
  });

  it('sort an array of numbers with duplicate numbers', () => {
    const numberArray = [-5, 2, 2, 0, -14, -14]

    assert.deepEqual(insertionSort(numberArray), [-14, -14, -5, 0, 2, 2]);
  });

  it.skip('sort a big array of random numbers', () => {
    const min = 0;
    const max = 100;
    const n = 7;
    const randArray = randNumGen(min, max, n);
    setTimeout(3000)

    const compareNumbers = (a, b) => {
      return a - b;
    }

    let newArr;


    assert.deepEqual(newArr = insertionSort(randArray), randArray.sort(compareNumbers));
  });


})
