const { createTweet } = require('../controllers/tweet.controller')

const router = require('express').Router()

router.post('/new', createTweet) //creation d'un tweet

module.exports = router