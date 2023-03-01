const { createTweet, displayTweet, deleteTweet, updateTweet } = require('../controllers/tweet.controller')

const router = require('express').Router()

router.post('/new', createTweet) //creation d'un tweet
router.get('/edit/:tweetId', displayTweet); // affiche le tweet pour le modification
router.get('/delete/:tweetId', deleteTweet); // suppresion d'un tweet
router.post('/edit/:tweetId', updateTweet); //mise a jour dy tweet

module.exports = router