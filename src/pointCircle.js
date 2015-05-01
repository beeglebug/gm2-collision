/**
 * calculate collision between a point and a Circle
 * @param  {[type]} point  [description]
 * @param  {[type]} circle [description]
 * @return {[type]}        [description]
 */
module.exports = function (point, circle) {

    var dx = Math.abs(circle.position.x - point.x),
        dy = Math.abs(circle.position.y - point.y);

    return (dx * dx) + (dy * dy) < (circle.radius * circle.radius);

};
