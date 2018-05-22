class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
  }

  setupTowers() {
    for (var i = 0; i < 3; i++) {
      let $tower1 = $("<ul></ul>");
      let lines = $("<li></li>");
      $towers.data("pos", i);
      $tower1.append(lines);
    }

    for (var j = 0; j < 2; j++) {
      let $tower = $("<ul></ul>");
    }
    this.$el.append($tower1);
  }
}
