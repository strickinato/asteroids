(function(root){
  var Asteroids = root.Asteroids = root.Asteroids || {};

  var Bullet = Asteroids.Bullet = function(game, pos, vel) {
    Asteroids.MovingObject.call(this, {
      pos: pos,
      vel: vel,
      radius: 3,
      color: "rgb(200, 0, 0)",
      game: game
    });

  }
  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);


  Bullet.prototype.collideWith = function(otherObject) {
    if (otherObject instanceof Asteroids.Asteroid) {
      this.game.removeObject(this)
      this.game.removeObject(otherObject);
    }
  }
})(window);
