let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../index");

var assert = require('chai').assert

var Cookies;

chai.use(chaiHttp);

describe("API", () => {

    describe("GET /api/count", () => {
        it ("It should GET the count", (done) => {
            chai.request(server)
                .get("/api/count")
                .end((err, res) => {
                    assert.equal(res.status, 200, "Status is 200");
                    assert.equal(res.body.count, 0, "Count is 0");
                done();
            })
        })
    })

    describe("POST /api/increment", () => {
        it ("Increment { count } by 2 via POST", async () => {
            chai
            .request(server)
            .post("/api/increment")
            .send({increment: 2})
            .end((err, res) => {
                if (err) return done(err);
                assert.equal(res.status, 200);
                assert.equal(res.body.count, 2);
            })
        })
        it ("Increment { count } by 3 via POST", async () => {
            chai
            .request(server)
            .post("/api/increment")
            .send({increment: 3})
            .end((err, res) => {
                if (err) return done(err);
                assert.equal(res.status, 200);
                assert.equal(res.body.count, 5);
            })
        })
        it ("Increment { count } by not 3 via POST", async () => {
            chai
            .request(server)
            .post("/api/increment")
            .send({increment: 20})
            .end((err, res) => {
                if (err) return done(err);
                assert.equal(res.status, 200);
                assert.notEqual(res.body.count, 8);
            })
        })
    })
});