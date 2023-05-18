/* Summation of primes
Problem 10
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million. */


function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    // Check divisibility up to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function sumPrimesBelow(n) {
    let sum = 0;
  
    for (let i = 2; i < n; i++) {
      if (isPrime(i)) {
        sum += i;
      }
    }
  
    return sum;
  }
  
  
  // Find sum of all primes below 2 million
  console.log(sumPrimesBelow(2000000)); // Output: 142913828922
  