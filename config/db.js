const mongoose = require('mongoose');

async function connectDB(uri) {
    try {
        await mongoose.connect(uri);
        console.log(`MongoDB Connected`)
    } catch(err) {
        console.error(err);
        process.exit(1);
    };
};

module.exports = connectDB;