// require the flights database
const Flight = require('../models/flight');

// export module
module.exports = {
    index, 
    new: newFlight, 
    create
};

// set up index view
function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {
            flights,
            title: "View Flights"
        })
    });
};

// render new flight view
function newFlight(req, res) {
    res.render('flights/new', {
        title: "Add Flight"
    });
};

// create new flight data
function create(req, res) {
    // create the new document
    const flight = new Flight(req.body);
    flight.save(function(err) {
        // returns to new form if data not valid 
        if (err) return res.redirect('/flights/new');
        res.redirect('/flights');
    });
};



