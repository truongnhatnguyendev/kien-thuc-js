const duplicateStr = "trruoonggg nnhaatt ngguyyenn";

// sử dụng thư viện
const removeDuplicates = Array.from(new Set(duplicateStr)).join("");
console.log(removeDuplicates); // kết quả:truong haye

// sử dụng thức map
const uniqueChars2 = duplicateStr
  .split("")
  .filter((item, index) => duplicateStr.indexOf(item) === index)
  .join("");
console.log(uniqueChars2); // kết quả:truong haye

// không sử dụng thư viện
let unduplicated = "";
for (let i = 0; i < duplicateStr.length; i++) {
  if (unduplicated.indexOf(duplicateStr[i]) === -1) {
    unduplicated += duplicateStr[i];
  }
}
console.log(unduplicated); // kết quả:truong haye

// sử dụng foreach
let uniqueChars = "";
duplicateStr.split("").forEach((item) => {
  if (!uniqueChars.includes(item)) {
    uniqueChars += item;
  }
});
console.log(uniqueChars); // kết quả:truong haye

// sử dụng reduce
const uniqueChars3 = duplicateStr.split("").reduce((acc, item) => {
  if (!acc.includes(item)) {
    acc += item;
  }
  return acc;
}, "");
console.log(uniqueChars3); // kết quả:truong haye

// xóa trùng lặp nhưng vẫn giữ nghĩa của từ
let word = "";
let arrWords = [];
let unduplicatedWord = "";

for (let i = 0; i < duplicateStr.length; i++) {
  if (duplicateStr[i] !== " ") {
    word += duplicateStr[i];
  } else {
    if (word !== "") {
      arrWords.push(word);
      word = "";
    }
  }
}
if (word !== "") {
  arrWords.push(word);
}

for (let i = 0; i < arrWords.length; i++) {
  let temp = arrWords[i];
  let uniqueTemp = "";

  for (let j = 0; j < temp.length; j++) {
    if (uniqueTemp.indexOf(temp[j]) === -1) {
      uniqueTemp += temp[j];
    }
  }

  unduplicatedWord += uniqueTemp;
  if (i !== arrWords.length - 1) {
    unduplicatedWord += " ";
  }
}

console.log(unduplicatedWord);

// strign không có khoảng trắng
const duplicateStr4 = "trruuoonggnhhaattnguyyenn";
let unduplicatedStr = "";

for (let i = 0; i < duplicateStr4.length; i++) {
  if (duplicateStr4[i] !== duplicateStr4[i + 1]) {
    unduplicatedStr += duplicateStr4[i];
  }
}

console.log(unduplicatedStr);

// const duplicateStr = "trruuoonggnhhaattnguyyenn";
// let unduplicatedStr = "";

// for (let i = 0; i < duplicateStr.length; i++) {
//   if (i === 0 || duplicateStr[i] !== duplicateStr[i - 1]) {
//     unduplicatedStr += duplicateStr[i];
//   } else if (duplicateStr[i] !== " ") {
//     unduplicatedStr += " " + duplicateStr[i];
//   }
// }

// console.log(unduplicatedStr);
