// Ví dụ: "Hello" tìm "l" => 2

const str = "Hello";

// sử dụng thư viện
const index = str.indexOf("l");
console.log(index);

// sử dụng thức map
let index2 = -1;
for (let i = 0; i < str.length; i++) {
  if (str[i] === "l") {
    index2 = i;
    break;
  }
}
console.log(index2);

// sử dụng thức foreach
let index3 = -1;
str.split("").forEach((char, index) => {
  if (char === "l") {
    index3 = index;
  }
});
console.log(index3);
