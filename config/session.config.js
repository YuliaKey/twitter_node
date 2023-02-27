const {app} = require('../app');
const session = require('express-session');
const MongoStore = require('connect-mongo');

// middleware qui serve pour creer une session
app.use(session({
    secret: "Voici ma cle secrete",
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 14 // cookie de 14 jours
    },
    store: MongoStore.create({
        mongoUrl: 'mongodb://yuliia:qwerty@localhost:27017/twitter_dwwm',
        ttl: 60 * 60 * 24 * 14
    })

})) 