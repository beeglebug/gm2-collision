var Vector2 = require('gm2-vector2');

/**
 * Determine the closest point on a circle to a reference point
 * @param {Vector2} point a point in space
 * @param {Circle} circle a circle
 * @param {Vector2} vector
 * @return {Vector2} the closest point on the circle to the point
 */
module.exports = function( point, circle, vector ) {

    if(!vector) { vector =  new Vector2(); }

    vector.set(point.x, point.y);

    vector.subtract(circle.position);

    vector.setMagnitude(circle.radius);

    return vector.add(circle.position);
};
