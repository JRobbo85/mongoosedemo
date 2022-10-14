const mongoose = require('mongoose')

const tvSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },

    network: {
        type: String,
        default: "Not Specified",

    },

    timeslot: {
        type: String,
        default: "Not Specified"
    },

    day: {
        type:String,
        default: "Not Specified"
    }


})

const TV = mongoose.model("TVList", tvSchema)

module.exports = TV