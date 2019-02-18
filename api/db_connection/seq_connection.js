
//////// DEPENDENCIES, MODULES ///////////////////////////////////////////

const Sequelize = require('sequelize')





//////// DATABASE CONNECTION ////////////////////////////////////////////

const connection = new Sequelize(
    "tmnt_db",
    "postgres",
    "postgres",
  {
    host: "tmnt-pg",
    port: 5432,
    dialect: 'postgres', // this line is required for connection to work with postgres
    pool:{max: 5, min: 0, acquire: 30000, idle: 10000},
    operatorsAliases: false,  // this stops console logs of sequelize deprecations
    logging: false // this stops console logs of the SQL that sequelize generates/executes
  }
)




//////// TEST CONNECTION AND CONSOLE LOG /////////////////////////////////

connection.authenticate({
  logging: false // this stops console log of the SQL sequelize executes for authenticate()
})
  .then(() => console.log(`\n\t >>> Sequelize Connection to 'tmnt_db' Successful \n\n`))
  .catch(err => console.log('\n\t Error: Unable to connect to the database : \n\n', err))






//////// EXPORT MODULE /////////////////////////////////////////////////

module.exports = connection





// END
