// A palindrome is a word or sentence that’s spelled the same way both forward and backward, 
// ignoring punctuation, case, and spacing.
// check if a string is a palidrome using recursion
function isPalindrome(str) {
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1));
    return false;
}

console.log(isPalindrome("adaadab"));
