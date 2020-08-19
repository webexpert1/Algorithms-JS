// isPalindrome using recursion
// A palindrome is a word, number, phrase, or other sequence
// of characters which reads the same backward as forward, such as madam, racecar

function isPalindrome(str) {
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
    return false;
}

isPalindrome("caac");




// reverse a string using recursion
// hello returns olleh
function reverse(str) {
    if(str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0]
}

reverse('hello')