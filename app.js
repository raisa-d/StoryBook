// IMPORTS
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db.js')

// load config file
dotenv.config({path: './config/config.env'})

const app = express();
const PORT = process.env.PORT;
const uri = process.env.MONGO_URI;

connectDB(uri);

app.get('/', (req, res) => res.send('hi'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});