var Vector2 = require('gm2-vector2');

/**
 * Determine the closest point on a rect to another point
 * @param  {[type]} point [description]
 * @param  {[type]} rect  [description]
 * @return {[type]}       [description]
 */
module.exports = function (point, rect, vector) {

    if(!vector) { vector =  new Vector2(); }

    vector.set(point);

    if( point.x < rect.position.x ) {

        vector.x = rect.position.x;

    } else if ( point.x > rect.position.x + rect.width ) {

        vector.x = rect.position.x + rect.width;

    }

    if( point.y < rect.position.y ) {

        vector.y = rect.position.y;

    } else if ( point.y > rect.position.y + rect.height ) {

        vector.y = rect.position.y + rect.height;

    }

    return vector;
};