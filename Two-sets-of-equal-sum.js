/*
If possible, divide the integers 1,2,…,n into two sets of equal sum.

Input:
  A positive integer n <= 1,000,000.

Output:
  If it's not possible, return [ ] (Javascript).
  If it's possible, return two disjoint sets. 

  Each integer from 1 to n must be in one of them. 
  The integers in the first set must sum up to the 
  same value as the integers in the second set. 
  The sets can be returned in a list or array.

Examples:
  For n = 8, valid answers include:
  [1, 3, 6, 8], [2, 4, 5, 7] (or [[1, 3, 6, 8], [2, 4, 5, 7]])
  [8, 1, 3, 2, 4], [5, 7, 6]
  [7, 8, 3], [6, 1, 5, 4, 2], and others.

  For n = 9 it is not possible. 
  For example, try [6, 8, 9] and [1, 2, 3, 4, 5, 7], 
  but the first sums to 23 and the second to 22. 
  No other sets work either. 
*/


// Solution

function createTwoSetsOfEqualSum(n) {
  // If the sum of all numbers from 1 to n are odd, return an empty array.
  if ((n * (n+1) / 2) % 2 !== 0) return []
  
  // Initializing the result arrays
  let [arr1, arr2] = [[], []];
  
  // Tracking the sum of each array
  let sum1 = 0;
  let sum2 = 0;

  // Iterating the loop in reverse to start with the largest values
  for (let i = n; i > 0; i--) {
    // If sum1 is less than or equal to sum2
    if (sum1 <= sum2) {
      // Push the value to arr1
      arr1.push(i);
      // and increment the value of sum1
      sum1 += i;
    } else {
      // Push the value to arr2
      arr2.push(i);
      // and increment the value of sum2
      sum2 += i;
    }
  }
  // or return the array if the values are equal
  return [arr1, arr2];
}

// or

function createTwoSetsOfEqualSum(n) {
	let equalSum = (n * (n + 1)) / 2;
	if (equalSum % 2 != 0) return [];
	let acc = equalSum / 2;

	let answer = [[], []];

	for (let i = n; i >= 1; i--) {
		if (acc - i >= 0) {
			acc -= i;
			answer[0].push(i);
		} else {
			answer[1].push(i);
		}
	}

	return answer;
}