var i =2;

while (i<=65536){
    console.log(i);
    i*=2;
}
//
//
// // This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
//
// This expression will generate a random number between 1 and 5

do {

    var conesOrdered = Math.floor(Math.random() * 5) + 1;

        if (conesOrdered > allCones) {
            console.log("I can't sell you more than I have.");
        }
        else {
            console.log("I sold " + conesOrdered + " cones.");
            allCones = allCones - conesOrdered;
        }



}while(allCones > 0);

