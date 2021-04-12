let backend = require("../app");
let chai = require("chai");
let chaiHttp = require("chai-http");
let jasmine = require("jasmine");
let should = chai.should();
let Order = require("../models/Order");

chai.use(chaiHttp);

describe("Food Order System", function() {
    describe("Saving Orders", function() {
        it("save orders to a database", function() {
            const order = new Order({
                name: "_test_name_",
                price: "_test_price_"
            });
            chai.request(backend).post("/testPost").send(order).end(function () {
                expect(res).to.have.a.status(200);
            });
        });
    });
});
