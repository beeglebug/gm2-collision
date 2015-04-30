/**
     * Determine the closest point on a rect to another point
     * @param  {[type]} point [description]
     * @param  {[type]} rect  [description]
     * @return {[type]}       [description]
     */
    module.exports = function( point, rect) {

//@todo use temp
        var closest = point.copy();

        if( point.x < rect.position.x ) {

            closest.x = rect.position.x;

        } else if ( point.x > rect.position.x + rect.width ) {

            closest.x = rect.position.x + rect.width;

        }

        if( point.y < rect.position.y ) {

            closest.y = rect.position.y;

        } else if ( point.y > rect.position.y + rect.height ) {

            closest.y = rect.position.y + rect.height;

        }

        return closest;
    };
