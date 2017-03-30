
const insertionSort = (unsortedArr) => {
  let tempEl;

  for (var i = 1; i < unsortedArr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (unsortedArr[j] < unsortedArr[j - 1]) {
        tempEl = unsortedArr[j];
        unsortedArr[j] = unsortedArr[j - 1];
        unsortedArr[j - 1] = tempEl
      } else {
        break;
      }
    }
  }
  return unsortedArr
}

export default insertionSort;
