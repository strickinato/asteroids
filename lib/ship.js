function(root){
  var Asteroids = root.Asteroids = root.Astroids || {};

  var Ship = Asteroids.Ship = function(game) {
    Asteroids.MovingObject.call(this, {
      pos: [DIM_X / 2, DIM_Y / 2],
      vel: 0,
      radius: 20,
      color: rgb(0, 0, 0),
      game: game
    });

  }


})(window);
