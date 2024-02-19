const mongoose = require('mongoose');

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected to MONGODB at ${mongoose.connection.host}`)
    } catch (error) {
        console.log(`Mongo connection error: ${error}`)
    }
}

module.exports = connectDB;