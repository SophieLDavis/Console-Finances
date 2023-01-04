# Javascript-Challenge

Alright, so I see where you are coming from by trying to store the changes in the financeChanges array. The array that is produced though does not have the month the change occurred. (edited) 

It just has the value of the change. (edited) 
8:39
So I am not allowed to give you the answer exactly since it is an assignment, but I am going to send you a step by step function for calculating the max difference, but the one I am sending only works for a one dimensional array, so you will have to make it work for a two dimensional array.
8:42
Initialize a variable maxDiff to hold the maximum difference found so far, and set it to a very small negative number. This will ensure that any positive difference will be larger and will be selected as the maximum difference.
Iterate through the array with a for loop. On each iteration, compare the current element to the maximum difference found so far. If the current element is larger than the maximum difference, update maxDiff to be the difference between the current element and the previous element.
Return maxDiff as the result.
function findLargestIncrease(arr) {
  let maxDiff = -1;  // initialize maxDiff to a very small negative number
  for (let i = 1; i < arr.length; i++) {  // start the loop at index 1
    let diff = arr[i] - arr[i - 1];  // calculate the difference between the current element and the previous element
    if (diff > maxDiff) {  // if the difference is larger than the current maxDiff
      maxDiff = diff;  // update maxDiff to be the new larger difference
    }
  }
  return maxDiff;
}
8:45
To clarify the difference between a one and two dimensional array, a one dimensional array would look like this: [1, 5, 6, 9]
Where as a two dimensional array would look more like the finances array where we have[ ['Apr-2010', -69417],
['May-2010', 310503],
['Jun-2010', 522857],
['Jul-2010', 1033096]]