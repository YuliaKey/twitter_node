const Tweet = require("../database/models/Tweet.model")

exports.createNewTweet = (body) => {
    const newTweet = new Tweet(body)
    return newTweet.save();
}

exports.findAllTweets = () => {
    return Tweet.find({}).exec();
}

exports.findTweetById = (tweetId) => {
    return Tweet.findById(tweetId).exec();
}

exports.findTweetAndDelete = (tweetId) => {
    return Tweet.findByIdAndDelete(tweetId).exec();
}

exports.findTweetAndUpdate = (tweetId, body) => {
    return Tweet.findByIdAndUpdate(tweetId, {$set: body}).exec();
}