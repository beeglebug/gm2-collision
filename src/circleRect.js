var closestPointRect = require('./closestPointRect');
var pointCircle = require('./pointCircle');

/**
 * Check collision between a Circle and a Rect
 * @param  {[type]} circle   [description]
 * @param  {[type]} rect     [description]
 * @param  {[type]} response [description]
 * @return {[type]}          [description]
 */
module.exports = function (circle, rect, response) {

    var near = closestPointRect(circle.position, rect);

    if (pointCircle(near, circle)) {

        if (response) {

            var distance = circle.position.distanceTo(near);

            response.point = near;
            response.normal = circle.position._subtract(near).normalize();
            response.depth = circle.radius - distance;
        }

        return true;

    }

    return false;
};
