$(document).ready(function () { //
    var randomResult = 0;
    var wins = 0;
    var losses = 0;
    var addEmUp = 0;


    var letsDoThis = function () {
        $(".crystals").empty();

        var crystalImages = [
            "./assets/images/crystal1.png",
            "./assets/images/crystal2.png",
            "./assets/images/crystal3.png",
            "./assets/images/crystal4.png",
        ];

        randomResult = Math.floor(Math.random() * 101) + 19;
        $("#challengeNumber").html('Match this #: ' + randomResult)
        var random = Math.floor(Math.random() * 12) + 1;


        // console.log(' match#', randomResult)

        for (var i = 0; i < 4; i++) {
            var random = Math.floor(Math.random() * 12) + 1;
            console.log('crystals current #', random)
            var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "dataRandom": random
            });
            crystal.css({
                "background-image": "url(" + crystalImages[i] + ")",
                "background-size": "cover"
            })
            $("#crystals").append(crystal);
        }
        $("#runningTotal").html("Your total score is: " + addEmUp);
    }

    letsDoThis();

    $(document).on('click', ".crystal", function () {
        // console.log(this)
        var number = parseInt($(this).attr('dataRandom'));
        addEmUp += number;
        // console.log(addEmUp)
        $("#runningTotal").html("Your total score is: " + addEmUp);

        if (addEmUp === randomResult) {
            wins++;
            $("#wins").html("Wins: " + wins);
            addEmUp = 0;

            letsDoThis();


        } else if (addEmUp > randomResult) {
            losses++;
            $("#losses").html(" Losses: " + losses);
            addEmUp = 0;

            letsDoThis();

        }
    });

    // game 4 crystals
    // every crystal (button image [on"click"]) needs to have a random number [Math.floor(Math.random() * 13);] associated with it between 1 - 12.
    // random # should be generated for each crystal every time we play the game win || lose
    //The random number shown at the start of the game should be between 19 - 120 [Math.floor(Math.random() * 120) + 19;].
    // when clicking any crystal it needs to add to our current number index until it either matches or exceeds the target number (if/else statement)
    // if it is equal we need to increment wins++ counter or decrement losses-- if it exceeds

});