function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let index = i;
    for (let j = i + 1; j < arr.length; j++) {
      // Đúng phải là j++
      if (arr[j] < arr[index]) {
        index = j;
      }
    }
    // Sau khi tìm được phần tử nhỏ nhất, ta hoán đổi nó với phần tử đầu tiên của phần chưa được sắp xếp
    if (index !== i) {
      let temp = arr[i];
      arr[i] = arr[index];
      arr[index] = temp;
    }
  }
  return arr;
}

const arr = [11, 12, 64, 52, 7];
const result = selectionSort(arr);
console.log(result); // [7, 11, 12, 52, 64]
