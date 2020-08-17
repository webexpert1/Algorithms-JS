// find the sum of a range using recursion

function sumRange(num) {
    if(num === 1) return 1;
    return num + sumRange(num-1);
}

console.log(sumRange(3))