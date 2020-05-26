// require the flights model
const Flight = require('../models/flight');
// require the tickets model
const Ticket = require('../models/ticket');

// export module 
module.exports = {
    new: newTicket, 
    create
};

function newTicket(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        const currentFlight = flight; 
        res.render('tickets/new', {
            title: "New Ticket", 
            flight: currentFlight
        });
    });
};

function create(req, res) {
    const flightId = req.params.flightId
    req.body.flight=flightId;
    Ticket.create(req.body, function(err, ticket) {
        res.redirect(`/flights/${flightId}`)
    });
};