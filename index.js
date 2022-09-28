// Random dice

left_random_dice = Math.floor(Math.random()*6);
right_random_dice = Math.floor(Math.random()*6);

// List of functions

const left_dice = [left_one,left_two,left_three,left_four,left_five,left_six];
const right_dice = [right_one,right_two,right_three,right_four,right_five,right_six];

// Number of each function

var left_dice_value = left_dice[left_random_dice]();
var right_dice_value = right_dice[right_random_dice]();

// Winning conditions

if (left_dice_value > right_dice_value) {
  document.getElementById('flag-right').classList.toggle('invisible');
  document.getElementById('title').innerHTML = 'Player 1 WON';
}
else if (left_dice_value < right_dice_value) {
  document.getElementById('flag-left').classList.toggle('invisible');
  document.getElementById('title').innerHTML = 'Player 2 WON';
}
else {
  document.getElementById('title').innerHTML = 'DRAW, Try Again!';
  document.getElementById('flag-right').classList.toggle('invisible');
  document.getElementById('flag-left').classList.toggle('invisible');
}

function left_one() {
  document.getElementById('left-one').classList.toggle('invisible');
  document.getElementById('left-two').classList.toggle('invisible');
  document.getElementById('left-three').classList.toggle('invisible');
  document.getElementById('left-five').classList.toggle('invisible');
  document.getElementById('left-six').classList.toggle('invisible');
  document.getElementById('left-seven').classList.toggle('invisible');

  return 1
}

function right_one() {
  document.getElementById('right-one').classList.toggle('invisible');
  document.getElementById('right-two').classList.toggle('invisible');
  document.getElementById('right-three').classList.toggle('invisible');
  document.getElementById('right-five').classList.toggle('invisible');
  document.getElementById('right-six').classList.toggle('invisible');
  document.getElementById('right-seven').classList.toggle('invisible');

  return 1
}


function left_two() {
  document.getElementById('left-two').classList.toggle('invisible');
  document.getElementById('left-three').classList.toggle('invisible');
  document.getElementById('left-four').classList.toggle('invisible');
  document.getElementById('left-five').classList.toggle('invisible');
  document.getElementById('left-six').classList.toggle('invisible');

  return 2
}

function right_two() {
  document.getElementById('right-two').classList.toggle('invisible');
  document.getElementById('right-three').classList.toggle('invisible');
  document.getElementById('right-four').classList.toggle('invisible');
  document.getElementById('right-five').classList.toggle('invisible');
  document.getElementById('right-six').classList.toggle('invisible');

  return 2
}

function left_three() {
  document.getElementById('left-two').classList.toggle('invisible');
  document.getElementById('left-three').classList.toggle('invisible');
  document.getElementById('left-five').classList.toggle('invisible');
  document.getElementById('left-six').classList.toggle('invisible');

  return 3
}

function right_three() {
  document.getElementById('right-two').classList.toggle('invisible');
  document.getElementById('right-three').classList.toggle('invisible');
  document.getElementById('right-five').classList.toggle('invisible');
  document.getElementById('right-six').classList.toggle('invisible');

  return 3
}

function left_four() {
  document.getElementById('left-three').classList.toggle('invisible');
  document.getElementById('left-four').classList.toggle('invisible');
  document.getElementById('left-five').classList.toggle('invisible');

  return 4
}

function right_four() {
  document.getElementById('right-three').classList.toggle('invisible');
  document.getElementById('right-four').classList.toggle('invisible');
  document.getElementById('right-five').classList.toggle('invisible');

  return 4
}

function left_five() {
  document.getElementById('left-three').classList.toggle('invisible');
  document.getElementById('left-five').classList.toggle('invisible');

  return 5
}

function right_five() {
  document.getElementById('right-three').classList.toggle('invisible');
  document.getElementById('right-five').classList.toggle('invisible');

  return 5
}

function left_six() {
  document.getElementById('left-four').classList.toggle('invisible');

  return 6
}

function right_six() {
  document.getElementById('right-four').classList.toggle('invisible');

  return 6
}
