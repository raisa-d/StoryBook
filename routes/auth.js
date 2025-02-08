const express = require('express');
const passport = require('passport');
// create router
const router = express.Router();

/* ======
ROUTES
====== */
// @desc Auth with Google
// @route GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

// @desc Google auth callback
// @route GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google', { failuredRedirect: '/' }), (req, res) => {
        res.redirect('/dashboard');
    }
);


module.exports = router;