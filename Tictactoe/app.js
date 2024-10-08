let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset-btn");
let newbtn = document.querySelector(".new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let visible = document.querySelector(".visible");
let turn = document.querySelector(".turn");
let scoreBoard = document.querySelector(".scoreBoard");
let scorex = document.querySelector("#scoreX");
let scoreo = document.querySelector("#scoreO");
let scoreDraw = document.querySelector("#draws");
let show = document.querySelector(".show");
let show1 = document.querySelector(".show1");
let popup = document.querySelector(".pop");
let confirmBtn = document.querySelector(".confirm-reset");
let cancelBtn = document.querySelector(".cancelreset");
let submitBtn = document.querySelector(".submit");
let playerO = 0;
let playerX = 0;
let Draw = 0;
let turnO = true;
let count = 0;
visible.classList.remove("visible");

let name = () => {
  console.log(`${names} your names are`);
};

let submit = () => {
  let names1 = document.querySelector(".player1").value;
  console.log("button clicked");
  if (names1) {
    console.log(`${names1}`);
  } else {
    console.log("palyer X");
  }
  let names2 = document.querySelector(".player2").value;
  if (names2) {
    console.log(`${names2}`);
  } else {
    console.log("palyer O");
  }
};

let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let resetBtn = () => {
  playerO = 0;
  playerX = 0;
  Draw = 0;
  count = 0;
  msgcontainer.classList.add("hide");
  displayTurn();
  enabelBoxes();
};

const confirmReset = () => {
  resetBtn();
  colsePopup();
};

const cancelReset = () => {
  colsePopup();
};

let colsePopup = () => {
  popup.classList.add("opac");
  visible.classList.remove("visible");
  show.classList.add("show");
  show1.classList.add("show1");
  msgcontainer.classList.add("hide");
};
let openPopup = () => {
  popup.classList.remove("opac");
  visible.classList.add("visible");
  show.classList.add("show");
  show1.classList.add("show1");
  msgcontainer.classList.add("hide");
};

let newBtn = () => {
  count = 0;
  turnO = true;
  enabelBoxes();
  msgcontainer.classList.add("hide");
  visible.classList.remove("visible");
  show.classList.add("show");
  show1.classList.add("show1");
  displayTurn();
};

let disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
let enabelBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
  }
};

const displayTurn = () => {
  let names1 = document.querySelector(".player1").value;
  let names2 = document.querySelector(".player2").value;
  turn.innerHTML = turnO ? `Player O turn` : `Player X turn`;
};
boxes.forEach((box) => {
  displayTurn();
  box.addEventListener("click", () => {
    if (turnO === true) {
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }
    displayTurn();
    box.disabled = true;
    count++;
    let iswinner = checkWinner();
    if (count == 9 && !iswinner) {
      Draw++;
      scoreDraw.innerHTML = Draw;
      draw();
    }
  });
});

const checkWinner = () => {
  for (pattern of winPatterns) {
    let posval1 = boxes[pattern[0]].innerHTML;
    let posval2 = boxes[pattern[1]].innerHTML;
    let posval3 = boxes[pattern[2]].innerHTML;

    if (posval1 != "" && posval2 != "" && posval3 != "") {
      if (posval1 === posval2 && posval2 === posval3) {
        showWinner(posval1);
        return true;
      }
    }
  }
  return false;
};

const showWinner = (winner) => {
  if (winner === "O") {
    playerO++;
    scoreo.innerHTML = playerO;
  } else if (winner === "X") {
    playerX++;
    scorex.innerHTML = playerX;
  }
  msg.innerText = `congratulations  the winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  visible.classList.add("visible");
  show.classList.remove("show");
  show1.classList.remove("show1");
  disableBoxes();
  makeItRain();
};
const draw = () => {
  msg.innerText = `match was draw `;
  msgcontainer.classList.remove("hide");
  visible.classList.add("visible");
  show.classList.remove("show");
  show1.classList.remove("show1");
  disableBoxes();
};

resetbtn.addEventListener("click", openPopup);
newbtn.addEventListener("click", newBtn);
confirmBtn.addEventListener("click", confirmReset);
cancelBtn.addEventListener("click", cancelReset);
submitBtn.addEventListener("click", submit);

//confetti
function makeItRain() {
  var end = Date.now() + 2 * 1000;
  var colors = ["#bb0000", "#ffffff"];

  function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    } else {
      document.getElementById("makeItRain").disabled = false;
    }
  }
  frame();
}

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}
