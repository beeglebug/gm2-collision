var expect = require('chai').expect;
var it = require('mocha').it;

var Collision = require('../index.js');
var Circle = require('gm2-circle');
var Vector2 = require('gm2-vector2');

module.exports = function () {

    it('works inside the circle', function () {

        var point = new Vector2(5,5);
        var circle = new Circle(10);

        var closest = Collision.closestPointCircle(point, circle);

        expect(closest.x).to.equal(7.071067811865475);
        expect(closest.y).to.equal(7.071067811865475);
    });

    it('works outside the circle', function () {

        var point = new Vector2(-15,-15);
        var circle = new Circle(10);

        var closest = Collision.closestPointCircle(point, circle);

        expect(closest.x).to.equal(-7.071067811865475);
        expect(closest.y).to.equal(-7.071067811865475);
    });

};
