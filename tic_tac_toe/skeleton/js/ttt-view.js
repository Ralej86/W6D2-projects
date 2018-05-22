class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on("click", "li", (e => {
      const $square = $(e.currentTarget);
      this.makeMove($square);
    }));
  }

  makeMove($square) {
    let pos = $square.data("pos");
    this.game.playMove(pos);
    $square.text(this.game.currentPlayer);
    $square.removeClass("square");
    $square.addClass("current-player-mark");
    
    if (this.game.board.winner()) {
      alert(`${this.game.currentPlayer} wins!!`);
    }
    
    //check for winner
    //check for gameover
    
    
  }

  setupBoard() {
    const $ul = $("<ul>");
    const board = $('<ul class="game-board"></ul>');
    
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        let $row = $('<li class="square">');
        $row.data("pos", [i, j]);
        $ul.append($row);
        console.log("printed 1");
      }
    }
    
    this.$el.append($ul);
  }
}

module.exports = View;
