// Ví dụ: "Hello world" => ["Hello", "world"]

class TachChuoiThanhMangCacTu {
  constructor(string) {
    this.str = string;
  }
  // sử dụng thư viện
  liblary() {
    return this.str.split(" ");
  }

  // không sử thư viện
  notLiblary() {
    let arrWords = [];
    let word = "";
    for (let i = 0; i < this.str.length; i++) {
      if (this.str[i] !== " ") {
        word += this.str[i];
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

    return arrWords;
  }
}

// tính kế thừa
class TachChuoi extends TachChuoiThanhMangCacTu {
  constructor(string) {
    super(string);
    this.newstring = "nhat nguyen";
  }

  liblary(string) {
    this.newstring = string;
    return this.newstring.split(" ");
  }
}

const str = "Hello world";
const liblary = new TachChuoiThanhMangCacTu(str).liblary();
const notLiblary = new TachChuoiThanhMangCacTu(str).notLiblary();

// tính đa hình
const polymorphism = new TachChuoi(str).liblary("my duyen");

console.log(liblary);
console.log(notLiblary);
console.log(polymorphism);

// console.log(str.split(" "));

// không sử dụng thư viện
// let arrWords = [];
// let word = "";

// for (let i = 0; i < str.length; i++) {
//   if (str[i] !== " ") {
//     word += str[i];
//   } else {
//     if (word !== "") {
//       arrWords.push(word);
//       word = "";
//     }
//   }
// }
// if (word !== "") {
//   arrWords.push(word);
// }

// console.log(arrWords);
