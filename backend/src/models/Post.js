const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    author : String,
    place : String,
    description : String,
    hashtags : String,
    image : String,
    likes : {
        type : Number,
        default : 0
    }
}, {
   timestamps : true // criar campo de data de criação e alteração
});

module.exports = mongoose.model('Post', PostSchema);