/* Sum square difference
Problem 6
The sum of the squares of the first ten natural numbers is, 385
The square of the sum of the first ten natural numbers is,

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 
.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum. */

function sumSquare(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i * i;
  }
  return sum;
}
// console.log(sumSquare(100));

function squareSum(m) {
  let sum = 0;
  for (let i = 1; i <= m; i++) {
    sum += i;
  }
  return sum * sum;
}
// console.log(squareSum(100));

function difference(a, b) {
  return a - b;
}

const sumOfSquares = sumSquare(100);
const squareOfSum = squareSum(100);
const result = difference(squareOfSum, sumOfSquares);

console.log(result);