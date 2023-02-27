const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = schema({
    username: {type: String, required: true},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    local: {
        email: {type: String, requirred: true},
        password: {type: String, requirred: true}
    }
}, {
    timestamps: true
})

const User = mongoose.model('user', userSchema);

module.exports = User;