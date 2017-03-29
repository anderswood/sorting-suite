
const insertionSort = (unsortedArray) => {
  let tempEl;

  for (var i = 1; i < unsortedArray.length; i++) {
    for (let j = i; j > 0; j--) {
      if (unsortedArray[j] < unsortedArray[j - 1]) {
        tempEl = unsortedArray[j];
        unsortedArray[j] = unsortedArray[j - 1];
        unsortedArray[j - 1] = tempEl
      } else {
        break;
      }
    }
  }
  return unsortedArray
}

export default insertionSort;
