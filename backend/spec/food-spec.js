let backend = require("../app");
let chai = require("chai");
let chaiHttp = require("chai-http");
let jasmine = require("jasmine");
let should = chai.should();
let Order = require("../models/Order");
chai.use(chaiHttp);

function resolveAfter5Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve('resolved');
        }, 4000);
    });
}

async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter5Seconds();
    console.log(result);
}

asyncCall();

describe("Food Order System", function() {
    beforeAll(async function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
        await asyncCall();
    });

    describe("Saving Orders", function() {
        it("save orders to a database", function() {
            const order = new Order({
                name: "_test_name_",
                price: "_test_price_"
            });
            chai.request(backend).post("/testPost").send(order).end(function () {
                expect(res.status).toBe(200);
            });
        });
    });
});
