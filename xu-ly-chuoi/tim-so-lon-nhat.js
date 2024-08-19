const arr = [11, 22, 35, 4, 51, 6, 75, 83, 91, 10];

// sử dụng thư viện
function soLonNhat(arr) {
  return Math.max(...arr);
}
console.log(soLonNhat(arr));

// không dùng thư viện
let max = 0;
arr.forEach((item) => {
  if (item > max) max = item;
});

console.log(max);
