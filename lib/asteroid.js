(function (root){
 var Asteroids = root.Asteroids = root.Asteroids || {};

 var RADIUS = 10;

 var Asteroid = Asteroids.Asteroid = function(pos, game) {
   Asteroids.MovingObject.call(this, {
     pos: pos,
     vel: Asteroids.Util.randomVel(3),
     radius: RADIUS,
     color: generateColor(),
     game: game
   });
 }

 var generateColor = function() {
   var r = Math.floor(Math.random() * 255)
   var g = Math.floor(Math.random() * 255)
   var b = Math.floor(Math.random() * 255)
   return "rgb("+ r +","+ g +","+ b +")"
 }
 Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

 Asteroid.prototype.collideWith = function(otherObject) {
   if (otherObject instanceof Asteroids.Ship) {
     this.game.ship.relocate();
   }
 }



 })(window);
