const mergeSort = (unsplitArr) => {
  let midIndex = unsplitArr.length / 2;

  if (midIndex < 1) {
    return unsplitArr;
  }
  let leftArr = unsplitArr.slice(0, midIndex);
  let rightArr = unsplitArr.slice(midIndex, unsplitArr.length);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

const merge = (leftArr, rightArr) => {
  let sortedArr = []

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }

  while (leftArr.length) {
    sortedArr.push(leftArr.shift())
  }

  while (rightArr.length) {
    sortedArr.push(rightArr.shift())
  }
  return sortedArr;
}


export default mergeSort;
