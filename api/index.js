//////// DEPENDENCIES, MODULES ///////////////////////////////////////////

const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')




//////// MIDDLE-WARE CONFIGURATIONS //////////////////////////////////////

//// allow body-parser to parse request.body ////
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//// allow cross-origin-resource-sharing ////
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});



//////////// START SERVER ON ENVIRONMENT PORT ////////////////////////

const PORT = 3000
// const HOST = '0.0.0.0'

// app.listen(PORT, HOST, () => {
app.listen(PORT, () => {
  console.log(`\n\t >>> TMNT API running on [ PORT: ${PORT} ]` )
})



///////////// ROUTES /////////////////////////////////////////////////

//// resource routes ////
const turtlesRoutes = require('./routes/turtles_routes')

app.use('/', turtlesRoutes)









// END
