/* 
Sum square difference

Problem 6:
The sum of the squares of the first ten natural numbers is: 385
The square of the sum of the first ten natural numbers is: 3025

Hence, the difference between the sum of the squares and the square of the sum is: 3025 - 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

// Function to calculate the sum of squares of the first n natural numbers
function sumSquare(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i * i;
    }
    return sum;
  }
  
  // Function to calculate the square of the sum of the first n natural numbers
  function squareSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum * sum;
  }
  
  // Function to calculate the difference between two numbers
  function difference(a, b) {
    return a - b;
  }
  
  // Calculate the sum of squares of the first 100 natural numbers
  const sumOfSquares = sumSquare(100);
  
  // Calculate the square of the sum of the first 100 natural numbers
  const squareOfSum = squareSum(100);
  
  // Calculate the difference between the sum of squares and the square of the sum
  const result = difference(squareOfSum, sumOfSquares);
  
  // Output the result
  console.log(result);
  