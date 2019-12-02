var tom1 = new Audio("sounds/tom-1.mp3");
var tom2 = new Audio("sounds/tom-2.mp3");
var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");
var crash = new Audio("sounds/crash.mp3");
var kick = new Audio("sounds/kick-bass.mp3");
var snare = new Audio("sounds/snare.mp3");

var numberOfButtons = document.querySelectorAll(".drum").length;

for (i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll('.drum')[i].addEventListener("click", function() {


    var buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {

      case "w":
        if (tom1.paused) {
          tom1.play();
        } else {
          tom1.currentTime = 0;
        }
        break;


      case "a":
        if (tom2.paused) {
          tom2.play();
        } else {
          tom2.currentTime = 0;
        }
        break;


      case "s":
        if (tom3.paused) {
          tom3.play();
        } else {
          tom3.currentTime = 0;
        }

        break;

      case "d":
        if (tom4.paused) {
          tom4.play();
        } else {
          tom4.currentTime = 0;
        }

        break;

      case "j":
        if (crash.paused) {
          crash.play();
        } else {
          crash.currentTime = 0;
        }

        break;

      case "k":
        if (kick.paused) {
          kick.play();
        } else {
          kick.currentTime = 0;
        }

        break;

      case "l":
        if (snare.paused) {
          snare.play();
        } else {
          snare.currentTime = 0;
        }

        break;
    }
  });
}

document.addEventListener("keypress", function(event) {

  switch (event.key) {

    case "w":
      if (tom1.paused) {
        tom1.play();
       } else {
         tom1.currentTime = 0;
       }
      break;


    case "a":
      if (tom2.paused) {
        tom2.play();
      } else {
        tom2.currentTime = 0;
      }
      break;


    case "s":
      if (tom3.paused) {
        tom3.play();
      } else {
        tom3.currentTime = 0;
      }

      break;

    case "d":
      if (tom4.paused) {
        tom4.play();
      } else {
        tom4.currentTime = 0;
      }

      break;

    case "j":
      if (crash.paused) {
        crash.play();
      } else {
        crash.currentTime = 0;
      }

      break;

    case "k":
      if (kick.paused) {
        kick.play();
      } else {
        kick.currentTime = 0;
      }

      break;

    case "l":
      if (snare.paused) {
        snare.play();
      } else {
        snare.currentTime = 0;
      }

      break;
  }
});
