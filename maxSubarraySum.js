// write a function called maxSubrraySum which accepts an array of 
// integers and a number called n. the function should calculate the 
// maximum sum of n consecutive elements in the array.

// soln 1
function maxSubarraySum(arr, num) {
    if(num > arr.length) return null;

    var max = -Infinity;
    for(let i = 0; i < arr.length-num + 1; i++) {
        temp = 0;
        for(let j = 0; j < num; j++) {
            temp += arr[i+j]
        }
        if(temp > max) {
            max = temp;
        }
    }
    return max;
}

// soln 2
// Sliding window pattern
// this pattern involves creating a window which can either be an array
// or number from one position to another. Depending on a certain condition
// the window either increases or closes(and a new window is created)
// Time complexity O(n)
function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null;
    for(let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for(let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
console.log(maxSubarraySum([1,2,5,2,8,1,5], 2))