const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const sequelize = require('./util/database');

const adminRoutes = require('./routes/admin');
const storeRoutes = require('./routes/store');

const app = express();

app.use(morgan('dev'));

const Book = require('./model/book');
const Author = require('./model/author');
const Cart = require('./model/cart');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    Book.findById(1)
    .then(book => {
        req.book = book;
        next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(storeRoutes);
app.use((req, res, next) => {
    res.status(404).render('404', {
        pageTitle: 'Page Not Found!',
        path: 'no path'
    }); 
});

Book.belongsTo(Author, {
    constraints: true,
    onDelete: 'CASCADE'
});

sequelize
.sync()
.then(() => {
    app.listen(3002);
})
.catch(err => console.log(err));