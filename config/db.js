// import mongoose from "mongoose";
const mongoose = require('mongoose');
const connectDB = async()=>{
    try {
        const resp = await mongoose.connect("mongodb+srv://adeel:adeel193725@cluster0.uwmda7z.mongodb.net/google?retryWrites=true&w=majority")
        if (resp) {
            console.log('mongodb connected')
        }
    } catch (error) {
        console.log(error)
    }
    
}

// export default connectDB
module.exports = connectDB