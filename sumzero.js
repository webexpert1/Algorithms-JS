// a function sumZero which accepts sorted array of integers.
// the function should find the first pair where the sum is 0
// return an array that includes both the values that sum to zero
// or undefined if a pair does not exist
// Soln 1
function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
           if(arr[i] + arr[j] === 0) return [arr[i], arr[j]]
           
        }
        
    }
}

// soln 2
function sumZero1(arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        let sum = arr[left] + arr[right];
        if( sum === 0) {
            return [arr[left], arr[right]];
        } else if(sum > 0) {
            right--;
        } else {
            left--;
        }
    }
}