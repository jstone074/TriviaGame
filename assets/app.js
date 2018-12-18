var q1 = {
    question:"Choose one",
    answer: "1",
    options: ["1","2","3","4"],
    rightAnswer: 1
};

var q2 = {
    question:"Choose Two",
    answer: "2",
    options: ["1","2","3","4"],
    rightAnswer:2
};

var q3 = {
    question:"Choose Three",
    answer: "3",
    options: ["1","2","3","4"],
    rightAnswer:3
};

var q4 = {
    question:"Choose Four",
    answer: "4",
    options: ["1","2","3","4"],
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

function cycleQuestion (){
    qArraryIndex++;

    if(qArraryIndex < qArray.length ){
        displayQuestions();
        timerObject.reset();
        timerObject.start();
    }else {
        hideQuestionButtons();


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
}

var timerObject = 
{
    initalTime:10,

    reset: function(){
        //reset timer back to initial time
        timerObject.initalTime = 10;
        $("#timerRow").text("00:10");


        //Update display to timer
        $("#timerRow").text(timerObject.initalTime);
    },

    start: function(){
        //starting timer
        setInterval(timerObject.countDown,1000);


    },

    countDown: function(){
        timerObject.initalTime--;
        var convertedTime = timerObject.timeConverter(timerObject.initalTime);
        $("#timerRow").text(convertedTime);
        console.log(convertedTime);
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

    $(".btn").on("click", function(){

        if(qArraryIndex < qArray.length ){

            var answerValue = $(this).attr("data-value");
            console.log(answerValue);
            console.log("Question Answer " + qArray[qArraryIndex].rightAnswer);

            if(answerValue === qArray[qArraryIndex].rightAnswer){
                console.log("Correct Answer");
                timerObject.reset()
                timerObject.start();
                
            }else {

            }

            setTimeout(cycleQuestion,3000);


        }




    })



})
