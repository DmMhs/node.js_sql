const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'eleks-bookstore', 
    'root', 
    'ilovesven', 
    {
        dialect: 'mysql',
        host: 'localhost'
    }
);

module.exports = sequelize;

