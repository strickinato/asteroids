(function (root) {
 var Asteroids = root.Asteroids = root.Asteroids || {};

 var MovingObject = Asteroids.MovingObject = function(options) {
   this.pos = options.pos;
   this.vel = options.vel;
   this.radius = options.radius;
   this.color = options.color;
   this.game = options.game;
 }

 MovingObject.prototype.draw = function(ctx) {
   ctx.fillStyle = this.color;
   ctx.beginPath();

   ctx.arc(
     this.pos[0],
     this.pos[1],
     this.radius,
     0,
     2 * Math.PI,
     false
   );

   ctx.fill();
 }

 MovingObject.prototype.move = function() {
   this.pos = this.game.wrap([(this.pos[0] + this.vel[0]), (this.pos[1] + this.vel[1])]);
 }

 MovingObject.prototype.isCollidedWith = function(otherObject){
   if (otherObject) {
     var xDist = this.pos[0] - otherObject.pos[0];
     var yDist = this.pos[1] - otherObject.pos[1];
     var currentDistance = Math.floor(Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2)));
     var collisionDistance = this.radius + otherObject.radius;
     return (currentDistance <= collisionDistance);
   }
 }

 MovingObject.prototype.collideWith = function(otherObject) {
   this.game.removeAsteroid(this);
   this.game.removeAsteroid(otherObject);
 }









})(window);
