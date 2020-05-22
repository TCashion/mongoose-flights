const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American','Southwest','United'],
        required: true
    },
    airport: {
        type: String, 
        default: 'DEN', 
        enum: ['AUS','DFW','DEN','LAX','SAN'],
        required: true
    },
    flightNo: {
        type: Number, 
        min: 10,
        max: 9999, 
        required: true
    },
    departs: {
        type: Date, 
        default: function() {
            let nextYear = new Date(); 
            nextYear.setFullYear(nextYear.getFullYear() + 1);
            return nextYear; 
        }
    }
}, {
    timestamps: true
});

// compile schema into a model, and export it:
module.exports = mongoose.model('Flight', flightSchema);