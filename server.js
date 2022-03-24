const express = require('express')

// Configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// Important: Middleware should be added above your routes in your server.js file. Here, we are setting up which view engine will be used and requiring JSX so we can utilize it to build our views.

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!')
})

// Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

app.get('*', (req, res) => {
    res.send('ERROR 404')
})

// Listen
app.listen(PORT, () => {
    console.log('nomming at port', PORT)
})