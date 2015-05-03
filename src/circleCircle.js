var closestPointCircle = require('./closestPointCircle');
var Vector2 = require('gm2-vector2');

// temp vector
var _v1 = new Vector2();

/**
 * Check collision between two Circles
 * @param  {[type]} c1       [description]
 * @param  {[type]} c2       [description]
 * @param  {[type]} response [description]
 * @return {[type]}          [description]
 */
module.exports = function (c1, c2, response) {

    var dx = c1.position.x - c2.position.x;
    var dy = c1.position.y - c2.position.y;
    var dr = c1.radius + c2.radius;

    var distance = (dx * dx) + (dy * dy);

    if(distance < (dr * dr)) {

        if(response) {

            var near = closestPointCircle(c1.position, c2);

            response.point.set(near);
            response.normal.set(distance).normalize();
            response.depth = c1.radius - c1.position.distanceTo(near);
        }

        return true;
    }

    return false;
};