// make object to return at the end
// loop over string, for each character
   // if the char is a number/letter AND is a key object, add one to count
   // if the char is a number/letter AND is not in object, set value to 1
   // if character is something else(space, perion etc) do nothing
// return object at end

function charCount(str) {
    let result = {}
    for (let char of str) {
        char = char.toLowerCase();
        if(/[a-z0-9]/.test(char))
            result[char] = ++result[char] || 1;
    }
    return result;
}

console.log(charCount("Hello wold!"));