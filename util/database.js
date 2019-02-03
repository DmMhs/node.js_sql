const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'eleks-bookstore', 
    'root', 
    'protectedpassword', 
    {
        dialect: 'mysql',
        host: 'localhost'
    }
);

module.exports = sequelize;

