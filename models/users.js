'use strict';
module.exports = function(sequelize, DataTypes) {
    var users = sequelize.define('users', {
          username: {
            type:DataTypes.STRING,
            unique: DataTypes.TRUE,
            allowNull: DataTypes.FALSE,
              validate: {
                isAlphanumeric: true,
                notNull: true
              }
          },
          email: {
            type:DataTypes.STRING,
            allowNull:false,
            validate: {
              isEmail: true,
              notEmpty: true
            }
          },
          password: {
            type:DataTypes.STRING,
            allowNull: false
            },
          }, {
              classMethods: {
                associate: function(models) {
                  // associations can be defined here
                }
              }
            });
          return users;
        };