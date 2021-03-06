const mongoose = require('mongoose')
const {Schema} = mongoose
const Bread = require('./bread')


const bakerSchema = new Schema({
    name: {
        type: String,
        required: true,
        enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe']
    },
    startDate: {
        type: Date,
        required: true
    },
    bio: String
}, {toJSON: {virtuals: true}})

// VIRTUAL SCHEMA
 bakerSchema.virtual('breads', {
     ref: 'Bread',
     localField: '_id',
     foreignField: 'baker'
 })

// CREATING BAKER MODEL & EXPORTING IT
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker