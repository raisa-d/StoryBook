import express from 'express';
import connectDB from './db.js';
const app = express();
const PORT = process.env.PORT;

connectDB();

app.get('/', (req, res) => res.send('hi'));

app.listen(PORT, console.log(`Server is running on port ${PORT}`));