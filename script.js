'use strict';

/* ----- Init game setup ----- */
const score0Elem = document.querySelector('#score--0'); //can also use document.getElementById('score--0')
const score1Elem = document.querySelector('#score--1');
const diceElem = document.querySelector('.dice');

//Initialize scoring elements to 0
score0Elem.textContent = 0;
score1Elem.textContent = 0;

//Hide the center dice
diceElem.classList.add('hidden');

/* ---- Roll Dice functionality ----- */
