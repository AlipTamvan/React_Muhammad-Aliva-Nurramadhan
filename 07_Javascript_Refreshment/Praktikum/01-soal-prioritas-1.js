// Soal Prioritas 1

// 1. Variabel dan Tipe Data
function swapValues(a, b) {
  let temp = a;
  a = b;
  b = temp;

  const swappedValues = [a, b];
  console.log(`=== Swap Values ===`);
  console.log(
    `Nilai setelah ditukar: a = ${swappedValues[0]}, b = ${swappedValues[1]}`
  );
}
// Contoh Penggunaan
swapValues(5, 10); // Output: a = 10, b = 5

// 2. Destructuring
const reverseFirstTwo = ([a, b]) => {
  [b, a] = [a, b];
  console.log(`=== Reverse First Two ===`);
  console.log(`Hasil Setelah Di Reverse: a = ${a}, b = ${b}`);
};
// Contoh Penggunaan
reverseFirstTwo([8, 10]); // Output: a = 10, b = 8

// 3. Alur Kontrol (Control Flow)
function findLargest(arr) {
  if (arr.length === 0) return undefined;

  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}
// Contoh penggunaan
const numbers = [5, 10, 8];
const largestNumber = findLargest(numbers);
console.log(`=== Find Largest ===`);
console.log(`Nilai terbesar dalam array [${numbers}]: ${largestNumber}`); // Output: 10

// 4. Method
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      return "Error: Division by zero";
    }
    return a / b;
  },
};

// Contoh penggunaan
console.log(`=== Calculator ===`);
console.log(`5 + 3 = ${calculator.add(5, 3)}`); // Output: 8
console.log(`5 - 3 = ${calculator.subtract(5, 3)}`); // Output: 2
console.log(`5 * 3 = ${calculator.multiply(5, 3)}`); // Output: 15
console.log(`5 / 3 = ${calculator.divide(5, 3)}`); // Output: 1.6666666666666667
console.log(`5 / 0 = ${calculator.divide(5, 0)}`); // Output: Error: Division by zero

// 5. Fungsi
function greetUser(name) {
  return `Hello, ${name}!`;
}
console.log(`=== Greeting ===`);
console.log(greetUser("Aliva")); // Output: Hello, Aliva!

const greetUserArrow = (name) => {
  return `Hello, ${name}!`;
};
console.log(greetUserArrow("Nurramadhan")); // Output: Hello, Nurramadhan!
