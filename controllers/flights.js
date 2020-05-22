// require the flights database
const Flight = require('../models/flight');

// set up index view
function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {flights})
    });
};

// export module
module.exports = {
    index
};