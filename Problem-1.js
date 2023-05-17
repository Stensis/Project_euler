/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000. */

function findSum() {
  // set binding of sum to be 0
  sum = 0;
  // loop over the array to 1000
  for (let i = 0; i < 1000; i++) {
    // use the modulus to find the numbers multiples of 3 & 5 below 1000
    if (i % 3 == 0 || i % 5 == 0) {
      // add all the numbers
      sum += i;
    }
  }
  // return the total sum of all the multiples
  return sum;
}
console.log(findSum());
