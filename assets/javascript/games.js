// game 4 crystals
// every crystal (button image [on"click"]) needs to have a random number [Math.floor(Math.random() * 13);] associated with it between 1 - 12.
// random # should be generated for each crystal every time we play the game win || lose
//The random number shown at the start of the game should be between 19 - 120 [Math.floor(Math.random() * 120) + 19;].
// when clicking any crystal it needs to add to our current number index until it either matches or exceeds the target number (if/else statement)
// if it is equal we need to increment wins++ counter or decrement losses-- if it exceeds
$(document).ready(function () {
    var randomResult = 0;
    var wins = 0;
    var losses = 0;

    for (var i = 0; i < 4; i++) {
        var random = Math.floor(Math.random() * 13);
        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "dataRandom": random
        });
        $("#crystals").append(crystal);
    }














});