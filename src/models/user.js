'use strict';


module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define('User', {
    id          : {
      type        : DataTypes.NUMBER,
      primaryKey  : true

    },
    first_name  : DataTypes.STRING,
    last_name   : DataTypes.STRING,
    user_name   : DataTypes.STRING
  });

  return User;
};