//Data Structures and Algorithms

/*Stacks */

//functions: push, pop, peek, length

var letters = []; //example stack

var word = "racecar";

var reverseWord = "";

//put letters of word into Stack
for(var i=0; i <word.length; i++){
    letters.push(word[i]);
};

//pop off the stack in reverse order
for(var i=0: i <word.length; i++){
    reverseWord += letters.pop();
};

if (reverseWord === word){
    console.log(word + " is a palindrome.");
} else {
    console.log(word + " is not a palindrome");
};

//Creating a Stack
var Stack = function() {
    this.count = 0;
    this.storage = {};

    //Adds a value onto the end of the Stack
    this.push= function(value) {
        this.storage[this.count] = value;
        this.count++;
    };

    //Removes and returns the value at the end of the Stack
    this.pop = function(){
        if (this.count === 0) {
            return undefined;
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    };

    this.size = function() {
        return this.count;
    };

    //Returns value at the end of a Stack
    this.peek = function() {
        return this.storage[this.count-1];
    };
};

var myStack = new Stack();
myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.push());
myStack.push('freeCodeCamp');
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
