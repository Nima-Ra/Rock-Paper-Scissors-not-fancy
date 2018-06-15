var turn = 'guest';
var items = ['rock', 'paper', 'scissors'];

var computer = () => {
  let random = Math.floor(Math.random() * 3);
  return items[random];
}

var changeTurn = (who) => {
  if (who == 'guest') {
    var el = document.getElementById("computerTurn");
    el.style.visibility = 'hidden';
  }else{
    var el = document.getElementById("guestTurn");
    el.style.visibility = 'hidden';
  }

  var el = document.getElementById(who + "Turn");
  el.style.visibility = 'visible';
}

var updateScores = (guest, computer) => {
  if (guest != computer){
    if (guest == 'rock') {
      if (computer == 'scissors'){
        var add = 'guest';
      }else if (computer == 'paper') {
        var add = 'computer';
      }
    }
    else if (guest == 'scissors') {
      if (computer == 'paper'){
        var add = 'guest';
      }else if (computer == 'rock') {
        var add = 'computer';
      }
    }else if (guest == 'paper') {
      if (computer == 'rock'){
        var add = 'guest';
      }else if (computer == 'scissors') {
        var add = 'computer';
      }
    }
    var el = document.getElementById(add + "Score");
    el.innerHTML = Number(el.innerHTML) + 1;
  }

  var guestScores = Number(document.getElementById("guestScore").innerHTML);
  var computerScores = Number(document.getElementById("computerScore").innerHTML);

  if (guestScores == 3 && computerScores == 3){
    var guestScores = document.getElementById("guestScore");
    var computerScores = document.getElementById("computerScore");
    alert("Draw!")
    guestScores.innerHTML = 0;
    computerScores.innerHTML = 0;
  } else if (guestScores == 3) {
    var guestScores = document.getElementById("guestScore");
    var computerScores = document.getElementById("computerScore");
    alert("You won");
    guestScores.innerHTML = 0;
    computerScores.innerHTML = 0;
  }else if (computerScores == 3) {
    var guestScores = document.getElementById("guestScore");
    var computerScores = document.getElementById("computerScore");
    alert("I won");
    guestScores.innerHTML = 0;
    computerScores.innerHTML = 0;
  }
}

var choose = (action) => {
  if (turn == 'guest') {
    var choice = document.getElementById("guestAction");
    choice.innerHTML = action;
    turn = 'computer';
    changeTurn('computer');
    var choice = document.getElementById("computerAction");
    choice.innerHTML = 'Waiting ...';
    setTimeout(() => {
      let Com = computer();
      choice.innerHTML = Com;
      updateScores(action, Com)
      changeTurn('guest');
      turn = 'guest';
    }, 1000);
  }
  else {
    alert('It is not your turn');
  }
}
