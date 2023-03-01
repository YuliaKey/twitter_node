const mongoose = require('mongoose');

const schema = mongoose.Schema;

const tweetSchema = schema({
    content: {
        type: String,
        maxlength: [146, 'Le tweet est trop long'],
        minlength: [5, 'Le tweet est trop court'],
        requires: [ true, "Le contenu ne peut etre vide" ]
    },
    author: {
        type: schema.Types.ObjectId,
        ref: 'user', //referance a model User
        required: true
    }
}, {
    timestamps: true
})

const Tweet = mongoose.model('tweet', tweetSchema)


module.exports = Tweet;