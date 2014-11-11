(function (root){
 var Asteroids = root.Asteroids = root.Asteroids || {};
 
 var RADIUS = 10;
 var COLOR = "green";
 
 var Asteroid = Asteroids.Asteroid = function(pos, game) {
   Asteroids.MovingObject.call(this, {
     pos: pos,
     vel: Asteroids.Util.randomVel(3),
     radius: RADIUS,
     color: COLOR,
     game: game
   });
 }
 
 Asteroids.Util.inherits(Asteroids.Asteroid, Asteroids.MovingObject);
 
 })(window);