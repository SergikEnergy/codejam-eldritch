import ancientsData from "./data/ancients.js";
import blueCards from "./assets/MythicCards/blue/index.js";
import brownCards from "./assets/MythicCards/brown/index.js";
import greenCards from "./assets/MythicCards/green/index.js";

import blueCardsData from "./data/mythicCards/blue/index.js";
import brownCardsData from "./data/mythicCards/brown/index.js";
import greenCardsData from "./data/mythicCards/green/index.js";

// console.log(Object.keys(greenCards).length);

// console.log(ancientsData[0]);

//init the variables of assets
console.log(
  "I realized only one level - middle! My mark is 85, as I guess! Thanks for your checking!"
);
let greenCardAll = [];
let brownCardAll = [];
let blueCardAll = [];
let selectedAncient;
let linkSelectedAncient;
let greenTakeMax, brownTakeMax, blueTakeMax;
//creating a stage-set of cards
let firstStageArray = [];
let secondStageArray = [];
let thirdStageArray = [];
let currentAncient;
// alert("Please, select an ancient card");
let ancientBox = document.querySelector(".ancient__cards");
let chooseLevel = document.querySelector(".level__game");
let reloadPage = document.querySelector(".especially");
let checkIndex = 0;
// console.log(reloadPage);

// getting a random number of range
function getRandom(max, min = 0) {
  return Math.floor(Math.random() * (max - min) + min);
}
function setDefaultValue() {
  greenCardAll = [];
  brownCardAll = [];
  blueCardAll = [];
  firstStageArray = [];
  secondStageArray = [];
  thirdStageArray = [];
}

//counting max quentity of cards for an ancient

ancientBox.addEventListener("click", (func) => {
  setDefaultValue();
  // if (!func.target.classList.contains("selected__card")) {
  //   alert("For changing ancient's card page will be reloaded!");
  //   document.location.reload();
  // }
  for (let card of ancientBox.children) {
    card.classList.remove("selected__card");
  }
  for (let elem of ancientsData) {
    if (func.target.classList.contains(`${elem.name}`)) {
      selectedAncient = elem.name;
      linkSelectedAncient = elem.linkElement;
    }
  }
  currentAncient = document.querySelector(`.${selectedAncient}`);

  if (func.target.classList.contains("card")) {
    checkIndex++;
    func.target.classList.add("selected__card");

    chooseLevel.classList.remove("visibilaty__no");
  }
  if (checkIndex <= 1) {
    setTimeout(getCardDeck, 3000);
  } else {
    console.log(checkIndex);
    alert("You choose MORE THAN ONE card! Page will be reloaded!");
    document.location.reload();
  }
});

function getCardDeck() {
  console.log(selectedAncient);
  for (let i = 0; i < ancientsData.length; i++) {
    if (ancientsData[i].name === selectedAncient) {
      greenTakeMax =
        ancientsData[i].firstStage.greenCards +
        ancientsData[i].secondStage.greenCards +
        ancientsData[i].thirdStage.greenCards;
      brownTakeMax =
        ancientsData[i].firstStage.brownCards +
        ancientsData[i].secondStage.brownCards +
        ancientsData[i].thirdStage.brownCards;
      blueTakeMax =
        ancientsData[i].firstStage.blueCards +
        ancientsData[i].secondStage.blueCards +
        ancientsData[i].thirdStage.blueCards;
    }
  }
  // return greenTakeMax, brownTakeMax, blueTakeMax;

  console.log(greenTakeMax, brownTakeMax, blueTakeMax);
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
  stage1();
  stage2();
  stage3();
}

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
  return blueCardAll;
}

function stage1() {
  // console.log(ancientsData[linkSelectedAncient].firstStage.greenCards);
  const maxGreen = ancientsData[linkSelectedAncient].firstStage.greenCards;
  const maxBrown = ancientsData[linkSelectedAncient].firstStage.brownCards;
  const maxBlue = ancientsData[linkSelectedAncient].firstStage.blueCards;
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
  const maxGreen = ancientsData[linkSelectedAncient].secondStage.greenCards;
  const maxBrown = ancientsData[linkSelectedAncient].secondStage.brownCards;
  const maxBlue = ancientsData[linkSelectedAncient].secondStage.blueCards;
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
  const maxGreen = ancientsData[linkSelectedAncient].thirdStage.greenCards;
  const maxBrown = ancientsData[linkSelectedAncient].thirdStage.brownCards;
  const maxBlue = ancientsData[linkSelectedAncient].thirdStage.blueCards;
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
  // console.log(thirdStageArray);
}

//binding the cards with html elements

// let currentAncient = document.querySelector(`.${selectedAncient}`);
let shuffleSet = document.querySelector(".button__mix");
let shirtCard = document.querySelector(".shirt__cards");
let showCard = document.querySelector(".show__cards");
let counterCard = document.querySelector(".counter__card");
let activeLevel;

// currentAncient.addEventListener("click", () => {
//   chooseLevel.classList.remove("visibilaty__no");
// });
chooseLevel.addEventListener("click", (event) => {
  for (let elem of chooseLevel.children) {
    if (elem.classList.contains("selected__level"))
      elem.classList.remove("selected__level");
  }

  activeLevel = event.target;
  // console.log(activeLevel);
  activeLevel.classList.toggle("selected__level");
  shuffleSet.classList.remove("visibilaty__no");
  //   console.log(activeLevel);
  //   console.log(event.target);
});
shuffleSet.addEventListener("click", () => {
  shirtCard.classList.remove("visibilaty__no");
  counterCard.classList.remove("visibilaty__no");
  updateCounter();
});
shirtCard.addEventListener("click", () => {
  showCard.classList.remove("visibilaty__no");
  showActiveCard();
  if (
    firstStageArray.length === 0 &&
    secondStageArray.length === 0 &&
    thirdStageArray.length === 0
  ) {
    showCard.style.background = "rgba(15, 64, 226, 0.6)";
    shirtCard.classList.toggle("visibilaty__no");
    reloadPage.classList.remove("visibilaty__no");
  }
});
function showActiveCard() {
  let num;
  let delCard;
  let bgCardLink;
  if (firstStageArray.length !== 0) {
    num = getRandom(firstStageArray.length);
    delCard = firstStageArray[num];
    bgCardLink = `url(/assets/MythicCards${delCard.replace("..", "")})`;
    // console.log(bgCardLink);
    firstStageArray.splice(num, 1);
    showCard.style.backgroundImage = `${bgCardLink}`;
    updateCounter();
  } else if (firstStageArray.length === 0 && secondStageArray.length !== 0) {
    num = getRandom(secondStageArray.length);
    delCard = secondStageArray[num];
    bgCardLink = `url(/assets/MythicCards${delCard.replace("..", "")})`;
    // console.log(bgCardLink);
    secondStageArray.splice(num, 1);
    showCard.style.backgroundImage = `${bgCardLink}`;
    updateCounter();
  } else if (
    firstStageArray.length === 0 &&
    secondStageArray.length === 0 &&
    thirdStageArray.length !== 0
  ) {
    num = getRandom(thirdStageArray.length);
    delCard = thirdStageArray[num];
    bgCardLink = `url(/assets/MythicCards${delCard.replace("..", "")})`;
    // console.log(bgCardLink);
    thirdStageArray.splice(num, 1);
    showCard.style.backgroundImage = `${bgCardLink}`;
    updateCounter();
  }
}
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
let greenCount, brownCount, blueCount;

function getCountStage(nameArray) {
  greenCount = brownCount = blueCount = 0;
  for (let i = 0; i < nameArray.length; i++) {
    let compare = String(nameArray[i]);
    if (compare.includes("green")) {
      greenCount++;
    } else if (compare.includes("brown")) {
      brownCount++;
    } else if (compare.includes("blue")) {
      blueCount++;
    }
  }

  return greenCount, brownCount, blueCount;
}

//create a counter
function updateCounter() {
  let stageOne = document.querySelector(".stage1");
  let stageTwo = document.querySelector(".stage2");
  let stageThree = document.querySelector(".stage3");
  getCountStage(firstStageArray);

  // console.log(greenCount, brownCount, blueCount);
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

  if (firstStageArray.length === 0) {
    // console.log(stage1Name);
    stageOne.style.color = "red";
  }
  if (secondStageArray.length === 0) {
    stageTwo.style.color = "red";
  }
  if (thirdStageArray.length === 0) {
    stageThree.style.color = "red";
  }
}
reloadPage.addEventListener("click", () => {
  document.location.reload();
});
