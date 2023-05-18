/* 10,001st prime
Problem 7
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number? */

function isPrime(num) {
  if (num <= 1) {
    return false; // Numbers less than or equal to 1 are not prime
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // If divisible, the number is not prime
    }
  }

  return true; // If not divisible by any number, the number is prime
}

function findNthPrime(n) {
  let count = 0; // Counter for the number of primes found
  let number = 2; // Start checking from number 2

  while (count < n) {
    if (isPrime(number)) {
      count++; // Increment the count if the number is prime
    }

    number++; // Move on to the next number
  }

  return number - 1; // Return the last prime number found
}

const n = 10001; // The value of n for the 10,001st prime number
const result = findNthPrime(n);

console.log(result); // Output the 10,001st prime number
