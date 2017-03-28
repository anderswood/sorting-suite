
const bubbleSort = unsortedArr => {
  let tempEl;
  let counter = 0
  let swapCounter = 0

  for (let i = 0; i < unsortedArr.length - 1; i++) {
    for (let j = 0; j < unsortedArr.length - 1 - counter; j++) {
      if (unsortedArr[j] > unsortedArr[j + 1]) {
        tempEl = unsortedArr[j];
        unsortedArr[j] = unsortedArr[j + 1];
        unsortedArr[j + 1] = tempEl
        swapCounter ++
      }
    }
    if (swapCounter === 0) {
      return unsortedArr
    } else {
      swapCounter = 0;
    }
    counter ++
  }
  return unsortedArr
}

// module.exports = bubbleSort;
export default bubbleSort;
