
$(document).ready(function() {
//variables
var timer = 25;
var correct= 0;
var incorrect = 0;
var intervaldCountdown;
var cancelQuestion1;
var cancelQuestion2;
var cancelQuestion3;
var cancelQuestion4;
var cancelQuestion5;
var cancelQuestion6;
var cancelQuestion7;
//game start


var audiosounds = document.createElement("audio");
      audiosounds.setAttribute("src", "assets/css/2-09-main-theme-underworld-theme.mp3");
      

      // Theme Button
      $("#play1").on("click", function() {
        audiosounds.play();
      });

      $("#pause").on("click", function() {
        audiosounds.pause();
        audiosounds2.pause();
        audiosounds3.pause();
        audiosounds4.pause();
        audiosounds5.pause();
      });

var audiosounds2 = document.createElement("audio");
      audiosounds2.setAttribute("src", "assets/css/04-gerudo-valley.mp3");
      

      // Theme Button
      $("#play2").on("click", function() {
        audiosounds2.play();
      });

     
var audiosounds3 = document.createElement("audio");
      audiosounds3.setAttribute("src", "assets/css/123-mini-game.mp3");
      

      // Theme Button
      $("#play3").on("click", function() {
        audiosounds3.play();
      });

     

var audiosounds4 = document.createElement("audio");
      audiosounds4.setAttribute("src", "assets/css/57-windmill-hut.mp3");

// Theme Button
      $("#play4").on("click", function() {
        audiosounds4.play();
      });


var audiosounds5 = document.createElement("audio");
      audiosounds5.setAttribute("src", "assets/css/35-lost-woods.mp3");
      

      // Theme Button
      $("#play5").on("click", function() {
        audiosounds5.play();
      });

      

var startSound = document.createElement("audio");
startSound.setAttribute("src", "assets/css/OOT_PressStart.mp3");


var selectSound = document.createElement("audio");
selectSound.setAttribute("src","assets/css/OOT_MainMenu_Select.mp3");
$(".answer").on("click", function(){ selectSound.play();
});

//Start button
$("#start").on("click", function(){
  displayQuestion1();
  startSound.play();
});

function offClick(){
  $("#answer1").off()
$("#answer2").off()
$("#answer3").off()
$("#answer4").off()
};

function reset(){
timer=25;
correct=0;
incorrect=0;
$("#rightOrWrong").html("");
offClick();
$("#extraline").html("");
$("#comments").html("");

}

//counting down timer
    function countdown() {
      $("#timer").html("<h3>" + "Your remaining time is "+ timer +" seconds" + "</h3>");
      intervaldCountdown = setInterval(timeDown, 1000);
      timer=25;
    }

    function timeDown() {
      timer--;
      $("#timer").html("<h3>" + "Your remaining time is "+ timer +" seconds" + "</h3>");
      if (timer === 0) {
        stop();

      }
    }

    function emptyQuestionAndAnswer (){
      $("#question").html("");
$("#answer1").html("");
$("#answer2").html("");
$("#answer3").html("");
$("#answer4").html("");
    }

//stoping timer
    function stop() {
      clearInterval(intervaldCountdown);
    }


//object with question & answers
var nextQuestions= {
    question: [
  "Who is the main playable character in the Legend of Zelda series?",
  "She was held captive by Ingo, the owner of Lon Lon Ranch in the game Ocarina of Time.",
  "This man at the windmill hut taught Link what song?",
  "This powerful artifact known for a weapon that seals the darkness throughout many Legend of Zelda games.",
  "Which of these characters do not share a fragment of the Triforce?",
  "To summon the moon to destroy the world, Skull Kid needs how much time?",
  "'He was the leader of a band of thieves who invaded Hyrule in the hopes of establishing dominion over the Sacred Realm. He was known as a demon thief, an evil-magic wielder renowned for his ruthlessness...'Who is this referring to?"  
  ],
    answer: [
    ["Ganondorf","Tingle","Zelda","Link"],
    ["Zelda", "Saria","Ponyta","Epona"],
    ["Song of Healing", "Song of Time", "Song of Storms","Song of Anxiety and Panic"],
    ["Master Sword","Biggoron's Sword","Bow of Light","Deku Stick"],
    ["Ganon", "Midna", "Link","Zelda"],
    ["1 week", "5 days", "24 hours", "3 days"],
    ["Zoro","Robin Hood","Ganondorf","Tingle"]
],


}

function displayQuestion1(){
  //for (var i=0; i<nextQuestions.question.length;i++)
  //{
    reset();
    $("#instruction").html("");
  $("#question").html(nextQuestions.question[0]);
  $("#answer1").html(nextQuestions.answer[0][0]);
$("#answer2").html(nextQuestions.answer[0][1]);
$("#answer3").html(nextQuestions.answer[0][2]);
$("#answer4").html(nextQuestions.answer[0][3]);
$("#images").html("")

$("#answer1").on("click", displayCorrectAnswerWhenIncorrect1);
$("#answer2").on("click", displayCorrectAnswerWhenIncorrect1);
$("#answer3").on("click", displayCorrectAnswerWhenIncorrect1);
$("#answer4").on("click", displayCorrectAnswerWhenCorrect1);

  countdown();
cancelQuestion1=  setTimeout(displayCorrectAnswerWhenIncorrect1, 25000);

      }


function displayCorrectAnswerWhenCorrect1(){
  stop();
offClick();
clearTimeout(cancelQuestion1);
$("#rightOrWrong").html("You got the right answer!");
correct++;
emptyQuestionAndAnswer();
setTimeout(displayQuestion2, 5000);
$("#images").html("<img src='assets/images/legendoflink.gif' width='260px'/>");
$("#comments").html("Yeah. He can't talk without a helper.");
}


function displayCorrectAnswerWhenIncorrect1(){
  stop();
offClick();
clearTimeout(cancelQuestion1);
$("#rightOrWrong").html("Sorry, the right answer is Link.");
incorrect++;
emptyQuestionAndAnswer();
setTimeout(displayQuestion2, 5000);
$("#images").html("<img src='assets/images/legendoflink.gif' width='260px'/>")
$("#comments").html("I'm guessing you're not a fan of the series...")
}


function displayQuestion2(){
timer= 25;
countdown();
$("#rightOrWrong").html("");
$("#question").html(nextQuestions.question[1]);
$("#answer1").html(nextQuestions.answer[1][0]);
$("#answer2").html(nextQuestions.answer[1][1]);
$("#answer3").html(nextQuestions.answer[1][2]);
$("#answer4").html(nextQuestions.answer[1][3]);
$("#images").html("");

$("#answer1").on("click", displayCorrectAnswerWhenIncorrect2);
$("#answer2").on("click", displayCorrectAnswerWhenIncorrect2);
$("#answer3").on("click", displayCorrectAnswerWhenIncorrect2);
$("#answer4").on("click", displayCorrectAnswerWhenCorrect2);
$("#comments").html("");
  
cancelQuestion2=  setTimeout(displayCorrectAnswerWhenIncorrect2, 25000); 


}

function displayCorrectAnswerWhenCorrect2(){
  stop();
offClick();

clearTimeout(cancelQuestion2);
$("#rightOrWrong").html("You got the right answer!");
correct++;
emptyQuestionAndAnswer();
setTimeout(displayQuestion3, 5000);
$("#images").html("<img src='assets/images/Epona.gif' width='400px'/>");
$("#comments").html("Run like the wind!!!!!!");
}

function displayCorrectAnswerWhenIncorrect2(){
  stop();
  offClick();
clearTimeout(cancelQuestion2);
$("#rightOrWrong").html("Sorry, the right answer is Epona.");
incorrect++;
emptyQuestionAndAnswer();
setTimeout(displayQuestion3, 5000);
$("#images").html("<img src='assets/images/Epona.gif' width='400px'/>");
$("#comments").html("You didn't choose the pokemon right?")
}


function displayQuestion3(){
timer= 25;
countdown();
$("#rightOrWrong").html("");
$("#question").html(nextQuestions.question[2]);
$("#answer1").html(nextQuestions.answer[2][0]);
$("#answer2").html(nextQuestions.answer[2][1]);
$("#answer3").html(nextQuestions.answer[2][2]);
$("#answer4").html(nextQuestions.answer[2][3]);
$("#images").html("");

$("#answer1").on("click", displayCorrectAnswerWhenIncorrect3);
$("#answer2").on("click", displayCorrectAnswerWhenIncorrect3);
$("#answer3").on("click", displayCorrectAnswerWhenCorrect3);
$("#answer4").on("click", displayCorrectAnswerWhenIncorrect3);
$("#comments").html("");

  
cancelQuestion3=  setTimeout(displayCorrectAnswerWhenIncorrect3, 25000); 


}





function displayCorrectAnswerWhenCorrect3(){
  stop();
offClick();

clearTimeout(cancelQuestion3);
$("#rightOrWrong").html("You got the right answer!");
correct++;
emptyQuestionAndAnswer();
setTimeout(displayQuestion4, 5000);
$("#images").html("<img src='assets/images/Guruguru.gif' width='310px'/>");
$("#comments").html("Just play your instrument all day long...")

}

function displayCorrectAnswerWhenIncorrect3(){
  stop();
  offClick();
clearTimeout(cancelQuestion3);
$("#rightOrWrong").html("Sorry, the right answer is Song of Storms");
incorrect++;
emptyQuestionAndAnswer();
setTimeout(displayQuestion4, 5000);
$("#images").html("<img src='assets/images/Guruguru.gif' width='310px'/>");
$("#comments").html("great job...with getting the question incorrect");
}


function displayQuestion4(){

timer= 25;
countdown();
$("#rightOrWrong").html("");
$("#question").html(nextQuestions.question[3]);
$("#answer1").html(nextQuestions.answer[3][0]);
$("#answer2").html(nextQuestions.answer[3][1]);
$("#answer3").html(nextQuestions.answer[3][2]);
$("#answer4").html(nextQuestions.answer[3][3]);
$("#images").html("");

$("#answer1").on("click", displayCorrectAnswerWhenCorrect4);
$("#answer2").on("click", displayCorrectAnswerWhenIncorrect4);
$("#answer3").on("click", displayCorrectAnswerWhenIncorrect4);
$("#answer4").on("click", displayCorrectAnswerWhenIncorrect4);
$("#comments").html("");

  
cancelQuestion4=  setTimeout(displayCorrectAnswerWhenIncorrect4, 25000); 

}

function displayCorrectAnswerWhenCorrect4(){
  stop();
offClick();

clearTimeout(cancelQuestion4);
$("#rightOrWrong").html("You got the right answer!");
correct++;
emptyQuestionAndAnswer();
setTimeout(displayQuestion5, 5000);
$("#images").html("<img src='assets/images/mastersword.gif' width='400px'/>");
$("#comments").html("Feel the power of the almighty sword!")
}

function displayCorrectAnswerWhenIncorrect4(){
  stop();
  offClick();
clearTimeout(cancelQuestion4);
$("#rightOrWrong").html("Sorry, the right answer is Master Sword.");
incorrect++;
emptyQuestionAndAnswer();
setTimeout(displayQuestion5, 5000);
$("#images").html("<img src='assets/images/mastersword.gif' width='400px'/>");
$("#comments").html("I guess you aren't the chosen hero.")
}


function displayQuestion5(){
timer= 25;
countdown();
$("#rightOrWrong").html("");
$("#question").html(nextQuestions.question[4]);
$("#answer1").html(nextQuestions.answer[4][0]);
$("#answer2").html(nextQuestions.answer[4][1]);
$("#answer3").html(nextQuestions.answer[4][2]);
$("#answer4").html(nextQuestions.answer[4][3]);
$("#images").html("");

$("#answer1").on("click", displayCorrectAnswerWhenIncorrect5);
$("#answer2").on("click", displayCorrectAnswerWhenCorrect5);
$("#answer3").on("click", displayCorrectAnswerWhenIncorrect5);
$("#answer4").on("click", displayCorrectAnswerWhenIncorrect5);
$("#comments").html("");

  
cancelQuestion5=  setTimeout(displayCorrectAnswerWhenIncorrect5, 25000); 

}

function displayCorrectAnswerWhenCorrect5(){
  stop()
offClick();

clearTimeout(cancelQuestion5);
$("#rightOrWrong").html("You got the right answer!");
correct++;
emptyQuestionAndAnswer();
setTimeout(displayQuestion6, 5000);
$("#images").html("<img src='assets/images/impmidna.gif' width='250px'/>");
$("#comments").html("So mischievous!")
}

function displayCorrectAnswerWhenIncorrect5(){
  stop();
  offClick();
clearTimeout(cancelQuestion5);
$("#rightOrWrong").html("Sorry, the right answer is Midna");
incorrect++;
emptyQuestionAndAnswer();
setTimeout(displayQuestion6, 5000);
$("#images").html("<img src='assets/images/impmidna.gif' width='250px'/>");
$("#comments").html("The imp-like twilight princess from the shadow realm.")
}

function displayQuestion6(){
timer= 25;
countdown();
$("#rightOrWrong").html("");
$("#question").html(nextQuestions.question[5]);
$("#answer1").html(nextQuestions.answer[5][0]);
$("#answer2").html(nextQuestions.answer[5][1]);
$("#answer3").html(nextQuestions.answer[5][2]);
$("#answer4").html(nextQuestions.answer[5][3]);
$("#images").html("");

$("#answer1").on("click", displayCorrectAnswerWhenIncorrect6);
$("#answer2").on("click", displayCorrectAnswerWhenIncorrect6);
$("#answer3").on("click", displayCorrectAnswerWhenIncorrect6);
$("#answer4").on("click", displayCorrectAnswerWhenCorrect6);
$("#comments").html("");

  
cancelQuestion6=  setTimeout(displayCorrectAnswerWhenIncorrect6, 25000); 

}

function displayCorrectAnswerWhenCorrect6(){
  stop();
offClick();

clearTimeout(cancelQuestion6);
$("#rightOrWrong").html("You got the right answer!");
correct++;
emptyQuestionAndAnswer();
setTimeout(displayQuestion7, 5000);
$("#images").html("<img src='assets/images/skullkid.gif' width='400px'/>");
$("#comments").html("Summon the angry moon to destroy everything!")

}

function displayCorrectAnswerWhenIncorrect6(){
  stop();
offClick();
clearTimeout(cancelQuestion6);
$("#rightOrWrong").html("Sorry, the right answer is 3 days");
incorrect++;
emptyQuestionAndAnswer();
setTimeout(displayQuestion7, 5000);
$("#images").html("<img src='assets/images/skullkid.gif' width='400px'/>");
$("#comments").html("Luckily you can manipulate time in the game.")
}


function displayQuestion7(){
timer= 25;
countdown();
$("#rightOrWrong").html("");
$("#question").html(nextQuestions.question[6]);
$("#answer1").html(nextQuestions.answer[6][0]);
$("#answer2").html(nextQuestions.answer[6][1]);
$("#answer3").html(nextQuestions.answer[6][2]);
$("#answer4").html(nextQuestions.answer[6][3]);
$("#images").html("");

$("#answer1").on("click", displayCorrectAnswerWhenIncorrect7);
$("#answer2").on("click", displayCorrectAnswerWhenIncorrect7);
$("#answer3").on("click", displayCorrectAnswerWhenCorrect7);
$("#answer4").on("click", displayCorrectAnswerWhenIncorrect7);
$("#comments").html("");

  
cancelQuestion7=  setTimeout(displayCorrectAnswerWhenIncorrect7, 25000); 

}

function displayCorrectAnswerWhenCorrect7(){
  stop();
offClick();

clearTimeout(cancelQuestion7);
$("#rightOrWrong").html("You got the right answer!");
correct++;
emptyQuestionAndAnswer();
setTimeout(endScore, 5000);
$("#images").html("<img src='assets/images/ganondorf.gif' width='400px'/>");
$("#comments").html("Evil pig")

}

function displayCorrectAnswerWhenIncorrect7(){
  stop();
  offClick();
clearTimeout(cancelQuestion7);
$("#rightOrWrong").html("Sorry, the right answer is Ganondorf");
incorrect++;
emptyQuestionAndAnswer();
setTimeout(endScore, 5000);
$("#images").html("<img src='assets/images/ganondorf.gif' width='400px'/>");
$("#comments").html("One male every 100 years within the Gerudo tribe.");
}


function endScore(){
stop();
$("#timer").html("");
$("#extraline").html("Correct answered: " + correct);
$("#rightOrWrong").html("Incorrect answered: " + incorrect);
$("#question").html("");
  $("#answer1").html("");
$("#answer2").html("");
$("#answer3").html("");
$("#answer4").html("Click Here to Try Again");
$("#answer4").on("click", displayQuestion1);
$("#images").html("<img src='assets/images/Tingle.gif' width='400px'/>");
$("#comments").html("Congrats on finishing!")

var audio = document.createElement("audio");
      audio.setAttribute("src", "assets/css/139-item-catch.mp3");
      audio.play();

}

})
    