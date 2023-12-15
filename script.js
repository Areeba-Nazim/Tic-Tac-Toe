let boxes = document.querySelectorAll(".box");
let winnerBox = document.querySelector(".winnerbox");
let newBtn = document.querySelector("#new-btn");
let resetBtn = document.querySelector(".reset-btn");
let heading = document.querySelector("#heading");
let turnX = true;

let winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


let enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    winnerBox.classList.add("hide");
    resetBtn.style.display = "";
    box.innerHTML = "";
  }
};

let newGame = () => {
  turnX = true;
  enableBoxes();
}

let disableBoxes = () => {
  for(let box of boxes) {
    box.disabled = true;
  }
};

let showWinner = (winner) => {
  winnerBox.classList.remove("hide");
  heading.innerHTML = `Winner is <br> ${winner}`;
  resetBtn.style.display = "none"
  disableBoxes()
};

let checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].textContent;
    let pos2 = boxes[pattern[1]].textContent;
    let pos3 = boxes[pattern[2]].textContent;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos2 == pos3) {
        console.log("winner");
        showWinner(pos1);
      }
    }
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", function () {
    if (turnX) {
      box.textContent = "X";
      turnX = false;
      box.style.color = "#001D3D";
    } else {
      box.textContent = "O";
      box.style.color = "#FFFCF2";
      turnX = true;
    }
    checkWinner();
    box.disabled = true;
  });
});

newBtn.addEventListener("click" , newGame)
resetBtn.addEventListener("click" , newGame)