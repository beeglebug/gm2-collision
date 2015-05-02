/**
 * calculate collision between a point and a Rect
 * @param  {[type]} point  [description]
 * @param  {[type]} rect [description]
 * @return {[type]}        [description]
 */
module.exports = function (point, rect, response) {

    var inside = (

        (point.x >= rect.position.x && point.x < rect.position.x + rect.width) &&
        (point.y >= rect.position.y && point.y < rect.position.y + rect.height)
    );

    if(inside) {

        if(response) {
            //@todo set response
            //closestPointCircle(point, circle, response.point);
            //response.normal.set(response.point).normalize();
            //response.depth = circle.radius - Math.sqrt((dx * dx) + (dy * dy));
        }

        return true;
    }

    return false;
};



