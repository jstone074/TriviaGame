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


}

function displayQuestions(){
    $("#button1").text(qArray[qArraryIndex].options[0]);
    $("#button2").text(qArray[qArraryIndex].options[1]);
    $("#button3").text(qArray[qArraryIndex].options[2]);
    $("#button4").text(qArray[qArraryIndex].options[3]);
}

displayQuestions();
