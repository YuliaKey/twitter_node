const Tweet = require("../database/models/Tweet.model")

exports.createNewTweet = (body) => {
    const newTweet = new Tweet(body)
    return newTweet.save();
}

exports.findAllTweets = () => {
    return Tweet.find({}).populate('author').exec();
}

exports.getCurrentUserTweetsWithFollowings = (user) => {
    return Tweet.find({ author: { $in: [...user.followings, user._id]}}).populate('author').exec();
}

exports.findTweetsFromUsername = (authorId) => {
    return Tweet.find({author: authorId}).populate('author').exec();
}


exports.findTweetById = (tweetId) => {
    return Tweet
        .findById(tweetId)
        .populate('author')
        .populate({
            path: 'comments',
            populate: {
                path: 'author'
            }
        })
        .exec();
}

exports.findTweetAndDelete = (tweetId) => {
    return Tweet.findByIdAndDelete(tweetId).exec();
}

exports.findTweetAndUpdate = (tweetId, body) => {
    return Tweet.findByIdAndUpdate(tweetId, {$set: body}).exec();
}

exports.likeTweet = async (tweetId, user) => {
    const tweet = await Tweet.findById(tweetId).exec()

    if(!user.likedTweets.includes(tweet._id)) {
        tweet.nbLikes++;
        user.likedTweets.push(tweet._id)
    } else {
        tweet.nbLikes--;
        user.likedTweets = user.likedTweets.filter(tId => tId.toString() !== tweetId.toString())
    }

    user.save();
    return tweet.save();
}