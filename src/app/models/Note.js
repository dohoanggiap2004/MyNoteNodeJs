const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Note = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'User',
    },
    title: {
        type: String,
        require: true,
    },
    body: {
        type: String,
        require: true,
    }},
    {
        timestamps: true,
    }
)


module.exports = mongoose.model('Note', Note)