const game = require('./lib');

// const result = game(playerAction);
let count = 0;

process.stdin.on('data', e => {
  const playAction = e.toString().trim();

  const result = game(playAction);

  if (result === 1) {
    count++;
  }
  if (count === 3) {
    console.log('you are so strong, i give up');
    process.exit();
  }
});
