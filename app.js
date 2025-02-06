// IMPORTS
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const connectDB = require('./config/db.js');

// load config file
dotenv.config({path: './config/config.env'})

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

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

/* ======
ROUTES 
====== */
app.use('/', require('./routes/index'));

// connect to database
connectDB(uri);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});