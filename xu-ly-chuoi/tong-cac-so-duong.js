const arr = [-11, -22, -35, -4, 51, 6, -75, -83, -91, 10];

let sum = 0;
arr.forEach((item) => {
  if (item > 0) {
    sum += item;
  }
});
console.log(sum);
