const insertionSort = (unsortedArray) => {
  let sortedArray = []
  let tempEl;

  for (let i = 0; i < unsortedArray.length + i; i++) {
    sortedArray.push(unsortedArray.shift())
    for (let j = sortedArray.length - 1; j > 0; j--) {
      if (sortedArray[j] < sortedArray[j - 1]) {
        tempEl = sortedArray[j];
        sortedArray[j] = sortedArray[j - 1];
        sortedArray[j - 1] = tempEl
      } else {
        j = 0;
      }
    }
  }
  return sortedArray
}

export default insertionSort;
