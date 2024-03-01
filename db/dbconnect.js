const mongoose = require("mongoose");

const connectDB = async () =>{
    try {
       await mongoose.connect(process.env.MONGO_URL);
       console.log("🔥🔥🔥Connected Successful MongoDB...");
    } catch (error) {
        console.error('Connection error in DB:', error);
    }
}

module.exports = connectDB;




