// require the flights database
const Flight = require('../models/flight');

// export module
module.exports = {
    create, 
    delete: deleteOne
};

// create a new destination data and add it to parent flight
function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        if (err) return res.redirect(`/flights/${flight._id}`);
        const newDestination = {
            destination: req.body.destination,
            arrival: req.body.arrival
        };
        flight.destinations.push(newDestination);
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`);
        });
    });
};

function deleteOne(req, res) { 
    Flight.findOne({"destinations._id" : req.params.id}, function(err, flight) {
        flight.destinations.id(req.params.id).remove();
        flight.save(function(err) {
            // if (err) res.redirect(`/flights/${flight._id}`);
            res.redirect(`/flights/${flight._id}`);
        });
    });
};