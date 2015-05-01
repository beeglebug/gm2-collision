var closestPointCircle = require('./closestPointCircle');

/**
 * calculate collision between a point and a Circle
 * @param  {[type]} point  [description]
 * @param  {[type]} circle [description]
 * @return {[type]}        [description]
 */
module.exports = function (point, circle, response) {

    var dx = Math.abs(circle.position.x - point.x),
        dy = Math.abs(circle.position.y - point.y);

    var inside = (dx * dx) + (dy * dy) < (circle.radius * circle.radius);

    if(inside) {

        if(response) {

            closestPointCircle(point, circle, response.point);
            response.normal.set(response.point).normalize();
            response.depth = circle.radius - Math.sqrt((dx * dx) + (dy * dy));
        }

        return true;
    }

    return false;
};
