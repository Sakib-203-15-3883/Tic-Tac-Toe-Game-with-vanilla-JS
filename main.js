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
  box.addEventListener(
    "click",
    (e) => {
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

      if (playerOneChoices.length >= 3 || playerTwoChoices.length >= 3) {
        if (checkForWinner(playerOneChoices)) {
          winnerDeclaration.classList.toggle("show-winner");
          winnerText.innerText = "The winner is player one!";
          winnerText.style.color = "#F2B147";
          //playerOneScore++
          addPlayerOneScore();
          // line below shows us the score increment before refreshing
          playerOnePlaceholder.innerText = sessionStorage.getItem("p1Score");
        } else if (checkForWinner(playerTwoChoices)) {
          winnerDeclaration.classList.toggle("show-winner");
          winnerText.innerText = "The winner is player two!";
          winnerText.style.color = "#3CC4BF";
          addPlayerTwoScore();
          playerTwoPlaceholder.innerText = playerTwoScore;
        } else if (clickCounter === 9) {
          winnerDeclaration.classList.toggle("show-winner");
          winnerText.innerText = `It's a tie :( `;
          addTieScore();
          tiePlaceholder.innerText = tieScore;
          winnerText.style.color = "lightgrey";
        }
      }
    },
    // It is used to specify that the event listener should only be triggered once for the specified event.he event listener is added to each box element using a forEach loop. When a box is clicked, the associated event handler function is executed. Since { once: true } is specified, the event listener is removed immediately after the first click event is triggered on that box element.
    { once: true }
  );
});

//keep track of score, testing innerText
if (!sessionStorage.getItem("p1Score")) {
  sessionStorage.setItem("p1Score", 0);
}

if (!sessionStorage.getItem("p2Score")) {
  sessionStorage.setItem("p2Score", 0);
}

if (!sessionStorage.getItem("tieScore")) {
  sessionStorage.setItem("tieScore", 0);
}

playerOnePlaceholder.innerText = sessionStorage.getItem("p1Score");
playerTwoPlaceholder.innerText = sessionStorage.getItem("p2Score");
tiePlaceholder.innerText = sessionStorage.getItem("tieScore");

// It retrieves the value of the "p1Score" key from the sessionStorage using the getItem() method:In summary, the addPlayerOneScore() function retrieves the current score for player one from the sessionStorage, increments it by 1, and stores the updated score back in the sessionStorage. This allows the player one's score to be persisted and incremented across different sessions or page reloads.

function addPlayerOneScore() {
  // The sessionStorage is a web storage object that allows data to be stored in the browser and persists across different pages or sessions.
  // The getItem() method retrieves the value associated with the specified key ("p1Score" in this case) from the sessionStorage.
  // The retrieved value is then converted to a number using the Number() function and assigned to the variable playerOneScore.
  playerOneScore = Number(sessionStorage.getItem("p1Score"));

  playerOneScore++;

  //   It sets the updated playerOneScore value back to the "p1Score" key in the sessionStorage using the setItem() method: sessionStorage.setItem("p1Score", playerOneScore);

  // The setItem() method sets the value of the specified key ("p1Score" in this case) in the sessionStorage.
  // The updated value of playerOneScore is stored in the sessionStorage, replacing the previous value associated with the "p1Score" key.
  sessionStorage.setItem("p1Score", playerOneScore);
}

function addPlayerTwoScore() {
  playerTwoScore = Number(sessionStorage.getItem("p2Score"));
  playerTwoScore++;
  sessionStorage.setItem("p2Score", playerTwoScore);
}

function addTieScore() {
  tieScore = Number(sessionStorage.getItem("tieScore"));
  tieScore++;
  sessionStorage.setItem("tieScore", tieScore);
}

//The some() and every() array methods in JavaScript return a Boolean value. The function checkForWinner is defined with a single parameter arr, which represents the array to be checked for winning patterns.

// The includes() method returns true if the element is found in the array, and false otherwise.

// The every() method returns true if all elements in the combinations array pass the test condition (i.e., all elements are present in the arr array), and false otherwise.

//The some() method returns true if at least one winning pattern satisfies the condition (i.e., all elements in the pattern are present in the arr array), and false otherwise.

// Finally, the checkForWinner function returns the result of the some() method, indicating whether there is a winning pattern in the provided array.

function checkForWinner(arr) {
  console.log(arr);
  // The function uses the some() method on the winningPatterns array. The some() method tests whether at least one element in the array passes the provided test condition.
  return winningPatterns.some((combinations) => {
    // every() method is used on each combinations array. The every() method tests whether all elements in the array pass the provided test condition.
    return combinations.every((element) => {
      //includes() method checks whether an array includes a specific element. It iterates over each element and compares it to the specified element. If a match is found, the method returns true. If no match is found after iterating over all elements, it returns false. includes() method checks if the current element is present in the arr array.

      return arr.includes(element);
    });
  });
}

restartBtn.addEventListener("click", restartAndClear);

function restartAndClear() {
  window.location.reload();
}

clearScore.addEventListener("click", () => {
  console.log("smth");
  sessionStorage.clear();
  playerOnePlaceholder.innerText = 0;
  playerTwoPlaceholder.innerText = 0;
  tiePlaceholder.innerText = 0;
  console.log(playerOneScore);
  console.log(playerTwoScore);
  console.log(tieScore);
});
