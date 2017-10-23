(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.firstName) // "Sanchez"
     */

        var person = {

            lastName: "Brown",
            firstName: "Damion"
    }
        console.log(person.firstName);
        console.log(person.lastName);




    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */


        person.sayHello = function (){console.log("My last name is " + person.lastName + " My first name is " + person.firstName)

};
person.sayHello();





    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

        shoppers.forEach(function(shopper){

            var discount;
            var finalAmount;
            discount = shopper.amount * .12;
            finalAmount = shopper.amount - discount;
            if (shopper.amount > 200) {
                console.log("Shopper " + shopper.name + " had " + shopper.amount + " in purchases and paid after the discount $" + finalAmount.toFixed(2));
                // return finalAmount;
            } else {
                // return shopper.amount;
            }


    })



    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
        var books = [{
            title:["The Old Man and the Sea","The Shinning","Tunning the Human Bio Field", "The Holographic Universe", "The Matrix"],

            author1:{
                firstName:["Ernest","Stephan", "Eileen Day","Michael","Sophia"]},

            author2:{
                lastName:["Hemingway", "King", "McKusick", "Tabot", "Stewart"]},
    }];
    console.log(books[0].title);
    console.log(books[0].author1.firstName);
    console.log(books[0].author2.lastName);




    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */


    var books = [{
        title:["The Salmon of Doubt","Walkaway","A Brief History of Time"],

        author:{
            name:["Douglas Adams", "Cory Doctorow", "Stephen Hawking"]},

        number:{
            index:["Book 1", "Book 2", "Book 3"]}
    }];

    for (var i = 0; i < books.length; i++) {
        console.log(books[0].title);
        console.log(books[0].author.name);
        console.log(books[0].number.index);
    }

})();


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
