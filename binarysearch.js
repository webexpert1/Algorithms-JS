// Given a sorted array of integers, write a function called search
// that accepts a value and returns the index where the value passed to
// the function is located. if the value is not found return -1
// search([1,2,3,4,5,6], 4)  retruns 3
// search([1,2,3,4,5,6], 11)  retruns -1

function search(arr, val) {
    for (const key in arr) {
        if(arr[key] === val) return key;        
    }
    return -1;
}



// soln 2
// Divide and conquer(Binary Search) Time Complexity- Log(N)
function search(arr, val) {
    let min = 0;
    let max = arr.length - 1;

    while(min <= max) {
        let middle = Math.floor((min + max)/2);
        let currentElement = arr[middle];

        if(arr[middle] < val) {
            min = middle + 1;
        } 
        else if (arr[middle] > val) {
            max = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}


search([1,2,3,4,5,6], 11)