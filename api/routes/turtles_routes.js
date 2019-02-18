////////// DEPENDENCIES, MODULES, CONFIGURATIONS ////////////////////////

const express = require('express')
const router = express.Router()



////////// MODELS //////////////////////////////////////////////////////

const TurtleModel = require('../models/turtle_model')





///////// GET ALL //////////////////////////////////////////////////////

router.get('/api/turtles', (req, res) => {
    TurtleModel.findAll()
    .catch((err) => {
      res.status(400).send(err)
      console.log('\n\t Error: "GET ALL TURTLES" Service Failed \n', err)
    })
    .then((turtles) => res.status(200).json(turtles))
})



////////// EXPORT MODULES /////////////////////////////////////////////////

module.exports = router




// END
