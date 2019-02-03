const Book = require('../model/book');
const Author = require('../model/author');
const sequalize = require('../util/database');

exports.getAddBook = (req, res, next) => {
    res.render('admin/add-book', {
        pageTitle: 'Add New Book',
        path: '/admin/add-book',
        editMode: false
    });
};

exports.postAddBook = (req, res, next) => {
    const name = req.body.name;
    const author = req.body.authorName;
    const year = req.body.year;
    const description = req.body.description;
    return sequalize.transaction(() => {
        return Book.create({
            name: name,
            authorName: author,
            year: year,
            description: description
        })
        .then(result => {
        res.redirect('/admin/products');
        }) 
    })
    .catch(err => {
        console.log(err);
    });
    
};

exports.getEditBook = (req, res, next) => {
    Book.findById(req.params.id)
    .then( book => {
        res.render('admin/add-book', {
            product: book,
            pageTitle: 'Edit Book',
            path: '/admin/edit-book',
            editMode: req.query.edit,
            
        });   
    })
    .catch(err => console.log(err))
   
};

exports.postEditBook = (req, res, next) => {
    const id = req.body.id;
    const name = req.body.name;
    const author = req.body.authorName;
    const year = req.body.year;
    const desc = req.body.description;

    Book.findById(id)
    .then(book => {
        book.name = name;
        book.authorName = author;
        book.year = year;
        book.description = desc;

        return book.save();
    })
    .then(product => {
        res.redirect('/admin/products');
    })
    .catch(err => console.log(err));
};

exports.getProducts = (req, res, next) => {
    Book.findAll()
    .then(books => {
        res.render('admin/products', {
            prods: books, 
            pageTitle: 'Admin Products', 
            path: '/admin/products'
        });
    })
    .catch(err => console.log(err));
};

exports.postDeleteBook = (req, res, next) => {
    const id = req.body.id;

    Book.findById(id)
    .then(book => {
        return book.destroy();
    })
    .then(() => {
        res.redirect('/admin/products');
    })
    .catch(err => console.log(err));
};