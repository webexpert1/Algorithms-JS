// An anagram  is a word, phrase or name formed by rearranging
// the letters of another , such as cinema , formed from iceman
// Check for anagram
function ValidAnagram(first, second) {
    if(first.length !== second.length) return false;
    const lookup = {};
    for (let i = 0; i < first.length; i++) {
        const letter = first[i];
        // if letter exists, increment , otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < second.length; i++) {
        const letter = second[i];
        
        if(!lookup[letter]) return false;
        else {
            lookup[letter] -= 1;
        }
    }
    return true;
}

console.log(ValidAnagram('anagram', 'nagaram'));