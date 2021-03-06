// DEPENDENCIES
const express = require('express')
const baker = express.Router()
const Baker = require('../models/baker.js')
const bakerSeedData = require('../models/baker_seed.js')

baker.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedData)
    .then(() => {res.redirect('/breads')})
})

// INDEX ROUTE
baker.get('/', (req, res) => {
    Baker.find()
    .populate('breads') // REF VIRTUAL SCHEMA
    .then(foundBakers => {
        res.send(foundBakers)
    })
})

// SHOW ROUTE
baker.get('/:id', (req, res) => {
    Baker.findById(req.params.id)
    .populate('breads')
    .then(foundBaker => {
        res.render('bakerShow', {
            baker: foundBaker
        })
    })
})

module.exports = baker