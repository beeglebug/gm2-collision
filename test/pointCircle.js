var expect = require('chai').expect;
var it = require('mocha').it;

var Collision = require('../index.js');
var Response = require('../index.js').Response;
var Circle = require('gm2-circle');
var Vector2 = require('gm2-vector2');

module.exports = function () {

    it('detects collisions', function () {

        var point = new Vector2(5,5);
        var circle = new Circle(10);

        var collision = Collision.pointCircle(point, circle);

        expect(collision).to.be.true;
    });

    it('detects non collisions', function () {

        var point = new Vector2(10,10);
        var circle = new Circle(10);

        var collision = Collision.pointCircle(point, circle);

        expect(collision).to.be.false;
    });

    it('sets response properties', function () {

        var point = new Vector2(5,5);
        var circle = new Circle(10);

        var response = new Response();

        var collided = Collision.pointCircle(point, circle, response);

        expect(collided).to.be.true;
        expect(response.point.x).to.equal(7.071067811865475);
        expect(response.point.y).to.equal(7.071067811865475);
        expect(response.normal.x).to.equal(0.7071067811865475);
        expect(response.normal.y).to.equal(0.7071067811865475);
        expect(response.depth).to.equal(2.9289321881345245);
    });

};
