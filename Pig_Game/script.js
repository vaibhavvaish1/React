'use strict';
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
console.log(player0El);
console.log(player1El);
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener('click', function () {
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    console.log(`dice${diceNumber}.png`);
    diceEl.src = `dice-${diceNumber}.png`;

    if (diceNumber !== 1) {
        scores[activePlayer] += diceNumber;
        document.getElementById(`current--${activePlayer}`).textContent = scores[activePlayer];
    } else {
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        scores[activePlayer] = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    }
});

btnHold.addEventListener(
    'click', function(){
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    }
);