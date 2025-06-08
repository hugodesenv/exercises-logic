// https://leetcode.com/problems/add-two-numbers/description/

/**
  Input: l1 = [2,4,3], 
         l2 = [5,6,4]
  Output: [7,0,8]
  Explanation: 342 + 465 = 807.

  Example 2:
  Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
  Output: [8,9,9,9,0,0,0,1]
 */

function addTwoNumbers(l1, l2) {
  let i = 0;
  let aux = 0;
  let result = [];

  while (i < l1.length || i < l2.length || aux > 0) {
    let n1 = l1[i] ?? 0;
    let n2 = l2[i] ?? 0;

    let sum = aux + n1 + n2;

    if (sum > 9) {
      sum = sum - 10;
      aux = 1;
    } else {
      aux = 0;
    }

    result.push(sum);
    i++;
  }

  return result;
}

console.log('Example 1', addTwoNumbers([2, 4, 3], [5, 6, 4]));
console.log('Example 2', addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));
