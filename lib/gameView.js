(function (root) {
  var Asteroids = root.Asteroids = root.Asteroids || {};
  
  var GameView = Asteroids.GameView = function (game, ctx) {
    this.game = game;
    this.ctx = ctx;
    // this.canvasEl = document.getElementsByTagName("canvas")[0];
  //   this.canvasEl.height = window.innerHeight;
  //   this.canvasEl.width = window.innerWidth;
  //   this.ctx = this.canvasEl.getContext("2d");
  //   this.game = new Asteroids.Game();
  };
  
  GameView.prototype.start = function() {
    root.setInterval((function () {
      this.game.moveObjects();
      this.game.draw(this.ctx);
    }).bind(this), 1000 / 60);
  };
 
})(window);