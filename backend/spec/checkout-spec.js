let backend = require("../app.js");
let chai = require("chai");
let chaiHttp = require("chai-http");
let jasmine = require("jasmine");
let should = chai.should();
let User = require("../models/Users");
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

describe("Checkout Functionality", function() {
    beforeAll(async function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
        await asyncCall();
    });

    describe("/POST Add Item", function() {
        it("registers an item to the cart", function() {
            chai.request(backend).post('/Checkout/addItem').send({
                name: "_test_name_",
                price: "_test_price_",
            }).end(function(err, res) {
                expect(res.status).toBe(200);
                if(err) return err;
            });
        });
    });

    describe("/POST Delete Item", function() {
        it("deletes an item from the cart", function() {
            chai.request(backend).post('/Checkout/deleteItem').send({
                order: {
                    name: "_test_name_"
                }
            }).end(function(err, res) {
                expect(res.status).toBe(200);
                if(err) return err;
            });
        });
    });
    
    describe("/GET Return All Items in Cart", function() {
        it("returns all items in the cart", function() {
            chai.request(backend).get('/Checkout').end(function(err, res) {
                expect(res.status).toBe(200);
                console.log(res.body);
            });
        });
    });
});