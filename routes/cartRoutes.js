const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const {
  addToCart,
  getCart,
  removeFromCart,
} = require('../controllers/cartController');

router.post('/', protect, addToCart); // Add to cart
router.get('/', protect, getCart);    // Get my cart
router.delete('/:productId', protect, removeFromCart); // Remove item

module.exports = router;
