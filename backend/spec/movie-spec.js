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

describe("Movie Functionality", function() {
    beforeAll(async function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
        await asyncCall();
    });

    describe("/POST Add Movie", function() {
        it("adds a movie to the now-showing list", function() {
            chai.request(backend).post('/movies/addmovie').send({
                movieid: 44446,
                title: "_test_title_",
            }).end(function(err, res) {
                expect(res.status).toBe(200);
                if(err) return err;
            });
        });
    });

    describe("/POST Delete Item", function() {
        it("deletes an item from the cart", function() {
            chai.request(backend).post('/movies/deletemovie').send({
                movieid: 12345
            }).end(function(err, res) {
                expect(res.status).toBe(200);
                if(err) return err;
            });
        });
    });
    
    describe("/GET Return All Movies Now-Showing", function() {
        it("returns all movies now-showing", function() {
            chai.request(backend).get('/movies/nowshowing').end(function(err, res) {
                expect(res.status).toBe(200);
                console.log(res.body);
            });
        });
    });
});