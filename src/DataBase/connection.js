const {Sequelize}= require('sequelize');

var dateBase = 'restaurantDB';
var userName = 'postgres'
var password = 'Sarisbo22';

const connection = new Sequelize(dateBase, userName, password, {
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = connection;