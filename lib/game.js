(function (root) {
  var Asteroids = root.Asteroids = root.Asteroids || {};
 
  DIM_X = 800;
  DIM_Y = 600;
  NUM_ASTEROIDS = 400;
 
  var Game = Asteroids.Game = function () {
    this.asteroids = [];
    this.addAsteroids();
  }
 
  Game.prototype.addAsteroids = function () {
    for (var i = 0; i < NUM_ASTEROIDS; i++) {
      this.asteroids.push(new Asteroids.Asteroid(this.randomPosition(), this))
    }
  }
 
  Game.prototype.randomPosition = function () {
    pos_x = Math.random() * DIM_X;
    pos_y = Math.random() * DIM_Y;
    return [pos_x, pos_y]
  }
  
  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, DIM_X, DIM_Y);

    this.asteroids.forEach(function (asteroid) {
      asteroid.draw(ctx);
    });
  }
  
  Game.prototype.moveObjects = function (ctx) {
    this.asteroids.forEach(function (asteroid) {
      asteroid.move(ctx);
    });
  }
 
  Game.prototype.wrap = function(pos) {
    wrappedPos = [pos[0], pos[1]]
    if(pos[0] < 0) {
      wrappedPos[0] = DIM_X;
    }
    if(pos[0] > DIM_X) {
      wrappedPos[0] = 0;
    }
    if(pos[1] > DIM_Y) {
      wrappedPos[1] = 0;
    }
    if(pos[1] < 0) {
      wrappedPos[1] = DIM_Y;
    }
    
    return wrappedPos;
  }
 
 
 
})(window);