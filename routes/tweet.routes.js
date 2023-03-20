const { createTweet, editTweet, deleteTweet, updateTweet, showTweet, tweetLike } = require('../controllers/tweet.controller')

const router = require('express').Router()

router.post('/new', createTweet) //creation d'un tweet
router.get('/like/:tweetId', tweetLike)
router.get('/edit/:tweetId', editTweet); // affiche le tweet pour le modification
router.get('/delete/:tweetId', deleteTweet); // suppresion d'un tweet
router.post('/edit/:tweetId', updateTweet); //mise a jour dy tweet
router.get('/:tweetId', showTweet)

module.exports = router