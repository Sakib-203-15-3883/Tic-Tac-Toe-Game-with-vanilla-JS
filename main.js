// let playerOneChoices = []; is declaring a variable named playerOneChoices and assigning it an empty array [] as its initial value.By initializing it with an empty array, the variable is ready to store a list of choices made by player one in a game

let playerOneChoices = [];
let playerTwoChoices = [];

// By initializing it with the value of 0, the variable is set to the starting score of player one.

let playerOneScore = 0;
let playerTwoScore = 0;
let tieScore = 0;

// The clickCounter variable is used to track the number of clicks or interactions in a specific context.

// By initializing clickCounter with the value of 0, it starts with no clicks recorded. As the program progresses and certain events occur, you can increment or update the value of clickCounter to keep track of the number of clicks.

let clickCounter = 0;

// By initializing valueArray as an empty array, it starts with no elements stored in it. As the program progresses, you can add elements to the valueArray

let valueArray = [];

// document.querySelectorAll() method to select all the elements in the document that have a class of "box". It returns a NodeList, which is a collection of DOM elements that match the specified selector.The NodeList is then assigned to the boxes variable.

const boxes = document.querySelectorAll(".box");
console.log(boxes);

// document.getElementById() method to select a single HTML element with the specified ID. It returns a reference to the element if found, or null if no element with that ID exists.

const h3 = document.getElementById("colorChange");
const refresh = document.querySelector(".btn-refresh");
const winnerDeclaration = document.getElementById("winner-declaration");
const winnerText = document.getElementById("winner-text");
const playerOnePlaceholder = document.getElementById("player-one-score");
const playerTwoPlaceholder = document.getElementById("player-two-score");
const tiePlaceholder = document.getElementById("tie-score");
const restartBtn = document.getElementById("restart-after-win");
const clearScore = document.getElementById("clear-score");

// winningPatterns that stores various combinations of positions in a tic-tac-toe game that represent winning patterns.

// Each element in the winningPatterns array represents a winning combination, which is an array of three numbers. These numbers correspond to the positions on a tic-tac-toe board where a player needs to have their marks (e.g., X or O) to win the game.

const winningPatterns = [
  [1, 2, 3],
  [1, 5, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 5, 7],
  [3, 6, 9],
  [4, 5, 6],
  [7, 8, 9],
];

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    const turn = document.getElementById("turn");

    // e.target refers to the box element that was clicked by the user. It allows you to access and manipulate properties of the clicked element.target refers to the element that was clicked.

    let target = e.target;

    // logs the ID of the clicked element to the console. This is useful for debugging and understanding which element was clicked.
    console.log(target.id);

    // Number(target.id): The Number() function is used to convert the target.id value, which is a string, into a numerical value. This is done to ensure that the element's ID is stored as a number in the valueArray.

    // The push() method is used to add an element to the end of an array. In this case, it adds the numerical value of target.id to the valueArray. The push() method modifies the original array by adding the element to it.

    // So, valueArray.push(Number(target.id)) takes the numerical value of the clicked element's ID and adds it to the valueArray array.

    valueArray.push(Number(target.id));

    // given code is a conditional statement that determines what happens based on the value of the clickCounter variable.

    if (clickCounter % 2 === 0) {
      // target.innerText = "X";: Sets the text content of the clicked element (target) to "X".

      target.innerText = "X";

      //   Removes the CSS class "fa-x" from the turn element. This is typically used for icon styling.
      turn.classList.remove("fa-x");

      //   Adds the CSS class "fa-o" to the turn element, indicating that it's now player two's turn.
      turn.classList.add("fa-o");

      //   Adds the numerical value of the clicked element's ID to the playerOneChoices array. This keeps track of the moves made by player one.

      playerOneChoices.push(Number(target.id));

      //   Changes the color of the h3 element (with id "colorChange") to "#F2B147" (a shade of yellow).

      h3.style.color = "#F2B147";

      //   Changes the color of the clicked element

      target.style.color = "#3CC4BF";
    } else {
      target.innerText = "O";
      turn.classList.remove("fa-o");
      turn.classList.add("fa-x");
      playerTwoChoices.push(Number(target.id));
      h3.style.color = "#3CC4BF";
      target.style.color = "#F2B147";
    }

    clickCounter++;
  });
});
