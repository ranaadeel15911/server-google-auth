// import mongoose from "mongoose";
const mongoose = require('mongoose');

const formSchema = mongoose.Schema({
    email: {
        required: true,
        unique: true,
        type: String,
        },
        name: {
        required: true,
        type: String
        },
        password: {
        required: false
        ,
        type: String
        },
        authSource: {
            type: String,
        // enum: ["self", "google"],
        // default: "self"
        required: false
        },
        // enum: ["self", "google"],
        // default: "self",
        // }
})

const formModel = mongoose.model('users', formSchema);
// export default formModel;
module.exports = formModel