const View = require('./ttt-view.js');
const Game = require('./game.js');


$( () => {
  // Your code here
  let container = $('figure.ttt');
  const game = new Game();
  const view = new View(game, container);
  // view();
});
