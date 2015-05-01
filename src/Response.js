var Vector2 = require('gm2-vector2');

/**
 * a generic collision response object to hold information about a collision
 * @constructor
 */
var Response = function () {

    this.point = new Vector2();

    this.normal = new Vector2();

    this.depth = 0;

    this._mtd = new Vector2()

};

/**
 * reset all values to reuse in another test
 */
Response.prototype.clear = function () {

    this.point.zero();
    this.normal.zero();
    this.depth = 0;
    this._mtd.zero();
};

/**
 * get the minimum translation distance
 */
Object.defineProperty(Response.prototype, 'mtd', {

    get: function () {

        return this._mtd.set(this.normal).multiply(this.depth);

    }

});

module.exports = Response;