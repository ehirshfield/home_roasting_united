var bcrypt = require("bcrypt");

module.exports = function(sequelize, DataTypes) {
  var Recipe = sequelize.define('Recipe', {
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING
    }
  },{
    classMethods: {
      generateHash: function(password){
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
      },
      validatePassword: function(password) {
        return bcrypt.compareSync(password, dbCheck);
      }
    }
  })
}
