const router = require("express").Router()
const tweet = require('./tweet.routes')
const { tweetList } = require("../controllers/tweet.controller")

router.use('/tweet', tweet)
router.get('/', tweetList)

module.exports = router;