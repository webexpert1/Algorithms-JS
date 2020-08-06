// Insertion Sort
// It builds up the array by gradually creating a larger left half which is always sorted
function insertionSort(arr) {
    for(let i = 0; i< arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[j+1] < arr[j]) {
                console.log(arr);
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(insertionSort([10,2,34,22,10,19,17]));