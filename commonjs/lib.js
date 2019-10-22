module.exports = function (playerAction) {
  const number = Math.random() * 3;
  let computerAction;

  if (number < 1) {
    computerAction = 'rock';
  } else if (number > 1) {
    computerAction = 'scissor';
  } else {
    computerAction = 'paper';
  }

  if (playerAction === computerAction) {
    console.log('draw');
    return 0;
  } else if (
    (playerAction === 'rock' && computerAction === 'scissor') ||
    (playerAction === 'scissor' && computerAction === 'paper') ||
    (playerAction === 'paper' && computerAction === 'rock')
  ) {
    console.log('You win');
    return 1;
  } else {
    console.log('You lose')
    return -1;
  }
}


