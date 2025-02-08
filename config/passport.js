const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const User = require('../models/User');

module.exports = function (passport) {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, db) => {
        const newUser = {
            googleId: profile.id,
            displayName: profile.displayName,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            image: profile.photos[0].value
        };

        try {
            let user = await User.findOne({ googleId: profile.id });

            if(user) {
                cb(null, user);
            } else {
                user = await User.create(newUser);
                cb(null, user);
            };
        } catch(err) {
            console.error(err);
        };
    }));

    passport.serializeUser((user, db) => {
        process.nextTick(() => {
          return db(null, {
            id: user.id,
            username: user.username,
            picture: user.picture
          });
        });
      });
      
      passport.deserializeUser((user, db) => {
        process.nextTick(() => db(null, user));
      });
};