//Prompt the user for an odd number between 1 and 50.
//Use a loop and a break statement to continue prompting the user if they enter invalid input.
//Use a loop and the continue statement to output all the odd numbers
// between 1 and 50, except for the number the user entered.

// var oddNumber = prompt("Give me a number between 1 and 50");

do {
    var oddNumber = prompt("Give me an odd number");
}while (oddNumber% 2==0);

for (var i = 1; i<=50; i++) {
    if(oddNumber == i){
        console.log("Yikes skipping number: " + i);
        continue;
    }

    if (i % 2 === 1) {
        console.log("Here is a odd number:" + i);
    }
}