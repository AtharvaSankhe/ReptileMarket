const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const {
  addCategory,
  getCategories,
  deleteCategory,
} = require('../controllers/categoryController');

// public route for now
router.get('/', getCategories);

// protected routes for creation/deletion
router.post('/', protect, addCategory);
router.delete('/:id', protect, deleteCategory);

module.exports = router;
