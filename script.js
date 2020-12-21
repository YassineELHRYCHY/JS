'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number !';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 19;

// document.querySelector('.guess').value = 19;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('Secret Number is ' + secretNumber + ', shuuuuut !');
let score = 20;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'Put a number B**CH';
  } else if (guess < 0 || guess > 20) {
    document.querySelector('.message').textContent = 'Fu**ing kidding me !';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number !';
  } else if (guess > secretNumber) {
    if (score !== 0) {
      document.querySelector('.message').textContent = 'Too high !';
      score--;
    } else document.querySelector('.message').textContent = 'You lost B**CH';
  } else if (guess < secretNumber) {
    if (score !== 0) {
      document.querySelector('.message').textContent = 'Too low !';
      score--;
    } else document.querySelector('.message').textContent = 'You lost B**CH';
  }
  document.querySelector('.score').textContent = score;
});
