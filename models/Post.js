//  Aqui ira el modelo de la publicación con los campos title, body y los timestamps.
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title:{ type: String, required: [true, "Title is required"] },
    body:{ type: String, required: [true, "Body is required"] },
},{timestamps: true})


const Post = mongoose.model('Post',PostSchema);

module.exports = Post;