const express = require('express');
const router = express.Router();
const { getAllCategories, addCategory, deleteCategory, getCategory, updateCategory } = require('../controller/categories_C');
const {validValues, isValidId} = require('../middelware/categories_MID');
const { isLoggedIn } = require('../middelware/auth_MID');


router.get('/', isLoggedIn, getAllCategories);
router.post('/', isLoggedIn, validValues, addCategory);
router.get('/:id',isLoggedIn,isValidId,getCategory);
router.delete('/:id', isLoggedIn, deleteCategory);
router.patch('/:id', isLoggedIn, isValidId, validValues, updateCategory);
module.exports = router;