// require the flights database
const Flight = require('../models/flight');

// export module
module.exports = {
    create
};

// create a new destination data and add it to parent flight
function create(req, res) {
    // console.log('req.params.id: ', req.params.id)
    // console.log('req.body: ', req.body)
    // res.send('create new destination')
    Flight.findById(req.params.id, function(err, flight) {
        console.log(req.body)
        console.log(typeof req.body.destination)
        if (err) return res.redirect(`/flights/${flight._id}`);
        const newDestination = {
            destination: req.body.destination,
            arrival: req.body.arrival
        };
        flight.destinations.push(newDestination);
        console.log("success")
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`);
        });
    });
};