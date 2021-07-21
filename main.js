function navigate(){
    var player1_name = document.getElementById("user1").value;
    var player2_name = document.getElementById("user2").value;
    localStorage.setItem("Player1_Name", player1_name);
    localStorage.setItem("Player2_Name", player2_name);
    window.location = "quiz.html";
}

player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + ": ";
document.getElementById("player2_name").innerHTML = player2_name + ": ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "Question turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name;

function send()
{
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actualAnswer = parseInt(number1) * parseInt(number2);
 
    question_number = "<h4 id='number_display'> "+number1+"X"+number2+" = "+"</h4>";
    input_box = "<br>Answer : <input type='number' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check()
{
answer = document.getElementById("input_check_box").value;

if (answer == actualAnswer)
{
    if (answer_turn == "player1")
    {
        player1_score = player1_score + 1;
        document.getElementById("player1_score").innerHTML = player1_score;
        console.log("Player 1 score = " + player1_score);
    }
    else
    {
        player2_score = player2_score + 1;
        document.getElementById("player2_score").innerHTML = player2_score;
        console.log("Player 2 score = " + player2_score);
    }
}
    if (question_turn == "player1")
    {
        question_turn =  "player2";
        document.getElementById("player_question").innerHTML = "Question turn - " + player2_name;
    }
    else
    {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question turn - " + player1_name;
    }
    if (answer_turn == "player1")
    {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name;
    }
    else
    {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer turn - " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}