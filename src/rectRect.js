var Vector2 = require('gm2-vector2');
var closestPointRect = require('./closestPointRect');

// temp vector
var _v1 = new Vector2();

/**
 * Check collision between two Rects
 * @param  {[type]} r1 [description]
 * @param  {[type]} r2 [description]
 * @return {[type]}    [description]
 */
module.exports = function ( rect1, rect2, response ) {

    // work out the half widths and half heights
    var hw1 = rect1.width / 2;
    var hw2 = rect2.width / 2;
    var hh1 = rect1.height / 2;
    var hh2 = rect2.height / 2;

    // get the centers of the two rects
    var c1 = rect1.center;
    var c2 = rect2.center;

    // the distances between the two centers
    var distance = _v1.set(c1).subtract(c2).abs();

    // the total widths and heights
    var totalWidth = hw1 + hw2;
    var totalHeight = hh1 + hh2;

    var collision = (totalWidth > distance.x) && (totalHeight > distance.y);

    if(!collision) { return false; }

    if(response) {

        var x = totalWidth - distance.x;
        var y = totalHeight - distance.y;

        // calculate the response normal
        if(Math.abs(x) < Math.abs(y)) {

            if(c1.x - c2.x < 0) {
                _v1.x = -x;
            } else {
                _v1.x = x;
            }

        } else {

            if(c1.y - c2.y < 0) {
                _v1.y = -y;
            } else {
                _v1.y = y;
            }

        }

        closestPointRect(rect1.center, rect2, response.point);
        response.normal.set(_v1).normalize();
        response.depth = _v1.magnitude();
    }

    return true;
};