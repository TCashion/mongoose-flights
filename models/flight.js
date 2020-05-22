const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

const flightSchema = new Schema({
    airline: String,
    airport: {
        type: String, 
        default: 'DEN'
    },
    flightNo: Number, 
    departs: {
        type: Date, 
        default: function() {
            let nextYear = new Date(); 
            nextYear.setFullYear(nextYear.getFullYear() + 1)
            return nextYear; 
        }
    }
});

// compile schema into a model, and export it:
module.exports = mongoose.model('Flight', flightSchema);