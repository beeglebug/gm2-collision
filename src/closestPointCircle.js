var Vector2 = require('gm2-vector2');
var pointCircle = require('./pointCircle');

/**
 * Determine the closest point in a circle to a reference point
 * @param {Vector2} point a point in space
 * @param {Circle} circle a circle
 * @param {Vector2} vector
 * @return {Vector2} the closest point in the circle to the point
 */
module.exports = function( point, circle, vector ) {

    if(!vector) { vector =  new Vector2(); }

    vector.set(point.x, point.y);

    // check if it's inside first
    if(pointCircle(point, circle)) {
        return vector;
    }

    vector.subtract(circle.position);

    vector.setMagnitude(circle.radius);

    return vector.add(circle.position);
};
