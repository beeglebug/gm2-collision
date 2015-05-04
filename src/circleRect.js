var Vector2 = require('gm2-vector2');
var closestPointRect = require('./closestPointRect');
var pointCircle = require('./pointCircle');
var pointRect = require('./pointRect');

// temp vector
var _v1 = new Vector2();

/**
 * Check collision between a Circle and a Rect
 * @param  {[type]} circle   [description]
 * @param  {[type]} rect     [description]
 * @param  {[type]} response [description]
 * @return {[type]}          [description]
 */
module.exports = function (circle, rect, response) {

    // quick check for center inside rect
    var collision = pointRect(circle.position, rect);

    if(!collision) {

        var near = closestPointRect(circle.position, rect, _v1);

        if (!pointCircle(near, circle)) {

            return false;
        }

    }

    if (response) {

        //@todo near?
        var distance = circle.position.distanceTo(near);

        //@todo using too many vector here, use setters instead
        response.point = near;
        response.normal = circle.position._subtract(near).normalize();
        response.depth = circle.radius - distance;

    }

    return true;
};
