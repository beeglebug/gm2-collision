/**
 * Determine the closest point on a rect to another point
 * @param  {[type]} point [description]
 * @param  {[type]} rect  [description]
 * @return {[type]}       [description]
 */
module.exports = function (point, rect) {

    // @todo use temp vec
    var closest = point.copy();

    var top = rect.position.y;
    var left = rect.position.x;
    var right = left + rect.width;
    var bottom = top + rect.height;

    // clamp to inside?
    var x = Math.min(point.x, Math.max(left, right));
    var y = Math.min(point.y, Math.max(top, bottom));

    var dl = Math.abs(x - left);
    var dr = Math.abs(x - right);
    var dt = Math.abs(y - top);
    var db = Math.abs(y - bottom);

    var min = Math.min(dl, dr, dt, db);

    if(min == dt) { closest.set(x, top); }
    else if(min == db) { closest.set(x, bottom); }
    else if(min == dl) { closest.set(left, y); }
    else { closest.set(right, y); }

    return closest;
};