//////// DEPENDENCIES, MODULES, CONFIGURATIONS ///////////////////////

const Sequelize = require('sequelize');
const connection = require('../db_connection/seq_connection')




//////// MODEL ////////////////////////////////////////////////////////

const TurtleModel = connection.define("turtles",
  {
    turtle_id: {
      type: Sequelize.INTEGER,
			allowNull: false,
			primaryKey: true,
    },
    turtle_name: {
      type: Sequelize.STRING(150),
      allowNull: false
    },
    turtle_color: {
      type: Sequelize.STRING(150),
      allowNull: false
    },
    turtle_weapon: {
      type: Sequelize.STRING(150),
      allowNull: false
    },
  },
  {
    timestamps: false, // disable auto-generated timestamps
    freezeTableName: true, // disables plualizing table name
    underscored: true, // disables camelCase and uses course_id instead when referenced in other models
  }
)




//////// EXPORT MODULES ///////////////////////////////////////////////

module.exports = TurtleModel





// END
