let backend = require("../app");
let chai = require("chai");
let chaiHttp = require("chai-http");
let jasmine = require("jasmine");
let should = chai.should();
let User = require("../models/Users");

chai.use(chaiHttp);

describe("User Account Functionality", function() {
    describe("/POST User Account Creation", function() {
        it("creates an account", function() {
            const user = new User({
                account_type: "_test_account_type_",
                first_name: "_test_first_name_",
                last_name: "_test_last_name_",
                email: "_test_email_",
                password: "_test_pass_"
            });
            chai.request(backend).post('/users/register').send(user).end(function(err, res) {
                expect(res).to.have.status(200);
            });
        });
    });
    describe("/POST Authenticate User", function() {
        it("authenticates an account", function() {
            let auth = {
                email: "_test_email_",
                password: "_test_pass_"
            }
            chai.request(backend).post('/users/authenticate').send(auth).end(function(err, res) {
                expect(res).to.have.a.status(200);
            });
        });
    });
});