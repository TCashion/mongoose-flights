// require the flights model
const Flight = require('../models/flight');
// require the tickets model
const Ticket = require('../models/ticket');

// export module 
module.exports = {
    new: newTicket
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