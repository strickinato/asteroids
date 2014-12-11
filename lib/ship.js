(function(root){
  var Asteroids = root.Asteroids = root.Asteroids || {};

  SHIPRADIUS = 20;
  BULLETRADIUS = 3;

  var Ship = Asteroids.Ship = function(game) {
    var center = [(DIM_X / 2),(DIM_Y / 2)]
    Asteroids.MovingObject.call(this, {
      pos: center,
      vel: [0, 0],
      radius: SHIPRADIUS,
      color: "rgb(0, 0, 0)",
      game: game
    });

  }
  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.relocate = function() {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  }

  Ship.prototype.power = function(impulse) {
    this.vel[0] += impulse[0]
    this.vel[1] += impulse[1]
  }

  Ship.prototype.fireBullet = function() {
    var vel = this.vel.slice(0)
    var pos = this.pos.slice(0)

    pos[0] = pos[0] + SHIPRADIUS + BULLETRADIUS
    vel[0] = vel[0] + 2;
    var bullet = new Asteroids.Bullet(this.game, pos, vel);
    this.game.addObject(bullet);
  }

})(window);
