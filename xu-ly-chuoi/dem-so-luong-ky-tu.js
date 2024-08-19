const str = "hello world";

// sử dụng thư viện
str.length;
console.log(str.length);

// không sử dụng thư viện
function countChar(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count++;
  }
  return count;
}

console.log(countChar(str));
