// const assert = require('chai').assert;
import {assert} from 'chai'

// const bubbleSort = require('../scripts/bubbleSort.js')
import bubbleSort from '../scripts/bubbleSort.js'


describe('Bubble sort tests', () => {

  it('sort an array of letters', () => {
    const letterArray = ["d", "b", "a", "c"]

    assert.equal(bubbleSort(letterArray), ["a", "b", "c", "d"]);
  });

  it('sort an array of numbers', () => {
    const numberArray = [5, 2, 1, 0, 3, 4]

    assert.equal(bubbleSort(numberArray), [1, 2, 3, 4, 5]);
  });


  it('sort a big array of random numbers', () => {
    const n = 3;
    const min = 0;
    const max = 1e6;
    const randomNumGenerator = (min, max) => {
      return Math.floor(Math.random() * (max - min)) + min
    }

    let randomArray = [];

    for (let i = 0; i < n; i++) {
      randomArray[i] = randomNumGenerator(min, max);
    }

    assert.equal(bubbleSort(randomArray), randomArray.sort());
  });


})
