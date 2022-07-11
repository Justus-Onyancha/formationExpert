// write the function solution which takes an array of intergers as input and returns true if all of the values in the array have same value, otherwise it should return false.


function solution(input){
    var first = input[0]; // initialize first to the first element in the array
    for (var i = 0; i < input.length; i++) { //
        if (input[i] !== first) { //
        return false; // if the element is not the same as the first element, return false
        }
    }
    return true; // if all elements are the same, return true
}