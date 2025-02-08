// IMPORTS
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const session = require('express-session');
const passport = require('passport');
const connectDB = require('./config/db.js');

// Load config
dotenv.config({path: './config/config.env'})

// Passport Config
require('./config/passport.js')(passport);

/* ======
VARIABLES 
====== */
const app = express();
const PORT = process.env.PORT;
const uri = process.env.MONGO_URI;

/* ======
MIDDLEWARE 
====== */
app.use(morgan('dev'));
// Handlebars
app.engine('.hbs', handlebars.engine({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Sessions middleware
app.use(session({
    secret: 'keyboard cat',
    resave: false, // don't want to save a session if nothing was modified
    saveUninitialized: false // don't create a session until something is stored
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

/* ======
ROUTES 
====== */
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));

// connect to database
connectDB(uri);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});