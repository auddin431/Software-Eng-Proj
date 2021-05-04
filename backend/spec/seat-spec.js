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

describe("Seat Selection Functionality", function() {
    beforeAll(async function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
        await asyncCall();
    });

    describe("/POST Add Seats", function() {
        it("registers a seat", function() {
            chai.request(backend).post('/SeatSelection/addSeats').send({
                movieTitle: "_test_movie_title_",
                moviePrice: 12,
                totalSeats: 1,
                seatNumbers: "_test_seat_numbers_"
            }).end(function(err, res) {
                expect(res.status).toBe(200);
                if(err) return err;
            });
        });
    });
    
    describe("/GET Return All Seats", function() {
        it("returns all seats", function() {
            chai.request(backend).get('/SeatSelection').end(function(err, res) {
                expect(res.status).toBe(200);
                console.log(res.body);
            });
        });
    });
});