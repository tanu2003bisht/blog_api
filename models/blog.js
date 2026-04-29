const mongoose = require('mongoose');
const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String
    },
    author:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now
    }
});

const Blog = mongoose.model('Blog',blogSchema);
module.exports = Blog;