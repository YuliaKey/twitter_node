const mongoose = require('mongoose')

mongoose.connect('mongodb://yuliia:qwerty@localhost:27017/twitter_dwwm', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection a la db etablie")
}).catch(err => {
    console.log(err)
})