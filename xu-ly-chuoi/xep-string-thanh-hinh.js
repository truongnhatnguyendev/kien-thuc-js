var height = 10; // Chiều cao của thang
var width = 10; // Chiều rộng của thang
var output = "";

for (var i = 0; i < height; i++) {
  for (var j = 0; j < width; j++) {
    if (j <= i) {
      output += "+";
    } else {
      output += ".";
    }
  }
  output += "\n";
}

console.log(output);

// In ra hình tam giác cân
for (var i = 1; i <= height; i++) {
  var spaces = ".".repeat(height - i);
  var stars = "*".repeat(2 * i - 1);
  console.log(spaces + stars + spaces);
}
