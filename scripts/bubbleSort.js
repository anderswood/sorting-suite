
const bubbleSort = unsortedArr => {
  let tempEl;

  for (let i = 0; i < unsortedArr.length - 1; i++) {
    for (let j = 0; j < unsortedArr.length - 1 - i; j++) {
      if (unsortedArr[j] >= unsortedArr[j + 1]) {
        tempEl = unsortedArr[j];
        unsortedArr[j] = unsortedArr[j + 1];
        unsortedArr[j + 1] = tempEl
      }
    }
  }
  return unsortedArr
}

// module.exports = bubbleSort;
export default bubbleSort;
