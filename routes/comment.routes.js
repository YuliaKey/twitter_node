const router = require('express').Router()

router.get('/new/:tweetId', createComment)

module.exports = router;

