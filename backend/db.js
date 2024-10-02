//connection url:- mongodb+srv://darshan98solanki:oq8OcJvwwXZ23GRg@cluster0.v1ufnmc.mongodb.net/paytm

const mongoose = require('mongoose');
const { number } = require('zod');
mongoose.connect('mongodb+srv://darshan98solanki:oq8OcJvwwXZ23GRg@cluster0.v1ufnmc.mongodb.net/paytm')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        trim:true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        minLength: 6
    },
    firstname: {
        type: String,
        trim:true,
        maxLength: 50
    },
    lastname: {
        type: String,
        trim:true,
        maxLength: 50
    },
})

const accountSchema = mongoose.Schema({

    userId:{
        type: mongoose.Schema.Types.ObjectId, // ref to user table
        ref: 'user',
        required: true
    },
    balance:{
        type: Number,
        required: true
    }

})

const users = mongoose.model('Users', userSchema)
const accounts = mongoose.model('Account', accountSchema)

module.exports = { 
    users,
    accounts
}