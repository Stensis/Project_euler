// maximum path sum 1

function maximumPathSum(triangle) {
  // Start from the second last row and move upwards
  for (let i = triangle.length - 2; i >= 0; i--) {
    // Calculate the maximum sum for each element in the current row
    for (let j = 0; j <= i; j++) {
      // Add the larger adjacent element from the row below
      triangle[i][j] += Math.max(triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
  }

  // The maximum sum will be at the top of the triangle
  return triangle[0][0];
}

console.log(maximumPathSum(triangle));
