const mongooseUtil = {
    mutilpleMongooseToObject: mongooseArray => {
        return mongooseArray.map(object => object.toObject())
    },

    singleMongooseToObject: function(mongoose){
        return mongoose ? mongoose.toObject() : null
    }
}

module.exports = mongooseUtil