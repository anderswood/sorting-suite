
const bubbleSort = arrayToSort => {
  let tempEl;
  let counter = 0
  let swapCounter = 0

  for (let i = 0; i < arrayToSort.length - 1; i++) {
    for (let j = 0; j < arrayToSort.length - 1 - counter; j++) {
      if (arrayToSort[j] > arrayToSort[j + 1]) {
        tempEl = arrayToSort[j];
        arrayToSort[j] = arrayToSort[j + 1];
        arrayToSort[j + 1] = tempEl
        swapCounter ++
      }
    }
    if (swapCounter === 0) {
      return arrayToSort
    } else {
      swapCounter = 0;
    }
    counter ++
  }
  return arrayToSort
}

// module.exports = bubbleSort;
export default bubbleSort;
