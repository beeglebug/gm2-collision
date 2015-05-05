var expect = require('chai').expect;
var it = require('mocha').it;

var Response = require('../index.js').Response;
var Vector2 = require('gm2-vector2');

module.exports = function () {

    it('instantiates', function () {

        var response = new Response();

        expect(response.point).to.be.instanceOf(Vector2);
        expect(response.point.x).to.equal(0);
        expect(response.point.y).to.equal(0);
        expect(response.normal).to.be.instanceOf(Vector2);
        expect(response.normal.x).to.equal(0);
        expect(response.normal.y).to.equal(0);
        expect(response.depth).to.be.a('number');
        expect(response.depth).to.equal(0);

    });

    it('clears itself', function () {

        var response = new Response();
        response.point.set(2, 3);
        response.normal.set(4, 5);
        response.depth = 3;

        response.clear();

        expect(response.point.x).to.equal(0);
        expect(response.point.y).to.equal(0);
        expect(response.normal.x).to.equal(0);
        expect(response.normal.y).to.equal(0);
        expect(response.depth).to.equal(0);
    });

    it('clears mtd', function () {

        var response = new Response();
        response.normal.set(4, 5);
        response.depth = 3;

        // force mtd calculation
        var mtd = response.mtd;

        response.clear();

        expect(response.mtd.x).to.equal(0);
        expect(response.mtd.y).to.equal(0);

    });

    it('returns mtd', function () {

        var response = new Response();

        response.point.set(2, 3);
        response.normal.set(4, 5);
        response.depth = 3;


        expect(response.mtd).to.be.instanceOf(Vector2);
        expect(response.mtd.x).to.equal(12);
        expect(response.mtd.y).to.equal(15);


    });

};
