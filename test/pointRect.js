var expect = require('chai').expect;
var it = require('mocha').it;

var Collision = require('../index.js');
var Response = require('../index.js').Response;
var Rect = require('gm2-rect');
var Vector2 = require('gm2-vector2');

module.exports = function () {

    it('detects collisions', function () {

        var point = new Vector2(3,3);
        var rect = new Rect(10,10);

        var collision = Collision.pointRect(point, rect);

        expect(collision).to.be.true;
    });

    it('detects non collisions', function () {

        var point = new Vector2(15,15);
        var rect = new Rect(10,10);

        var collision = Collision.pointRect(point, rect);

        expect(collision).to.be.false;
    });

    it('handled edges correctly', function () {

        var point = new Vector2();
        var rect = new Rect(10,10);

        expect(
            Collision.pointRect(point.set(10,5), rect)
        ).to.be.false;

        expect(
            Collision.pointRect(point.set(5,10), rect)
        ).to.be.false;

        expect(
            Collision.pointRect(point.set(5,-1), rect)
        ).to.be.false;

        expect(
            Collision.pointRect(point.set(-1,5), rect)
        ).to.be.false;
    });

    it('sets response properties', function () {

        var point = new Vector2(5,5);
        var rect = new Rect(10,10);

        var response = new Response();

        var collided = Collision.pointRect(point, rect, response);

        expect(collided).to.be.true;
        //@todo check response
        //expect(response.point.x).to.equal(7.071067811865475);
        //expect(response.point.y).to.equal(7.071067811865475);
        //expect(response.normal.x).to.equal(0.7071067811865475);
        //expect(response.normal.y).to.equal(0.7071067811865475);
        //expect(response.depth).to.equal(2.9289321881345245);
    });

};
