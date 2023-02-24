const Sequelize = require('sequelize')
const db = require('../database')

const Vegetable = db.define('vegetable', {
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

module.exports = Vegetable