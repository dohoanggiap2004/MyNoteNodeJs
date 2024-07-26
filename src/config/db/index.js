const mongoose = require('mongoose')

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/notes_blog');
        console.log('Successfully')
    } catch (error) {
        console.log('Error')
    }
}

module.exports = {connect}