"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 *  > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello(name){
    return "Hello, " + name;
}
console.log(sayHello("Damion"));



/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
var helloMessage = sayHello("Damion");
console.log(helloMessage);


/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

var myName = "Damion";
console.log(sayHello(myName));



// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 *  > isTwo(1) // returns false
 *  > isTwo(2) // returns true
 *  > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
function isTwo(number){
    return 2 == number;
}
console.log(isTwo(random));



/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Example:
 * > calculateTip(0.20, 20) // returns 4
 */
function calculateTip(tipPercent,bill){
    return tipPercent*bill;
}
console.log(calculateTip(.15,20));
/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
function calculateTip(){
    var tipPercent = prompt("What percent would you like to tip?")
    var bill = prompt("What was your totol bill?")
    return tipPercent*bill;

}
console.log(calculateTip());

// function add(thing,thing2){
//     return thing + thing2;
// }
// console.log(add(100,200));

function identity(input){
    return input;
}
console.log(identity(4));

function getRandomNumber(min,max){

    return Math.floor((Math.random() * max) + min);
}
console.log(getRandomNumber(2,10));


function first(input){
    return input.substring(0, 1);
}
console.log(first("Codeup"));

function last(input) {
    return input.substring(5,6);
}
console.log(last("Codeup"));

function rest(input) {
    return input.substring(1,6);
}
console.log(rest("Codeup"));

function isNumeric(input) {
    return input == 2;
}
console.log(isNumeric(2));

function reverse(input) {
    return input.split("").reverse().join("");
}

console.log(reverse("hello"));

function count(input){
    return input.length;
}
console.log(count("Codeup"));

function add(a,b) {
    return a + b;
}

console.log(add(2,3));

function subtract(a,b){
    return a - b;
}

console.log(subtract(100,50));

function multiply(a,b) {
    return a * b;
}

console.log(multiply(3,2));

function divided(numerator,denominator){
    return numerator/denominator;
}

console.log(divided(10,5));

function remainder(a,b){
    return a%b;
}
console.log(remainder(14,6));

function square(a) {
    return Math.pow(2,2);
}
console.log(square(2));

function sumOfSquares(a,b) {
    function add(a,b) {
        return a + b;
    }
    function square(a) {
        return Math.pow(2,2);
    }
}