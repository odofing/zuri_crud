const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
   
})

module.exports = mongoose.model('Crud', PostSchema)