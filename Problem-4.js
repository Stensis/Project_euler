/* Largest palindrome product
Problem 4
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers. */

function isPalindrome(num) {
  // Convert the number to a string
  const str = num.toString();

  // Reverse the string by splitting it into an array of characters,
  // reversing the array, and joining it back into a string
  const reversedStr = str.split("").reverse().join("");

  // Check if the reversed string is equal to the original string
  return str === reversedStr;
}

let largestPalindrome = 0;

// Iterate through all possible combinations of two 3-digit numbers
for (let i = 999; i >= 100; i--) {
  for (let j = 999; j >= 100; j--) {
    const product = i * j;

    // Check if the product is a palindrome and if it is greater than the current largestPalindrome
    if (isPalindrome(product) && product > largestPalindrome) {
      largestPalindrome = product;
    }
  }
}

console.log(largestPalindrome);
