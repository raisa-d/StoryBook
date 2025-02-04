import mongoose from 'mongoose';
const uri = process.env.MONGO_URI;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};

async function connectDB() {
    try {
        await mongoose.connect(uri);
        console.log(`MongoDB Connected`)
    } catch(err) {
        console.error(err);
        process.exit(1);
    };
};

export default connectDB;