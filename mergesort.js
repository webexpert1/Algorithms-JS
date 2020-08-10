// Merge sort
// It works by decomposing an array into smaller arraysof 0 and 1 elements, then building up a newly sorted array
function mergeSort(arr1, arr2) {
    var result = [];

    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length) {
       if (arr1[i] < arr2[j]) {
        result.push(arr1[i]);
        ++i;
       }
        else {
            result.push(arr2[j]);
            ++j;
        }
    }
    return result;
}

console.log(mergeSort([1,10,50], [2, 14, 99, 100]));