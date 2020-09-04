let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../index");

var assert = require('chai').assert

chai.use(chaiHttp);

describe("API", () => {


    //UNIT TESTS
    describe("GET /api/users", () => {
        it ("It should return an object that exists", (done) => {
            chai.request(server)
                .get("/api/users")
                .end((err, res) => {
                    assert.equal(res.status, 200, "Server is operational.");
                    assert.isObject(res.body);
                done();
            })
        })
    })

    describe("GET /api/users/lachlanb", () => {
        it("Should return an object with the correct properties.", (done) => {
            chai.request(server)
                .get("/api/users/lachlanb")
                .end((err, res) => {
                    assert.isBoolean(res.body.admin, "Admin status is boolean.");
                    assert.equal(res.body.password, 'hunter2');
                    done();
                })
        })
    })

    
    //END-TO-END TESTS
    /* We will:
    * Check non-existent user
    * Create user
    * Check user now exists
    * Delete the user
    * Check the user no longer exists
    * 
    * NOTE, this is probably not the best way to do end-to-end tests.
    *    The extra checks between each request seem redundant, but I do
    *   not know a better solution yet.
    */
    describe("GET /api/users/unknown (unknown does not exist)", () => {
        it("Should fail to get user 'unknown' who doesn't exist.", (done) => {
            chai
            .request(server)
            .get("/api/users/unknown")
            .end((err, res) => {
                assert.notExists(res.body);
                done();
            })
        })
    })

    describe("POST Create unknown user /api/users/add/", () => {
        it("Should Create user 'unknown'", (done) => {
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
});