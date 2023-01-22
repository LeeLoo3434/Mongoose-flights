const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport:{
        type:String,
        enum: ['American', 'Southwest', 'Alaska Airlines', 'United']
    },
    arrival:Date,
    })

const flightSchema = new Schema({
    airline:{
        type:String,
        enum: ['American', 'Southwest', 'Alaska Airlines', 'United']
    } ,
    airport:{
        type:String,
        enum: ['AUS','DFW','DEN','LAX','SAN']
    },
    flightNum:{
        type:Number,
        min:10,
        max:9999
    },

    departs: {
        type: Date,
        required: true,
        default: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
        },
        destinations:[destinationSchema]
    }, {
    timestamps:true
})

module.exports = mongoose.model('Flight', flightSchema);