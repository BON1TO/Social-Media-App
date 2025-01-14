//contains all the data that defines all the schema of the database
//(what data should contains string/integers or that usernames should be unique etc etc)

const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({

    userID:{
        type: String,
        max: 50
    },
    desc: {
        type: String,
        max: 50
    },
    img: {
        type: String
    },
    likes: {
        type: Array,
        default: []
    }
    

},{timestamps: true});

module.exports = mongoose.model("post",postSchema);