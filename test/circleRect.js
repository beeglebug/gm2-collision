var expect = require('chai').expect;
var it = require('mocha').it;

var Collision = require('../index.js');
var Response = require('../index.js').Response;
var Circle = require('gm2-circle');
var Rect = require('gm2-rect');

module.exports = function() {

    it('detects collisions', function() {

	var circle = new Circle(5);
	var rect = new Rect(10,10);

	circle.position.set(12,5);
	
	expect(Collision.circleRect(circle, rect)).to.be.true;

	circle.position.set(5,5);

	expect(Collision.circleRect(circle, rect)).to.be.true;

    });

    it('detects non collisions', function() {

	var circle = new Circle(5);
	var rect = new Rect(10,10);

	circle.position.set(15,5);

	var collided1 = Collision.circleRect(circle, rect)
	circle.position.set(-5,5);
	var collided2 = Collision.circleRect(circle, rect)
	
	expect(collided1).to.be.false;
	expect(collided2).to.be.false;
    });

    it('sets response properties', function() {

	var circle = new Circle(10);
	var rect = new Rect(10,10);

	var response = new Response();

	circle.position.set(15,5);

	var collided = Collision.circleRect(circle, rect, response);

	expect(collided).to.be.true;
	expect(response.point.x).to.equal(10);
	expect(response.point.y).to.equal(5);
	expect(response.normal.x).to.equal(1);
	expect(response.normal.y).to.equal(0);
	expect(response.depth).to.equal(5);
	

    });

}
