// fib sequence
// 0, 1, 1, 2, 3, 5, 8

function fib(num) {
    let arr = [0, 1];

    for (let i = 2; i < num + 1; i++) {
        arr.push(arr[i-2] + arr[i-1]) 
    }
    return arr[num]
}

// fib using recursion
function fib2(n) {
    if(n < 2) return n;
    return fib2(n-1) + fib2(n-2);
}


console.log(fib2(4))