function swap(arr, indexi, indexj) {
  let temp = arr[indexi];
  arr[indexi] = arr[indexj];
  arr[indexj] = temp;
}

function interChangeSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        swap(arr, i, j);
      }
    }
  }
  return arr;
}

const result = interChangeSort([2, 36, 11, 5, 64, 45]);

console.log(result);

// Loại Bỏ Các Phần Tử Trùng Lặp
function sortAndRemoveDuplicates(arr) {
  // Sắp xếp mảng bằng Interchange Sort
  let sortedArr = interChangeSort(arr);

  // Loại bỏ các phần tử trùng lặp
  let uniqueArr = [];
  for (let i = 0; i < sortedArr.length; i++) {
    if (uniqueArr.indexOf(sortedArr[i]) === -1) {
      uniqueArr.push(sortedArr[i]);
    }
  }

  return uniqueArr;
}

// Ví dụ sử dụng
let arr = [5, 3, 8, 3, 9, 1, 5, 3];
let results = sortAndRemoveDuplicates(arr);
console.log(results); // Kết quả: [1, 3, 5, 8, 9
