const mongoose = require('mongoose');

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`mongodb+srv://prajwalbhure23:cSWLPLpUTZWc9sy5@cluster0.g8bnbd5.mongodb.net/blogger`)
    } catch (error) {
        console.log(`Mongo connection error: ${error}`)
    }
}

module.exports = connectDB;
