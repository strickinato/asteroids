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

})(window);
