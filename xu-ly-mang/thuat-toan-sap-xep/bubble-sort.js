function bubbleSortC1(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}
console.log(bubbleSortC1([3, 4, 56, 12, 65, 8, 1]));

function bubbleSortC2(arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = arr.length; j >= i + 1; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSortC2([3, 4, 56, 12, 65, 8, 1]));
