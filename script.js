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

//Starting conditions
score0Elem.textContent = 0;
score1Elem.textContent = 0;
diceElem.classList.add('hidden'); //Hide the mid dice
let currScore = 0;
let activePlayer = 0;

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
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player1.classList.toggle('player--active');
    player0.classList.toggle('player--active');
    currScore = 0;
  }
});

// * ---------- Hold button functionality -------------- *
