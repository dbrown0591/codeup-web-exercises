"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

// confirm("Would you like to enter a number?");
//
// var response = prompt("Please enter a number");
//
// if (response % 2 === 0)
//     {
//         alert("the number even");
//     }
// else
//     {
//         alert("the number is odd");
//     }
//
//     alert (Number(response) + 100);
//
//     if (response < 0) {
//         alert("Your number is negative")
//     }
//     else{
//         alert("Your number is positive")
//     }
/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];


function analyzeColor(color){

    if ("red" === color ) {
        alert("Red is the color of Strawberries");
    }   else if ("orange"===color) {
        alert("Orange is the color of an orange");
    }
        else if ("yellow" === color){
            alert("Yellow is the color of a banana");
    }
        else if ("green" === color) {
            alert("Green is the color of a plant");
    }
        else if ("blue" === color) {
            alert("Blue is the color of the sky");
    }
        else if ("violet" === color){
            alert("Violet is the color of Barney")
    }
        else if ("indigo" === color){
            alert("What is indigo anyway?");
    }
        else {
            alert("I don't know that color");
    }

}
console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
// var response2 = prompt ("Type in a color");
// function analyzeColor() {
//     switch (randomColor) {
//         case "red":
//             alert ("Red is the color of strawberries");
//             break;
//         case "orange":
//             alert("Orange the of an orange");
//             break;
//         case "yellow":
//             alert("Yellow is the color of bananas");
//             break;
//         case "green":
//             alert("Green is the color of the go light");
//             break;
//         case "blue":
//             alert("Blue is the color of the sky");
//             break;
//         case "indigo":
//             alert("Is the color of of Barnie");
//             break;
//         case "violet":
//             alert("Violet is also the color of Barnie");
//             break;
//
//         default:
//             alert("I don't know that color");
//     }
// }
//
// analyzeColor();

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 *
 */
var showMeAColor = prompt("Show me a color");

function analyzeColor2(color){
    alert("I didn't know that you like the color " + color + " that's my favorite too!");
}
console.log(analyzeColor2("red"));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `caculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function caculateTotal(lucky, total){
    var dollarsOff;
    if(lucky === 0){
        alert("No discount");
        dollarsOff = 0;
    }
    else if(lucky === 1){
        alert("You've won a 10% discount.");
        dollarsOff = total * .1;
    }
    else if(lucky === 2){
        alert("You've won a 25% discount.");
        dollarsOff = total * .25;
    }
    else if(lucky === 3){
        alert("You've won a 35% discount.");
        dollarsOff = total * .35;
    }
    else if(lucky === 4){
        alert("You've won a 50% discount.")
        dollarsOff = total * .5;
    }
    else if(lucky === 5){
        alert("You've won everything for free! Good for you!")
        dollarsOff = total * 1;
    }
    return total - dollarsOff;
}
console.log(caculateTotal(1, 100));

var userShoppingBill = prompt("What is your total today");

var newTotal = caculateTotal(1,userShoppingBill);
    alert("You will pay $" + newTotal);


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var winningNumbers = prompt("What is your total bill?");

alert("Your lucky number is:" + luckyNumber);
alert("Your total bill before discount is:" + winningNumbers);
alert("Price after discount applied is:") + calculateTotal(luckyNumber, winningNumbers);
