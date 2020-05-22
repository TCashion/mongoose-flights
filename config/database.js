// connect to mongoose library 
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/flights', {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true
});

// create shortcut to mongoose.connection object
const db = mongoose.connection;

// test connection
db.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});