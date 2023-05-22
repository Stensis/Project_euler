function rangeOfCollatz() {
  let longestChain = 0; // Variable to store the length of the longest chain
  let startingNumber = 0; // Variable to store the starting number producing the longest chain

  for (let i = 1; i < 1000000; i++) {
    let number = i;
    let chainLength = 1; // Initialize the chain length for each starting number

    while (number !== 1) {
      if (number % 2 === 0) {
        number = number / 2; // Apply the even rule
      } else {
        number = 3 * number + 1; // Apply the odd rule
      }
      chainLength++; // Increment the chain length
    }

    if (chainLength > longestChain) {
      longestChain = chainLength;
      startingNumber = i;
    }
  }

  return startingNumber;
}

console.log(rangeOfCollatz());
