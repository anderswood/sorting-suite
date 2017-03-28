
const randNumGen = (min, max, n) => {
  let randomArray = [];
  for (let i = 0; i < n; i++) {
    randomArray.push(Math.floor(Math.random() * (max - min)) + min);
  }
  return randomArray;
}

export default randNumGen;
