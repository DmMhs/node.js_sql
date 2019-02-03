const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Book = sequelize.define('books', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    authorName: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    year: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Book;