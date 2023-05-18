/* Special Pythagorean triplet

Problem 9
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc. */

// Function to find the Pythagorean triplet for which a + b + c = 1000
function findPythagoreanTriplet() {
  // Iterate over possible values of 'a'
  for (let a = 1; a < 1000; a++) {
    // Iterate over possible values of 'b' (greater than 'a')
    for (let b = a + 1; b < 1000; b++) {
      // Calculate 'c' based on the condition a + b + c = 1000
      const c = 1000 - a - b;

      // Check if the triplet satisfies the Pythagorean theorem a^2 + b^2 = c^2
      if (a * a + b * b === c * c) {
        // Return the product of 'a', 'b', and 'c'
        return a * b * c;
      }
    }
  }

  // Return null if no solution is found
  return null;
}

// Call the function to find the product of the Pythagorean triplet
const product = findPythagoreanTriplet();

// Output the product
console.log(product);
