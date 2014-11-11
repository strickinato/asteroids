(function (root) {
  var Asteroids = root.Asteroids = root.Asteroids || {};
 
  var Util = Asteroids.Util = Asteroids.Util || {};
 
  Util.inherits = function(subClass, superClass) {
    function Surrogate() {
    };
    Surrogate.prototype = superClass.prototype;
    subClass.prototype = new Surrogate();
    
  }
  
  Util.randomVel = function(length) {
    dx = (Math.random() * 2 - 1) * length;
    dy = (Math.random() * 2 - 1) * length;
    return [dx, dy];
  }

})(window);