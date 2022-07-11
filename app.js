// https://codesignal.com/ 

// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

function solution(string){
    var obj = {}; // initialize an object
    for (var i = 0; i < string.length; i++) { // for each element in the string
        if (obj[string[i]]) { // if the element is in the object
            obj[string[i]]++; // increment the value of the element
        } else { // if the element is not in the object
            obj[string[i]] = 1; // add the element to the object with a value of 1
        }
    }
    for (var i = 0; i < string.length; i++) { // for each element in the string
        if (obj[string[i]] === 1) { // if the element is in the object with a value of 1
            return i; // return the index of the element
        }
    }
    return -1; // if the element is not in the object, return -1
}


//givern a substring, find the longest palindrome in the string

function solution(str){
    var longest = ''; // initialize longest to an empty string
    for (var i = 0; i < str.length; i++) { // for each element in the string
        for (var j = i + 1; j < str.length + 1; j++) { // for each element in the string
            if (str.slice(i, j).length > longest.length) { // if the length of the substring is greater than the length of the longest
                if (isPalindrome(str.slice(i, j))) { // if the substring is a palindrome
                    longest = str.slice(i, j); // set the longest to the substring
                }
            }
        }
    }
    return longest; // return the longest palindrome
}


function isPalindrome(str){
    var reversed = str.split('').reverse().join(''); // reverse the string
    return str === reversed; // if the string is the same as the reversed string, return true
}

