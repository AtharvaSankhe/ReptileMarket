const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');
const protect = require('../middleware/authMiddleware');


// POST /api/auth/register
router.post('/register', registerUser);

// POST /api/auth/login
router.post('/login', loginUser);


router.get('/me', protect, (req, res) => {
  res.json({
    message: 'You are authenticated',
    user: req.user,
  });
});


module.exports = router;
