const gameContainer = document.getElementById("game");
const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

function shuffle(array) {
  let counter = array.length;
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

let shuffledColors = shuffle(COLORS);

function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(color);
    newDiv.addEventListener("click", handleCardClick);
    gameContainer.append(newDiv);
  }
}

let clickedCard = null;
let preventClick = false;
let combosFound = 0;
// TODO: Implement this function!
function handleCardClick(event) {



  let Card = event.target;
  if (preventClick ||
    Card === clickedCard ||
    Card.classList.contains("Done")) {
    return;
  }
  Card.style.backgroundColor = Card.classList[0];
  console.log("you just clicked", event.target);

  Card.classList.add("Done");

  if (!clickedCard) {
    clickedCard = Card;
  } else if (clickedCard) {

    if (clickedCard.classList[0] !== Card.classList[0]) {
      preventClick = true;
      setTimeout(function () {
        clickedCard.style.backgroundColor = "";
        Card.style.backgroundColor = "";
        clickedCard.classList.remove("Done");
        Card.classList.remove("Done");
        clickedCard = null;
        Card = null;
        preventClick = false;
      }, 1000);
    } else {
      combosFound++
      clickedCard = null;
      if (combosFound === 5) {
        alert('you win!!!');
      }
    }
  }
}
// when the DOM loads
createDivsForColors(shuffledColors);

const reset = document.querySelector('#rest')
reset.addEventListener(click, function reset() {
  createDivsForColors(shuffledColors);
});
