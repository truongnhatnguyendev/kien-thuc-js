function localtionMax(arr) {
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[index]) {
      index = i;
    }
  }
  return index;
}

const arr = [12, 28, 393, 41, 53];
console.log(localtionMax(arr));
