// Ví dụ: "noon" là palindrome, "abcd" không phải

function isPalindrome(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return str === reverseStr;
}
console.log(isPalindrome("noon"));
