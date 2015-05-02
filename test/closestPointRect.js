var expect = require('chai').expect;
var it = require('mocha').it;

var Collision = require('../index.js');
var Rect = require('gm2-rect');
var Vector2 = require('gm2-vector2');

module.exports = function () {

    it('works inside the rect', function () {

        var point = new Vector2(6, 5);
        var rect = new Rect(10, 10);

        var closest = Collision.closestPointRect(point, rect);

        expect(closest.x).to.equal(10);
        expect(closest.y).to.equal(5);
    });

    it('works outside the rect', function () {

        var point = new Vector2(15, 15);
        var rect = new Rect(10, 10);

        var closest = Collision.closestPointRect(point, rect);

        expect(closest.x).to.equal(10);
        expect(closest.y).to.equal(10);
    });

};
