var q1 = {
    question:"What is the first Pokemon in the Pokedex",
    answer: "Bulbasaur is the first Pokemon listed in the Pokedex",
    options: ["Bulbasaur","Charmander","Squirtle","Pikachu"],
    gif: "assets/images/bulbasaur.gif",
    rightAnswer: 1
};

var q2 = {
    question:"In Episode one, what is the Pokemon that Ash spots in the sky",
    answer: "Ho-Oh appeared at the end of the episode however it was not known until later what it was",
    options: ["Charizard","Ho-Oh","Zapdos","Pidgeot"],
    gif: "assets/images/hooh.gif",
    rightAnswer:2
};

var q3 = {
    question:"How does a Pikachu evolve?",
    answer: "Pikachu evolves into Raichu with a Thunder Stone",
    options: ["Level 18","Whenever it wants","With a Thunder Stone","There isn't an evolution"],
    gif: "assets/images/pikachu.gif",
    rightAnswer:3
};

var q4 = {
    question: "What is the name of the first Pokemon ever created",
    answer: "Rhydon was the first Pokemon created",
    options: ["Bulbasaur","Squirtle","Pikachu","Rhydon"],
    gif: "assets/images/rhydon.gif",
    rightAnswer:4
};

// var q5 = {
//     question:"",
//     answer: "",
//     options: [""],
//     rightAnswer:1
// };

// var q6 = {
//     question:"",
//     answer: "",
//     options: [""],
//     rightAnswer:1
// };

var qArray = [q1,q2,q3,q4];
var qArraryIndex =0;
var correctAnswer = 0;
var wrongAnswer = 0;



function cycleQuestion (){
    qArraryIndex++;

    if(qArraryIndex < qArray.length ){
        displayQuestions();
        $("#wrongAnswerGif").hide();
        $("#correctAnswerdisplay").hide();
        $("#correctdisplay").hide();
        $("#correctAnswerGif").hide();
        $("#correctAnswerGif").attr("src", "");
        $("#timerRow").show();
        
        
        timerObject.stop();
        timerObject.reset();
        timerObject.start();

    }else {
        hideQuestionButtons();
        $("#wrongAnswerGif").hide();
        $("#correctAnswerGif").hide();
        $("#correctAnswerdisplay").hide();
        $("#correctAnswerGif").attr("src", "");    
        $("#resetGame").show();
        $("#results").show();
        $("#results").text("You guessed " + correctAnswer + " correctly! Press Start Over to play again!");


        $("#resetGame").on("click",function(){
            $("#results").hide();
            $("#resetGame").hide();
            resetGame();
            displayQuestions();
            $("#timerRow").show();
            timerObject.stop();
            timerObject.reset();
            timerObject.start();
        })


    }
}

function displayQuestions(){
    $("#button1").show();
    $("#button2").show();
    $("#button3").show();
    $("#button4").show();
    $("#question").show();
    $("#question").text(qArray[qArraryIndex].question);
    $("#button1").text(qArray[qArraryIndex].options[0]);
    $("#button2").text(qArray[qArraryIndex].options[1]);
    $("#button3").text(qArray[qArraryIndex].options[2]);
    $("#button4").text(qArray[qArraryIndex].options[3]);
}

function hideQuestionButtons(){
    $("#question").hide();
    $("#button1").hide();
    $("#button2").hide();
    $("#button3").hide();
    $("#button4").hide();
    $("#resetGame").hide();
    $("#wrongAnswerGif").hide();
    $("#correctAnswerdisplay").hide();
    $("#correctdisplay").hide();
    $("#correctAnswerGif").hide();
}


function resetGame (){

    correctAnswer = 0;
    wrongAnswer = 0;
    qArraryIndex = 0;

}

var timerObject = 
{
    initalTime:20,

    reset: function(){
        //reset timer back to initial time
        timerObject.initalTime = 20;
        $("#timerRow").text("00:20");


        //Update display to timer
        // $("#timerRow").text(timerObject.initalTime);
    },

    start: function(){
        //starting timer
        startTimer = setInterval(timerObject.countDown,1000);


    },

    stop: function(){
        clearInterval(startTimer);
    },

    countDown: function(){

        timerObject.initalTime--;
        var convertedTime = timerObject.timeConverter(timerObject.initalTime);
        $("#timerRow").text(convertedTime);
        console.log(convertedTime);

        if (timerObject.initalTime === 0){

            wrongAnswer++;
            console.log(wrongAnswer);
            console.log("Times Up");
            console.log(qArray[qArraryIndex].answer);
            hideQuestionButtons();
            $("#timerRow").hide();
            $("#correctAnswerdisplay").show();
            $("#wrongAnswerGif").show();
            $("#correctAnswerdisplay").text(qArray[qArraryIndex].answer);
            

           
            setTimeout(cycleQuestion,3000);
        }
    },

    timeConverter: function(t)
    {   var minutes = Math.floor(t/60);
        var seconds = t - (minutes * 60);
        if (seconds < 10){
            seconds = "0" + seconds;
        }
        if (minutes === 0){
            minutes = "00";
        } else if (minutes < 10){
            minutes = "0" + minutes;
        }
        return minutes + ":" + seconds;
    }

}

$(document).ready(function(){

    hideQuestionButtons();
    $("#timerRow").hide();
    // timerObject.start();

    $("#startGame").on("click",function(){

        displayQuestions();
        $("#startGame").hide();
        $("#timerRow").show();
        timerObject.reset();
        timerObject.start();



    });

//    $("data-value").attr("onclick", function(){
    $(".answer").on("click", function(){

        if(qArraryIndex < qArray.length ){

            var answerValue = parseInt($(this).attr("data-value"));
            console.log(answerValue);
            // console.log(answerValue);
            console.log("Question Answer " + qArray[qArraryIndex].rightAnswer);
            

            if(answerValue === qArray[qArraryIndex].rightAnswer){
                
                correctAnswer++;
                console.log(correctAnswer);
                hideQuestionButtons();
                $("#timerRow").hide();
                console.log("You guessed "+ answerValue);
                console.log("Correct Answer is "+ qArray[qArraryIndex].rightAnswer);
                $("#correctdisplay").show();
                $("#correctAnswerGif").show();
                $("#correctdisplay").text("Thats Correct! " + qArray[qArraryIndex].answer);
                $("#correctAnswerGif").attr("src", qArray[qArraryIndex].gif);
                console.log(qArray[qArraryIndex].gif);

                timerObject.stop();
                timerObject.reset();

            }else {

                wrongAnswer++;
                console.log(wrongAnswer);
                hideQuestionButtons();
                $("#timerRow").hide();
                $("#correctAnswerdisplay").show();
                $("#wrongAnswerGif").show();
                $("#correctAnswerdisplay").text(qArray[qArraryIndex].answer);
                console.log("You guessed the wrong answer")
                console.log(qArray[qArraryIndex].rightAnswer);
                
                timerObject.stop();
                timerObject.reset();

            }

            setTimeout(cycleQuestion,4000);


        }

        timerObject.stop();




    })



})
