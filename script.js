'use strict';

/* ----- Init game setup ----- */
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0Elem = document.querySelector('#score--0'); //can also use document.getElementById('score--0')
const score1Elem = document.querySelector('#score--1');
const curr0Elem = document.querySelector('#current--0');
const curr1Elem = document.querySelector('#current--1');
const diceElem = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// let currScore;
// let activePlayer;
// let totalScores;

//Starting conditions
//const initGame = function () {
score0Elem.textContent = 0;
score1Elem.textContent = 0;
diceElem.classList.add('hidden'); //Hide the mid dice
let currScore = 0;
let activePlayer = 0;
let totalScores = [0, 0];
//};

// initGame();

//Switch player funcitonality
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle('player--active');
  player0.classList.toggle('player--active');
  currScore = 0;
};

/* ---- Roll Dice functionality ----- */
btnRoll.addEventListener('click', function () {
  //1. Generate a random dice roll
  const randomDice = Math.floor(Math.random() * 6) + 1;
  console.log(randomDice, `dice-${randomDice}.png`);

  //2. Display dice
  diceElem.classList.remove('hidden');
  diceElem.src = `dice-${randomDice}.png`;

  //3. Check for rolled 1: if true, switch to next player
  if (randomDice !== 1) {
    //Add dice value to current score
    currScore += randomDice;
    document.getElementById(`current--${activePlayer}`).textContent = currScore;
    // curr0Elem.textContent = currScore;
  } else {
    //Switch to next player
    // document.getElementById(`current--${activePlayer}`).textContent = 0;
    // activePlayer = activePlayer === 0 ? 1 : 0;
    // player1.classList.toggle('player--active');
    // player0.classList.toggle('player--active');
    // currScore = 0;
    switchPlayer();
  }
});

// * ---------- Hold button functionality -------------- *
btnHold.addEventListener('click', function () {
  // 1. Add current score to active player's score
  totalScores[activePlayer] += currScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    totalScores[activePlayer];
  //console.log(`totalScores of ${activePlayer} is ${totalScores[0]}`);

  //Check if player's score is >= 100
  if (totalScores[activePlayer] >= 6) {
    //Finish the game
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    diceElem.classList.add('hidden'); //Hide the mid dice
    btnRoll.disabled = true;
    btnRoll.style.cursor = 'not-allowed';
    btnRoll.style.backgroundColor = 'rgba(0, 0, 0, 0.50)';
    btnHold.disabled = true;
    btnHold.style.cursor = 'not-allowed';
    btnHold.style.backgroundColor = 'rgba(0, 0, 0, 0.50)';
  } else {
    //Else switch to next player
    switchPlayer();
  }
});

// * ---------- New game button functionality * ----------
btnNew.addEventListener('click', function () {
  score0Elem.textContent = 0;
  score1Elem.textContent = 0;
  currScore = 0;
  totalScores = [0, 0];
  //initGame();
  //activePlayer = activePlayer === 0 ? 1 : 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  activePlayer = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
  btnRoll.disabled = false;
  btnRoll.style.cursor = 'pointer';
  btnRoll.style.backgroundColor = 'inherit';
  btnHold.disabled = false;
  btnHold.style.cursor = 'pointer';
  btnHold.style.backgroundColor = 'inherit';
});

// if (activePlayer === 0) {
//   totalScores[0] += currScore;
//   console.log(`totalScores of 0 is ${totalScores[0]}`);
//   score0Elem.textContent = totalScores[0];
//   //Switch to next player
//   switchPlayer();
// } else {
//   totalScores[1] += currScore;
//   console.log(`totalScores of 1 is ${totalScores[1]}`);
//   score1Elem.textContent = totalScores[1];
//   //Switch to next player
//   switchPlayer();
// }
