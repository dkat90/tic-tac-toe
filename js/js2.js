function init() {
  var player = "X";
  var winner = null;
  var grid = document.getElementsByClassName('grid');

  //Finding out which are the players
  function startGame() {
    var player = "X";
    var winner = null;
    if(Math.random() < 0.5) {
      player = "O"//selecting random player when page refreshed
    }
    setMessage(player + " gets to start");
  }

  function setMessage(msg) {
    document.getElementById("message").innerHTML = msg;
  }

  //Enables us to click each grid and player selection
  for (i=0; i<grid.length; i++) {
    grid[i].addEventListener("click", playerClick, false);
    console.log(grid[i])
  }
  function playerClick() {
    if(winner !== null) {
      setMessage(winner + " already won the game")
    }
    else if(this.innerHTML === ""){
      this.innerHTML = player;
      switchTurn();
    }
    else {
      setMessage("That square is already used you numpty.");
    }

  }
  //changing colors
  for(i = 0; i < grid.length; i++) {
    grid[i].addEventListener('click', changeBackground,false);
  }

  function changeBackground() {
    if (player === "X") {
      this.style.background = "blue";
    } else if (player === "O") {
      this.style.background = "red";
    }
  }


  //switch turn for player and ending game
  function switchTurn() {
    if(checkForWinner(player)) {
      setMessage("Congratulations "+ player + " you win!....Now get on with life.")
      winner = player;
    }
    else if (player === "X") {
      player = "O";
      setMessage("It's " + player + " turn");

    } else {
      player = "X";
      setMessage("It's " + player + " turn");
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
      } else {
        setMessage("No one wins..HAH!");
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

    var button = document.getElementById('clearButton');
    function clearBox () {
      console.log("clearBox");
      for (i=0; i<grid.length; i++) {
        grid[i].innerHTML = "";
        grid[i].style.background="white";
      }

      player = "X";
      winner = null;
      setMessage("New Game noobs!");

    }
    button.addEventListener('click', clearBox, false);



    startGame();

}

window.addEventListener("load",init,false);
