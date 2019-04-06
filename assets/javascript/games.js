// game 4 crystals
// every crystal (button image [on"click"]) needs to have a random number [Math.floor(Math.random() * 13);] associated with it between 1 - 12.
// random # should be generated for each crystal every time we play the game win || lose
//The random number shown at the start of the game should be between 19 - 120 [Math.floor(Math.random() * 120) + 19;].
// when clicking any crystal it needs to add to our current number index until it either matches or exceeds the target number (if/else statement)
// if it is equal we need to increment wins++ counter or decrement losses-- if it exceeds
$(document).ready(function () { //
    var randomResult = 0;
    var wins = 0;
    var losses = 0;
    var addEmUp = 0;


    var letsDoThis = function () {
        randomResult = Math.floor(Math.random() * 101) + 19;
        $("#challengeNumber").html('Match this #: ' + randomResult)

        // console.log(' match#', randomResult)

        for (var i = 0; i < 4; i++) {
            var random = Math.floor(Math.random() * 12) + 1;
            // console.log('crystals current #', random)
            var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "dataRandom": random
            });
            $("#crystals").append(crystal);
        }
    }
    letsDoThis();

    $(".crystal").on('click', function () {
        // console.log(this)
        var number = parseInt($(this).attr('dataRandom'));
        addEmUp += number;
        // console.log(addEmUp)
        if (addEmUp === randomResult) {
            wins++;
            $("#wins").html(wins);
        } else if (addEmUp > randomResult) {
            losses--;
            $("#losses").html(losses);

        }
    });













});