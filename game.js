var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var level = 0;

var gameOver=false;

var currentLevel=0;

$(document).ready(function(){
  $("body").keydown(()=>{
    console.log("any Key Pressed");
    nextSequence();
  })
})



function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour=buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  $("#level-title").text(function(){
    return gameOver == true?'Press A Key to Start':'Level '+ level;
  });
  level++;

  // $("#level-title").text("Galeech baliye");
}


$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  // console.log(userClickedPattern.length + "and" + gamePattern.length);
  // checkAnswer(userClickedPattern.length-1);
  checkAnswer(userChosenColour);
});


function playSound(name){
  var audio = new Audio("sounds/" + name +".mp3");
  audio.play();
}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");

    setTimeout(function () {
      $("#"+currentColor).removeClass("pressed");
    },100)
}

console.log("Hello welcome")

function checkAnswer(colorClicked){

  //below snippet was checking last block of array only to last block of gamePatterns array
  // userclicked color is compared to gamePattern stack, gamePatter most start with Zero every time
  // so 0,1,2,3 example 
  if(gamePattern[currentLevel]==colorClicked){

    console.log(currentLevel + "--------" + gamePattern[currentLevel]+ " "+colorClicked);

    console.log("USER CLICKED RIGHT");
    
    if(currentLevel==gamePattern.length-1 && gamePattern[currentLevel]==colorClicked){
      currentLevel=0;
      console.log("currentlevel and gamepatter is equal also last color is also corectly clicked calling nextSequence()");
      nextSequence();
    }
    else{
    currentLevel++;
    console.log(currentLevel +"Current Level Incremented Waiting for next Button to be clicked");
    }
    // nextSequence();
  }else{
    console.log("FAILURE");
  }

  // currentLevel=0;
  // if()

}




