const Sequelize = require('sequelize')
const db = require('../database')

const Fruit = db.define('fruit', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    }, 
    color: {
        type: Sequelize.STRING,
        allowNull: false,    }, 
    flavor: {
        type: Sequelize.STRING,
        allowNull: false,    }
})

module.exports = Fruit