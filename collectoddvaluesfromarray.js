// collect odd values from an array
// using recursion helper method

function CollectOddValues(arr) {
    const result = [];

    function helper(helperInput) {
        if(helperInput.length === 0) return;

        if(helperInput[0] % 2 !== 0) result.push(helperInput[0]);
        helper(helperInput.slice(1));
    }

    helper(arr);

    return result;
}

console.log(CollectOddValues([1,2,3,4,5,6,7,8,9]))