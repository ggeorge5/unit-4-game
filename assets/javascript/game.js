

var wins = 0;
var losses = 0;
var counter = 0;
var targetNumber = 56;



$("#crystal-image").on("click", function (){
    counter += 10;

    if (counter === targetNumber){
        alert('Congrats! you win!')
    }
})