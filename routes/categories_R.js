const express = require('express');
const router = express.Router();
const {getAllCategories,addCategory,getCategory, deleteCategory} = require('../controller/categories_C');
const {valuesToAdd,isValidId} = require('../middelware/categories_MID.js');
const {isLoggedIn} = require('../middelware/auth_MID');
const { deleteUser } = require('../controller/users_C.js');

router.use(isLoggedIn);

router.get('/',isLoggedIn,getAllCategories);
router.post('/',isLoggedIn,valuesToAdd,addCategory);
router.get('/:id',isLoggedIn,isValidId,getCategory);
router.delete('/id',isLoggedIn,isValidId,deleteCategory);
router.patch('id',isLoggedIn,isValidId,validValues);

// router.delete('/:id',isValidId,deleteUser);
// router.patch('/:id',isValidId,valuesToEdit,updateUser);

module.exports = router;