var expect = require('chai').expect;
var it = require('mocha').it;

var Collision = require('../index.js');
var Response = require('../index.js').Response;
var Rect = require('gm2-rect');

module.exports = function () {

    it('detects collisions', function () {

        var rect1 = new Rect(5, 5);
        var rect2 = new Rect(10, 10);

        // left edge
        rect1.position.set(-3, 2);
        expect( Collision.rectRect(rect1, rect2) ).to.be.true;

        // right edge
        rect1.position.set(9, 3);
        expect( Collision.rectRect(rect1, rect2) ).to.be.true;

        // top edge
        rect1.position.set(3, -2);
        expect( Collision.rectRect(rect1, rect2) ).to.be.true;

        // bottom edge
        rect1.position.set(8, 9);
        expect( Collision.rectRect(rect1, rect2) ).to.be.true;

        // inside
        rect1.position.set(2, 2);
        expect( Collision.rectRect(rect1, rect2) ).to.be.true;
    });

    it('detects non collisions', function () {

        var rect1 = new Rect(2, 2);
        var rect2 = new Rect(4, 4);

        // left edge
        rect1.position.set(-2, 1);
        expect( Collision.rectRect(rect1, rect2) ).to.be.false;

        // right edge
        rect1.position.set(4, 1);
        expect( Collision.rectRect(rect1, rect2) ).to.be.false;

        // top edge
        rect1.position.set(1, -2);
        expect( Collision.rectRect(rect1, rect2) ).to.be.false;

        // bottom edge
        rect1.position.set(1, 4);
        expect( Collision.rectRect(rect1, rect2) ).to.be.false;
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

        // left edge
        rect1.position.set(-2, 1);
        expect( Collision.rectRect(rect1, rect2, response) ).to.be.true;

        // right edge
        rect1.position.set(4, 1);
        expect( Collision.rectRect(rect1, rect2, response) ).to.be.true;

        // top edge
        rect1.position.set(1, -2);
        expect( Collision.rectRect(rect1, rect2, response) ).to.be.true;

        // bottom edge
        rect1.position.set(1, 4);
        expect( Collision.rectRect(rect1, rect2, response) ).to.be.true;

        // inside
        rect1.position.set(1, 1);
        expect( Collision.rectRect(rect1, rect2, response) ).to.be.true;


    });

};
