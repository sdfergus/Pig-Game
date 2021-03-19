'use strict';

/* ----- Init game setup ----- */
const score0Elem = document.querySelector('#score--0'); //can also use document.getElementById('score--0')
const score1Elem = document.querySelector('#score--1');
const diceElem = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const curr0 = document.querySelector('#current--0');
const curr1 = document.querySelector('#current--1');
const player1 = document.querySelector('#player--0');
const player2 = document.querySelector('#player--1');

//Starting conditions
score0Elem.textContent = 0;
score1Elem.textContent = 0;
diceElem.classList.add('hidden'); //Hide the mid dice
let counter = 0;

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
    counter += randomDice;
    score0Elem.textContent = counter;
  } else {
    //Switch to next player
    counter = 0;
    score0Elem.textContent = counter;
  }
});
