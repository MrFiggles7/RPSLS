$(document).ready(
    function () {
        //event handlers

        var score = 0;
        var theirScore = 0;
        $('.rock, .paper, .scissors, .lizard, .spock').click(function () {
                /*find the class name of the image clicked*/
                var pick = (event.target.className);
                /*generate a random number between 1 and 5*/
                var bot = Math.floor(Math.random() * 5) + 1;
                var win = false;

                    /*correspond numbers with each class name*/
                switch (pick) {
                    case "rock":
                        pick = 1;
                        break;
                    case "paper":
                        pick = 2;
                        break;
                    case "scissors":
                        pick = 3;
                        break;
                    case "lizard":
                        pick = 4;
                        break;
                    case "spock":
                        pick = 5;
                        break;
                }
            /*User input, setting the image in the playfield to the option picked by user*/
            if(pick == 1){
                    $('.yourPick').html('&#129304');
                }
            else if(pick == 2){
                $('.yourPick').html('&#128195');
            }
            else if(pick == 3){
                $('.yourPick').html('&#9986');
            }
            else if(pick == 4){
                $('.yourPick').html('&#129422');
            }
            else if(pick == 5){
                $('.yourPick').html('&#128406');
            }
            /*Bot input, setting the image in the playfield to the option picked by the bot*/
            if(bot == 1){
                $('.theirPick').html('&#129304');
            }
            else if(bot == 2){
                $('.theirPick').html('&#128195');
            }
            else if(bot == 3){
                $('.theirPick').html('&#9986');
            }
            else if(bot == 4){
                $('.theirPick').html('&#129422');
            }
            else if(bot == 5){
                $('.theirPick').html('&#128406');
            }
            /*Logic, setting the rules of the game*/
            if(pick == 1 && (bot == 4 || bot == 3)){
                win = true;
            }
            else if(pick == 2 && (bot == 1 || bot == 5)){
                win = true;
            }
            else if(pick == 3 && (bot == 4 || bot == 2)){
                win = true;
            }
            else if(pick == 4 && (bot == 2 || bot == 5)){
                win = true;
            }
            else if(pick == 5 && (bot == 1 || bot == 3)){
                win = true;
            }
            else{
                win = false;
                theirScore++;
            }
            /*updating score*/
            if(win == true){
                win = false;
                score++;
                $('.scoreText').html(score);
            }
            /*Setting win function: show the win modal and update the score*/
            if(score >= 2){
                $('.winmodal').toggle();
                score = 0;
                theirScore = 0;
                $('.scoreText').html(score);
            }
            /*Setting lose function, show the lose modal and update the score*/
            if(theirScore >= 2){
                $('.losemodal').toggle();
                theirScore = 0;
                score = 0;
            }

        });
        /*Functions to hide the modal when screen is clicked*/
        $('.winmodal').click(function () {
            $('.winmodal').toggle();
        });

        $('.losemodal').click(function () {
            $('.losemodal').toggle();
        });
        /*Reset the score on button click*/
        $('.reset').click(function () {
            score = 0;
            $('.scoreText').html(score);
        })
    }
);