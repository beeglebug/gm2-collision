var expect = require('chai').expect;
var it = require('mocha').it;

var Collision = require('../index.js');
var Response = require('../index.js').Response;
var Rect = require('gm2-rect');

module.exports = function () {

    it('detects collisions', function () {

        var rect1 = new Rect(5, 5);
        var rect2 = new Rect(10, 10);

        rect1.position.set(9, 3);
        var collision1 = Collision.rectRect(rect1, rect2);

        rect1.position.set(2, 2);
        var collision2 = Collision.rectRect(rect1, rect2);

        expect(collision1).to.be.true;
        expect(collision2).to.be.true;
    });

    it('detects non collisions', function () {

        var rect1 = new Rect(5, 5);
        var rect2 = new Rect(10, 10);

        rect1.position.set(10, 0);
        var collision1 = Collision.rectRect(rect1, rect2);

        rect1.position.set(0, 10);
        var collision2 = Collision.rectRect(rect1, rect2);

        expect(collision1).to.be.false;
        expect(collision2).to.be.false;
    });

    it('sets response properties', function () {

        var rect1 = new Rect(3, 3);
        var rect2 = new Rect(5, 5);
        var response = new Response();

        rect1.position.set(4.4, 1);
        var collided = Collision.rectRect(rect1, rect2, response);

        expect(collided).to.be.true;
        expect(response.point.x).to.equal(5);
        expect(response.point.y).to.equal(2.5);
        expect(response.normal.x).to.equal(1);
        expect(response.normal.y).to.equal(0);

        // lol precision
        expect(response.depth).to.be.closeTo(0.6, 0.00000000001);
    });

};
