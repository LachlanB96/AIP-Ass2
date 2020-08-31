let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../index");

var assert = require('chai').assert


chai.use(chaiHttp);

describe("API", () => {

    describe("GET /api/users", () => {
        it ("It should return an object", (done) => {
            chai.request(server)
                .get("/api/users")
                .end((err, res) => {
                    assert.equal(res.status, 200, "Status is 200");
                    assert.isObject(res.body);
                done();
            })
        })
    })

    describe("GET LachlanB user /api/users/lachlanb", () => {
        it("Admin field of user should be boolean.", (done) => {
            chai.request(server)
                .get("/api/users/lachlanb")
                .end((err, res) => {
                    assert.isBoolean(res.body.admin, "Admin status is boolean.");
                    assert.equal(res.body.password, 'hunter2');
                    done();
                })
        })
    })

    

    describe("GET unknown user /api/users/unknown", () => {
        it("Get user 'unknown' who doesn't exist.", (done) => {
            chai
            .request(server)
            .get("/api/users/unknown")
            .end((err, res) => {
                assert.notExists(res.body);
                done();
            })
        })
    })

    describe("Create unknown user /api/users/add/", () => {
        it("Create user 'unknown'", (done) => {
            chai
                .request(server)
                .post("/api/users/add")
                .send({
                    username: 'unknown',
                    password: 'password1',
                    admin: 'false'
                })
                .end((err, res) => {
                    assert.equal(res.body.success, 'true');
                    done();
                })
        })
    })

    describe("GET unknown user /api/users/unknown", () => {
        it("Get user 'unknown' who DOES NOW exist.", (done) => {
            chai
                .request(server)
                .get("/api/users/unknown")
                .end((err, res) => {
                    assert.exists(res.body);
                    done();
                })
        })
    })

    describe("DELETE /api/users/delete/<username>", () => {
        it("DELETE user 'unknown'.", (done) => {
            chai
                .request(server)
                .delete("/api/users/delete/unknown")
                .end((err, res) => {
                    assert.exists(res.body);
                    done();
                })
        })
    })
    describe("GET unknown user /api/users/unknown", () => {
        it("Get user 'unknown' who doesn't exist.", (done) => {
            chai
                .request(server)
                .get("/api/users/unknown")
                .end((err, res) => {
                    assert.notExists(res.body);
                    done();
                })
        })
    })

    // describe("POST /api/increment", () => {
    //     it ("Increment { count } by 2 via POST", async () => {
    //         chai
    //         .request(server)
    //         .post("/api/increment")
    //         .send({increment: 2})
    //         .end((err, res) => {
    //             if (err) return done(err);
    //             assert.equal(res.status, 200);
    //             assert.equal(res.body.count, 2);
    //         })
    //     })
    //     it ("Increment { count } by 3 via POST", async () => {
    //         chai
    //         .request(server)
    //         .post("/api/increment")
    //         .send({increment: 3})
    //         .end((err, res) => {
    //             if (err) return done(err);
    //             assert.equal(res.status, 200);
    //             assert.equal(res.body.count, 5);
    //         })
    //     })
    //     it ("Increment { count } by not 3 via POST", async () => {
    //         chai
    //         .request(server)
    //         .post("/api/increment")
    //         .send({increment: 20})
    //         .end((err, res) => {
    //             if (err) return done(err);
    //             assert.equal(res.status, 200);
    //             assert.notEqual(res.body.count, 8);
    //         })
    //     })
    // })
});