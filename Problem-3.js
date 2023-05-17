/* Largest prime factor

Problem 3
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ? */

// pass the number as argument
function largestPrimeFactor(number) {
  // initialize  largestfactor as 0 and the divider 2 whih is the smallest prime number
  let largestFactor = 0;
  let divider = 2;

  //if the number is greater than 1 , we check if its divisible by 0;then update largest number to the divider,if the number is not divisible by the prime number we add it.then return the largestFactor.
  while (number > 1) {
    if (number % divider === 0) {
      largestFactor = divider;
      number /= divider;
    } else {
      divider++;
    }
  }

  return largestFactor;
}

console.log(largestPrimeFactor(600851475143));
