// Selection sort places small values into sorted position

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let smallest = i;
        for (let j = i+1; j < arr.length; j++) {
            // console.log(smallest, arr[j]);
            
            if(arr[j] < arr[smallest]) {
                smallest = j;
            }
        }
        if(i !== smallest) {
            var temp = arr[i];
            arr[i] = arr[smallest];
            arr[smallest] = temp;
        }
        
    }
    return arr;
}


console.log(selectionSort([10,2,34,22,10,19,17]));