'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('users', {
            id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
            },
            username: {
              type: Sequelize.String,
              unique: true,
              allowNull: false
            },
            email: {
              type: Sequelize.String,
              allowNull: false
            },
            password: {
                type: Sequelize.String,
                allowNull: false
            },
            createdAt: {
                  allowNull: false,
                  type: Sequelize.DATE
            },
                updatedAt: {
                  allowNull: false,
                  type: Sequelize.DATE
            }
              });
          }, down: function(queryInterface, Sequelize) {
            return queryInterface.dropTable('users');
          }
        };