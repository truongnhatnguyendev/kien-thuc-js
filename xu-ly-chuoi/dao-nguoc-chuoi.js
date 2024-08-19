// dùng thư viện
const str = "hello world";
const reverseStr = str.split("").reverse().join("");
console.log(reverseStr);

// không dùng thư viện
let reverseStr2 = "";
for (let i = str.length - 1; i >= 0; i--) {
  reverseStr2 += str[i];
}
console.log(reverseStr2);

// dùng foreach
let reverseStr3 = "";
str.split("").forEach((char) => {
  reverseStr3 = char + reverseStr3;
});
