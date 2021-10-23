const express = require('express');
const router = express.Router();

// @route   GET api/auth
// @desc    Get legged in user
// @access  Private       
router.get('/', (req, res) => {
    res.send('Get legged in user');
});

// @route   POST api/auth
// @desc    Auth user and get token
// @access  Public      
router.post('/', (req, res) => {
    res.send('Auth user and get token');
});

module.exports = router;