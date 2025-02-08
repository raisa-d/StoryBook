const express = require('express');
const router = express.Router();

/* ======
ROUTES
====== */
// @desc Login/Landing page
// @route GET /
router.get('/', (req, res) => {
    res.render('login', {
        layout: 'login'
    });
});

// @desc Dashboard
// GET /dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

module.exports = router;