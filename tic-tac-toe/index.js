let box1 = document.getElementById("1");
let box2 = document.getElementById("2");
let box3 = document.getElementById("3");
let box4 = document.getElementById("4");
let box5 = document.getElementById("5");
let box6 = document.getElementById("6");
let box7 = document.getElementById("7");
let box8 = document.getElementById("8");
let box9 = document.getElementById("9");
let winnerLine = document.querySelector("h2");

let arr = ["", "", "", "", "", "", "", "", ""];
const reset = ["", "", "", "", "", "", "", "", ""];

let value = "X";

const addContent = (id) => {
  arr[id - 1] = value;
  console.log(arr);
  setValue();
  checkWinner(value);

  if (value === "X") {
    value = "O";
  } else {
    value = "X";
  }
};

const setValue = () => {
  box1.textContent = arr[0];
  box2.textContent = arr[1];
  box3.textContent = arr[2];
  box4.textContent = arr[3];
  box5.textContent = arr[4];
  box6.textContent = arr[5];
  box7.textContent = arr[6];
  box8.textContent = arr[7];
  box9.textContent = arr[8];
};

const checkWinner = (val) => {
  for (let i = 0; i < 9; i+=3) {
    if (arr[0 + i] === val && arr[1 + i] === val && arr[2 + i] == val) {
      setWinner(val);
      return;
    }
  }

  for (let i = 0; i <= 2; i++) {
    if (arr[0 + i] === val && arr[3 + i] === val && arr[6 + i] == val) {
      setWinner(val);
      return;
    }
  }

  if(arr[0] === val && arr[4] === val && arr[8] === val) {
    setWinner(val);
      return;
  }

  if(arr[2] === val && arr[4] === val && arr[6] === val) {
    setWinner(val);
      return;
  }
};

const setWinner = (val) => {
  winnerLine.textContent = `${val} is Winner`;
};

const resetGame = () => {
    arr = reset.map((val) => val);
    setValue();
    winnerLine.textContent = ``;
}