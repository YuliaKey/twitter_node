const router = require('express').Router();
const {signup, signupForm} = require('../controllers/user.controller.js');

//route pour inscrire un utiliasteaur
router.get('/signup/form', signupForm);
router.post('/signup', signup)

module.exports = router;