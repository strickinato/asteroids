(function (root) {
  var Asteroids = root.Asteroids = root.Asteroids || {};

  var GameView = Asteroids.GameView = function (game, ctx) {
    this.game = game;
    this.ctx = ctx;
  };

  GameView.prototype.start = function() {
    root.setInterval((function () {
      this.game.moveObjects();
      this.game.draw(this.ctx);
    }).bind(this), 1000/60);
  };

})(window);
