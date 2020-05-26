// require the flights model
const Flight = require('../models/flight');
// require the tickets model
const Ticket = require('../models/ticket');

// export module 
module.exports = {
    new: newTicket, 
    create, 
    delete: deleteTicket
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
    const flightId = req.params.id
    req.body.flight=flightId;
    Ticket.create(req.body, function(err, ticket) {
        res.redirect(`/flights/${flightId}`)
    });
};

function deleteTicket(req, res) {
    Ticket.deleteOne({_id: req.params.ticketId}, function(err) {
        res.redirect(`/flights/${req.params.flightId}`);        
    });
};