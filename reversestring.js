// reverse a string using recursion

function reverse(str){
    if(str.length <= 1) 
        return str;
    str = str.toLowerCase();
    return reverse(str.slice(1)) + str[0];

}

console.log(reverse("Richard"));
