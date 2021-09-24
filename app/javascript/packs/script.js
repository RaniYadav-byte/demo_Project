

board = function() {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach((box, i) => {
  let cell = '';
  if (i < 3) {
    cell += 'border-bottom: 3px solid var(--text);';
  }
  if (i % 3 === 0) {
    cell += 'border-right: 3px solid var(--text);';
  }
  if (i % 3 === 2) {
    cell+= 'border-left: 3px solid var(--text);';
  }
  if (i > 5) {
    cell += 'border-top: 3px solid var(--text);';
  }
  box.style = cell;
  box.addEventListener('click', boxClicked);
  });
};  
 
const spaces = [];
  let tick_circle = "o";
  let tick_x = "x";
  let currentPlayer = tick_circle;


myFunction = function() {
  let user = prompt("What's your player name x / o");
    if (user == 'x')
    {
      currentPlayer = tick_x;
    }
    else if (user == 'o')
    {
      currentPlayer = tick_circle;  
    }
    else if (user != 'o' && user != 'x')
    {
      msgfunction();
    }
   currentPlayer;
   replay();
  }

  msgfunction = function (){
    window.alert("please enter a valid Player") 
    myFunction();
    }

const boxClicked = (e) => {
  const text = document.querySelector('#head');
  const id = e.target.id;
  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;

    if (playerWon()) {
      text.innerText = `${currentPlayer} has won the game`;
      replay();
      return;
    }

    if (playerDraw()) {
      return;
    }
    currentPlayer = currentPlayer === tick_circle ? tick_x : tick_circle;
  }
};

const playerWon = () => {
  const status = document.querySelector('#status');
  if (spaces[0] === currentPlayer) {
    if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
      status.innerText = `${currentPlayer} wins up to top`;
      return true;
    }
    if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
      status.innerText = `${currentPlayer} wins on the left`;
      return true;
    }
    if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
      status.innerText = `${currentPlayer} wins diagonally`;
      return true;
    }
  }
  if (spaces[8] === currentPlayer) {
    if (spaces[2] === currentPlayer && spaces[5] === currentPlayer) {
      status.innerText = `${currentPlayer} wins on the right`;
      return true;
    }
    if (spaces[6] === currentPlayer && spaces[7] === currentPlayer) {
      status.innerText = `${currentPlayer} wins on the bottom`;
      return true;
    }
  }
  if (spaces[4] === currentPlayer) {
    if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
      status.innerText = `${currentPlayer} wins vertically on middle`;
      return true;
    }
    if (spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
      status.innerText = `${currentPlayer} wins horizontally on the middle`;
      return true;
    }
    if (spaces[2] === currentPlayer && spaces[6] === currentPlayer) {
      status.innerText = `${currentPlayer} wins diagonally`;
      return true;
    }
  }
};

const playerDraw = () => {
  const text = document.querySelector('#head');
  let draw = 0;
  spaces.forEach((space, i) => {
    if (spaces[i] !== null) draw++;
    
  });

  if (draw === 6) {
    (spaces[3] ==null && spaces[5] ==null)
    text.innerText = `Draw`;
    replay();
  }
}


replay = function() {
  const boxes = document.querySelectorAll('.box');
  const text = document.querySelector('#head');
  setTimeout(() => {
    spaces.forEach((space, i) => {
      spaces[i] = null;
    });
    boxes.forEach((box) => {
      box.innerText = '';
    });
    text.innerText = `Play`;
    status.innerText = ``;
  }, 1000);
  board();
};
