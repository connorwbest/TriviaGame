var correct = 0;
var wrong = 0;
var noAnswer = 0;
var count = 0;
var timer;
var guess = [];
var answer = [0, 2, 0, 1, 3, 3, 1];


var westWorldQuestion = [{
    question: "Where does the line *These violent delights have violent ends* come from?",
    choices: ["Romeo and Juliet", "Hamlet", "Macbeth", "The Tempest"],
    correctAnswer: 0
},
{
    question: "According to the show, about how much do Westworld customers pay per day?",
    choices: ["10k", "100k", "40k", "3k"],
    correctAnswer: 2
},
{
    question: "Which actor was told their characters big twist after only the first episode?",
    choices: ["Jeffrey Wright(Bernard)", "Anthony Hopkins(Robert Ford)", "Ed Harris(The Man in Black)", "Evan Rachel Wood(Dolores)"],
    correctAnswer: 0
},
{
    question: "From which Disney princess did the creators derive influence from for Dolores?",
    choices: ["Sleeping Beauty", "Alice(in Wonderland)", "Cinderella", "Snow White"],
    correctAnswer: 1
},
{
    question: "What is the name of the town that guests arrive in when first entering Westworld?",
    choices: ["Tombstone", "Delos", "Dodge City", "Sweetwater"],
    correctAnswer: 3
},
{
    question: "Which character appears in every episode?",
    choices: ["Bernard", "Dolores", "William", "Noone"],
    correctAnswer: 3
},
{
    question: "When does Westworld take place?",
    choices: ["2030", "2042", "2100", "2070"],
    correctAnswer: 1
},
    /*{
        question:
    }*/
]

var gameSong = function(){
    var theme = $('#audio')[0];
    theme.play();
}

var start = function () {
    gameSong();
    $('#start').fadeOut();
    
    startQuiz();
}

function startQuiz() {
    timer = setInterval(nextQ, 30000);
    
}

function displayQ() {
    quiz = $('<div>');

    qNumber = $('<h1>').text(westWorldQuestion[count].question);

    $(quiz).append(qNumber);

    var choicesArr = westWorldQuestion[count].choices;

    for (let i = 0; i < choicesArr.length; i++) {
        var button = $('<button>');
        button.text(choicesArr[i]);
        button.attr('data-id', i);
        $(quiz).append(button);
    }

    $('#gameSection').html(quiz);


}

function nextQ() {
    count++;

    displayQ();
}

$('#start').on('click', function () {
    
    start();


    displayQ();

    $('#gameSection').on('click', 'button', function guess() {
        userGuess = $(this).data("id");
        westWorldQuestion[count].correctAnswer;
        if (userGuess == westWorldQuestion[count].correctAnswer) {
            alert("Correct!");
            correct++;
            clearInterval(timer);
            nextQ();
            setInterval(nextQ, 30000);
            console.log(correct);
            console.log(count);
        }
        else if (userGuess != westWorldQuestion[count].correctAnswer) {
            alert("Wrong!");
            wrong++;
            clearInterval(timer);
            nextQ();
            setInterval(nextQ, 30000);
            console.log(wrong);
            console.log(count);
        }

    })











})