// require the flights database
const Flight = require('../models/flight');

// export module
module.exports = {
    index, 
    new: newFlight
};

// set up index view
function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {flights})
    });
};

// render new flight view
function newFlight(req, res) {
    res.render('flights/new');
};




