// require the flights model
const Flight = require('../models/flight');
// require the tickets model
const Ticket = require('../models/ticket');

// export module 
module.exports = {
    new: newTicket
};

function newTicket(req, res) {
    res.send('New Ticket');
};