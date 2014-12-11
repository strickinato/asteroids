(function(root){
  var Asteroids = root.Asteroids = root.Asteroids || {};

  var Ship = Asteroids.Ship = function(game) {
    var center = [(DIM_X / 2),(DIM_Y / 2)]
    Asteroids.MovingObject.call(this, {
      pos: center,
      vel: [0, 0],
      radius: 20,
      color: "rgb(0, 0, 0)",
      game: game
    });

  }

  Asteroids.Util.inherits(Asteroids.Ship, Asteroids.MovingObject);

})(window);
