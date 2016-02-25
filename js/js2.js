function init() {
  var player = "X";
  var winner = null;

  function startGame() {
    var player = "X";
    var winner = null;
    $('#message').text(player + " gets to start");
  }

  $('.grid').on('click', playerClick)

  function playerClick() {
    if(winner !== null) {
      $('#message').text(winner + " already won the game")
    }
    else if(this.innerHTML === ""){
      this.innerHTML = player;
      switchTurn();
    }
    else {
      $('#message').text("That square is already used you numpty.");
    }

  }
  $('.grid').on('click', changeBackground);

  function changeBackground() {
    if (player === "X") {
      this.style.background = "#d99694";
    } else if (player === "O") {
      this.style.background = "#b0e0e6";
    }
  }

  function switchTurn() {
    if(checkForWinner(player)) {
      alert("Congratulations "+ player + " you win!....Now get on with life.")
      winner = player;
    }
    else if (player === "X") {
      player = "O";
      $('#message').text("It's " + player + " turn");

    } else {
      player = "X";
      $('#message').text("It's " + player + " turn");
    }
  };

// checcks the different rows for a winner
  function checkForWinner (move) {
    var result = false;
    if (checkRow(1, 2, 3, move)){
      result = true;
      }
      else if (checkRow(4, 5, 6, move)) {
        result = true;
      } else if (checkRow(7, 8, 9, move)) {
        result = true;
      } else if (checkRow(1, 4, 7, move)) {
        result = true;
      } else if (checkRow(2, 5, 8, move)) {
        result = true;
      } else if (checkRow(3, 6, 9, move)) {
        result = true;
      } else if (checkRow(7, 8, 9, move)) {
        result = true;
      } else if (checkRow(1, 5, 9, move)) {
        result = true;
      } else if (checkRow(3, 5, 7, move)) {
        result = true;
      }
       return result;
   }

  //check each row
  function checkRow (a, b, c, move) {
    var result = false;
    if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
      result = true;
    }
    return result;
  }
  //enables us to check each element
  function getBox(number) {
    return document.getElementById("s" + number).innerHTML;
  }
  //clearing those damn boxes

    $('#clearButton').on('click', function(){
      console.log("board is cleared");
      $('.grid').text("").css('background','white');
      $('#message').text("Click on board to start!");
    });



    startGame();

}

window.addEventListener("load",init,false);
