// Check if string is palindroome

const str = "madam";
const isPalindrome = str === str.split("").reverse().join("");

if(isPalindrome){
    console.log(str," is a palindrome string");
}else
    console.log(str," is not a palindrome string");