// require the flights model
const Flight = require('../models/flight');
// require the tickets model
const Ticket = require('../models/ticket');

// export module
module.exports = {
    index, 
    new: newFlight, 
    create, 
    show, 
    delete: deleteFlight
};

// set up index view
function index(req, res) {
    Flight.find({}, function(err, flights) {
        const currentTime = new Date(); 
        // reorder flights from oldest to newest
        flights.sort(function(a, b) {
            return a.departs - b.departs
        });
        res.render('flights/index', {
            flights,
            // flights: flightOrder,
            title: "View Flights", 
            currentTime
        });
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

// show details page
function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        // query for the associated tickets
        Ticket.find({flight: flight._id}, function(err, tickets) {
            
        });
        // sort arrival times in ascending order
        flight.destinations.sort(function(a, b) {
            return a.arrival - b.arrival;
        });
        res.render('flights/show', {
            flight, 
            title: "Details"
        });
    });
};

// delete a flight
function deleteFlight(req, res) {
    Flight.deleteOne({ _id: req.params.id}, function(err) {
        res.redirect('/flights');
    });
};