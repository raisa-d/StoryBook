const express = require('express');
// create router
const router = express.Router();

/* ======
ROUTES
====== */
// Login/Landing page
router.get('/', (req, res) => {
    res.render('login');
});

// Dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard');
});


module.exports = router;