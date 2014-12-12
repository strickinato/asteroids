(function (root) {
  var Asteroids = root.Asteroids = root.Asteroids || {};

  var Util = Asteroids.Util = Asteroids.Util || {};

  var inherits = Util.inherits = function(subClass, superClass) {
    function Surrogate() {
      this.constructor = subClass
    };
    Surrogate.prototype = superClass.prototype;
    subClass.prototype = new Surrogate();

  }

  Util.randomVel = function(length) {
    dx = (Math.random() * 2 - 1) * length;
    dy = (Math.random() * 2 - 1) * length;
    return [dx, dy];
  }

  Util.calculateTriangle = function(pos) {
    var vertices = [[],[pos],[]]
    vertices[0] = [(pos[0] - 30), (pos[1] - 10)]
    vertices[1] = pos
    vertices[2] = [(pos[0] - 30), (pos[1] + 10)]

    return vertices
  }

})(window);
