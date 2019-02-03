const Book = require('../model/book');

exports.getStore = (req, res, next) => {
    Book.findAll()
    .then(books => {
        res.render('store/store', {
            prods: books, 
            pageTitle: 'Cart', 
            path: '/',
            pageTitle: 'Your Cart'
            });
        })
    .catch(err => {
        console.log(err);
    });
};