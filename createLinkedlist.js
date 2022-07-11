//write a fuction solution which creates and returns the linked list


function solution(arg1){
    var list = new LinkedList(); // initialize list to new linked list
    for(var i = 0; i < arg1.length; i++){  // for each element in the array
        list.add(arg1[i]); // add the element to the list
    }
    return list; // return the list
}
