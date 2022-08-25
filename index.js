import ancientsData from "./data/ancients.js";
import blueCards from "./assets/MythicCards/blue/index.js";
import brownCards from "./assets/MythicCards/brown/index.js";
import greenCards from "./assets/MythicCards/green/index.js";

import blueCardsData from "./data/mythicCards/blue/index.js";
import brownCardsData from "./data/mythicCards/brown/index.js";
import greenCardsData from "./data/mythicCards/green/index.js";

// console.log(Object.keys(greenCards).length);

// console.log(ancientsData[0]);

// getting a random number of range
function getRandom(max, min = 0) {
  return Math.floor(Math.random() * (max - min) + min);
}
//init the variable of assets
let greenCardAll = [];
let brownCardAll = [];
let blueCardAll = [];
//counting max quentity of cards for an ancient
let greenTakeMax =
  ancientsData[0].firstStage.greenCards +
  ancientsData[0].secondStage.greenCards +
  ancientsData[0].thirdStage.greenCards;
let brownTakeMax =
  ancientsData[0].firstStage.brownCards +
  ancientsData[0].secondStage.brownCards +
  ancientsData[0].thirdStage.brownCards;
let blueTakeMax =
  ancientsData[0].firstStage.blueCards +
  ancientsData[0].secondStage.blueCards +
  ancientsData[0].thirdStage.blueCards;

for (let j = 0; j < greenTakeMax; j++) {
  getGreenCard();
}
for (let j = 0; j < brownTakeMax; j++) {
  getBrownCard();
}
for (let j = 0; j < blueTakeMax; j++) {
  getBlueCard();
}
console.log(greenCardAll);
console.log(brownCardAll);
console.log(blueCardAll);
//getting a one green, blue, brown card
function getGreenCard() {
  let max = Object.keys(greenCards).length;
  let selectCard = getRandom(max);
  let i = 0;
  for (let card in greenCards) {
    if (i === selectCard) {
      greenCardAll.push(greenCards[card]);
      delete greenCards[card];
    }
    i++;
  }
  //   console.log(Object.keys(greenCards).length);
  //   console.log(greenCards);
  return greenCardAll;
}
function getBrownCard() {
  let max = Object.keys(brownCards).length;
  let selectCard = getRandom(max);
  let i = 0;
  for (let card in brownCards) {
    if (i === selectCard) {
      brownCardAll.push(brownCards[card]);
      delete brownCards[card];
    }
    i++;
  }
  //   console.log(Object.keys(brownCards).length);
  //   console.log(brownCards);
  return brownCardAll;
}

function getBlueCard() {
  let max = Object.keys(blueCards).length;
  let selectCard = getRandom(max);
  let i = 0;
  for (let card in blueCards) {
    if (i === selectCard) {
      blueCardAll.push(blueCards[card]);
      delete blueCards[card];
    }
    i++;
  }
  //   console.log(Object.keys(blueCards).length);
  //   console.log(blueCards);
  return blueCardAll;
}
//creating a stage-set of cards
let firstStageArray = [];
let secondStageArray = [];
let thirdStageArray = [];

function stage1() {
  const maxGreen = ancientsData[0].firstStage.greenCards;
  const maxBrown = ancientsData[0].firstStage.brownCards;
  const maxBlue = ancientsData[0].firstStage.blueCards;
  for (let i = 0; i < maxGreen; i++) {
    let select = getRandom(greenCardAll.length);
    firstStageArray.push(greenCardAll[select]);
    greenCardAll.splice(select, 1);
  }
  for (let i = 0; i < maxBrown; i++) {
    let select = getRandom(brownCardAll.length);
    firstStageArray.push(brownCardAll[select]);
    brownCardAll.splice(select, 1);
  }
  for (let i = 0; i < maxBlue; i++) {
    let select = getRandom(blueCardAll.length);
    firstStageArray.push(blueCardAll[select]);
    blueCardAll.splice(select, 1);
  }
  console.log(firstStageArray);
}

function stage2() {
  const maxGreen = ancientsData[0].secondStage.greenCards;
  const maxBrown = ancientsData[0].secondStage.brownCards;
  const maxBlue = ancientsData[0].secondStage.blueCards;
  for (let i = 0; i < maxGreen; i++) {
    let select = getRandom(greenCardAll.length);
    secondStageArray.push(greenCardAll[select]);
    greenCardAll.splice(select, 1);
  }
  for (let i = 0; i < maxBrown; i++) {
    let select = getRandom(brownCardAll.length);
    secondStageArray.push(brownCardAll[select]);
    brownCardAll.splice(select, 1);
  }
  for (let i = 0; i < maxBlue; i++) {
    let select = getRandom(blueCardAll.length);
    secondStageArray.push(blueCardAll[select]);
    blueCardAll.splice(select, 1);
  }
  console.log(secondStageArray);
}
function stage3() {
  const maxGreen = ancientsData[0].thirdStage.greenCards;
  const maxBrown = ancientsData[0].thirdStage.brownCards;
  const maxBlue = ancientsData[0].thirdStage.blueCards;
  for (let i = 0; i < maxGreen; i++) {
    let select = getRandom(greenCardAll.length);
    thirdStageArray.push(greenCardAll[select]);
    greenCardAll.splice(select, 1);
  }
  for (let i = 0; i < maxBrown; i++) {
    let select = getRandom(brownCardAll.length);
    thirdStageArray.push(brownCardAll[select]);
    brownCardAll.splice(select, 1);
  }
  for (let i = 0; i < maxBlue; i++) {
    let select = getRandom(blueCardAll.length);
    thirdStageArray.push(blueCardAll[select]);
    blueCardAll.splice(select, 1);
  }
  console.log(thirdStageArray);
}
stage1();
stage2();
stage3();

//binding the cards with html elements

let currentAncient = document.querySelector(".Azathoth");
let chooseLevel = document.querySelector(".level__select");
let shuffleSet = document.querySelector(".button__mix");
let shirtCard = document.querySelector(".shirt__cards");
let showCard = document.querySelector(".show__cards");
let counterCard = document.querySelector(".counter__card");
let activeLevel;

currentAncient.addEventListener("click", () => {
  chooseLevel.classList.remove("visibilaty__no");
});
chooseLevel.addEventListener("click", (event) => {
  activeLevel = event.target;
  shuffleSet.classList.remove("visibilaty__no");
  //   console.log(activeLevel);
  //   console.log(event.target);
});
shuffleSet.addEventListener("click", () => {
  shirtCard.classList.remove("visibilaty__no");
  counterCard.classList.remove("visibilaty__no");
});
shirtCard.addEventListener("click", () => {
  showCard.classList.remove("visibilaty__no");
});
// init let for the counter
let green1 = document.getElementById("green1");
let green2 = document.getElementById("green2");
let green3 = document.getElementById("green3");
let brown1 = document.getElementById("brown1");
let brown2 = document.getElementById("brown2");
let brown3 = document.getElementById("brown3");
let blue1 = document.getElementById("blue1");
let blue2 = document.getElementById("blue2");
let blue3 = document.getElementById("blue3");
//give the first value of counter;
let greenCount,
  brownCount,
  blueCount = 0;
function getCountStage(nameArray) {
  let a,
    b,
    c = 0;
  for (let i = 0; i < nameArray.length; i++) {
    let compare = String(nameArray[i]);
    if (compare.includes("green")) {
      greenCount++;
      a++;
    } else if (compare.includes("brown")) {
      brownCount++;
      b++;
    } else if (compare.includes("blue")) {
      blueCount++;
      c++;
    }
  }
  if (a === 0) greenCount = 0;
  else if (b === 0) brownCount = 0;
  else if (c === 0) blueCount = 0;
  return greenCount, brownCount, blueCount;
}
function updateCounter() {
  getCountStage(firstStageArray);

  console.log(greenCount);
  green1.innerText = greenCount;
  brown1.innerText = brownCount;
  blue1.innerText = blueCount;
  getCountStage(secondStageArray);
  green2.innerText = greenCount;
  brown2.innerText = brownCount;
  blue2.innerText = blueCount;
  getCountStage(thirdStageArray);
  green3.innerText = greenCount;
  brown3.innerText = brownCount;
  blue3.innerText = blueCount;
}
updateCounter();

// console.log(greenCount, brownCount, blueCount);
// green1.innerText = firstStageArray.length;
// console.log(chooseLevel);
