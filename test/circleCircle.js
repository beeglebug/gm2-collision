var expect = require('chai').expect;
var it = require('mocha').it;

var Collision = require('../index.js');
var Response = require('../index.js').Response;
var Circle = require('gm2-circle');

module.exports = function () {

    it('detects collisions', function () {

        var circle1 = new Circle(3);
        var circle2 = new Circle(3);

        circle1.position.set(3, 3);
        circle2.position.set(8, 3);

        var collision = Collision.circleCircle(circle1, circle2);

        expect(collision).to.be.true;
    });

    it('detects non collisions', function () {

        var circle1 = new Circle(3);
        var circle2 = new Circle(3);

        circle1.position.set(3, 3);
        circle2.position.set(10, 3);

        var collision = Collision.circleCircle(circle1, circle2);

        expect(collision).to.be.false;
    });

    it('sets response properties', function () {

        var circle1 = new Circle(3);
        var circle2 = new Circle(3);

        circle1.position.set(3, 3);
        circle2.position.set(8, 3);

        var response = new Response();

        var collision = Collision.circleCircle(circle1, circle2, response);

        expect(collision).to.be.true;

        expect(response.point.x).to.equal(5);
        expect(response.point.y).to.equal(3);
        expect(response.normal.x).to.equal(1);
        expect(response.normal.y).to.equal(0);
        expect(response.depth).to.equal(1);
    });

};
