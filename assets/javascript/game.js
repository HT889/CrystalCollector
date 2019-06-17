
// global variables
var randomNum;
var losses = 0;
var wins = 0;
var score = 0;

var gameStartAndReset = function () {                          //function to restart the game
    
    $(".crystals").empty();
    // a new randomNum between 19-120 is generated at the beginning of each round
    randomNum = Math.floor(Math.random() * 102) + 19;
    $("#randomWinningNumber").html('Your goal: ' + randomNum); //displaying the random number on HTML
    
    // there are four crystals to choose from in this game, each crystal is assigned a random number between 1-12

    for (i = 0; i < 4; i++){                                //for loop generates 4 crystals with 4 random numbers assigned to them between 1-12
        var random = Math.floor(Math.random() * 12) + 1;
        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random-number": random
            });
            crystal.html(random); // to see the crystal values - REMOVE WHEN DONE
        $(".crystals").append(crystal);
    }

    $("#score").html(score);

}

gameStartAndReset();    //game beginning

$(document).on('click', ".crystal", function() { //ASK ABOUT EVENT DELEGATION - YOU WERENT ABLE TO CLICK ON THE CRYSTALS ONCE 1 ROUND WAS OVER UNTIL YOU CHANGED THE CONTENTS OF THE $() FROM $(".crystal") to what it currently is

    var number = parseInt($(this).attr('data-random-number'));
    score += number;
    $("#score").html(score);
    console.log(score);
    if (score > randomNum) {
        losses++;
        score = 0;
        
        $("#losses").html(losses);
        console.log("loser!");
        gameStartAndReset();
    }
    else if (score === randomNum){
        wins++;
        score = 0;
        
        $("#wins").html(wins);
        console.log("winner!");
        gameStartAndReset();
    } 
});


// clicking on a crystal adds the crystals numerical value to your total score
// if your points === the randomNum generated at the beginning of the round you win
// if your points are > the randomNum generated at the beginning of the round, you lose
// a new random number is generated for each crystal when the round is over (win or lose)