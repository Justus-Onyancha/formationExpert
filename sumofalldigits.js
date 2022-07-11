//write a fucntion which takes in an interger as input and returns the sum of all digits.

function solution(arg1){
    var sum = 0; // initialize sum to 0
    var num = arg1; //num is the number we are working with
    while(num > 0){ // while num is greater than 0
        sum += num % 10; // we are taking the last digit and adding it to the sum
        num = Math.floor(num/10); // we are taking the number and dividing it by 10 to get the next digit
    }
    return sum; // return the sum
}