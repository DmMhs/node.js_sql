const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');

router.get('/add-book', adminController.getAddBook);

router.post('/add-book', adminController.postAddBook);

router.get('/edit-book/:id', adminController.getEditBook);

router.post('/edit-book/:id', adminController.postEditBook);

router.post('/delete-book', adminController.postDeleteBook)

router.get('/products', adminController.getProducts);

module.exports = router;