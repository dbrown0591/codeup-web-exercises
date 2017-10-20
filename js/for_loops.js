
function showMultiplicationTable(input) {

    for(var x=1; x<=10; x++) {


        console.log(input + "x" + x + "=" + (input*x));
    }
}

showMultiplicationTable(7);
//





for(var i=1; i<=9; i++) {
    var message = ""
    for (var x = 1; x <= i; x++) {
       message += i

    }
    console.log(message);
}

var message = "";
for(var i=1; i<=9; i++) {
    message += "1";
    console.log(i * parseInt(message));
// for (var x = 1; x <= i; x++) {
    //
    //
    // }
}




//Generate a number between 20 and 200


for (var i = 1; i <= 10; i++){
    var rand = Math.floor(Math.random() * 180) + 20;
//Console.log a message saying even or odd for the generated number
//Do these steps 10 times
    if ( rand % 2 === 0){
        console.log(rand + "is even" )
    }
    else{
        console.log(rand + "is odd")
    }

}


//Create a for loop that descends numbers 100 to 5
//
var i =0;
for ( i = 100; i>=5; i--){

    if()
    console.log(i);
}
//
// var i = 0;
//
// for (i = 10; i > 0; i--){
//     console.log(i);
// }








// function pickApples(sizeOfMyBasket) {
//     var basket = it can hold sizeOfMyBasket of apples;
//     for(picks apples until my basket is full one at a time) {
//         throwing one apple in basket;
//     }
//     show my basket
// }


