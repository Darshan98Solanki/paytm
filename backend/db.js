const mongoose = require('mongoose');
const { number } = require('zod');
require('dotenv').config();
mongoose.connect(process.env.MONGO)

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

const TransactionHistorySchema = mongoose.Schema({
    From:{
        type: mongoose.Schema.Types.ObjectId, // ref to user table
        ref: 'user',
        required: true
    },
    To:{
        type: mongoose.Schema.Types.ObjectId, // ref to user table,
        ref: 'user',
        required: true
    },
    amount:{
        type: Number,
        required: true
    },
    timestamp:{
        type: Date,
        required: true
    }
})

const users = mongoose.model('Users', userSchema)
const accounts = mongoose.model('Account', accountSchema)
const transactions = mongoose.model('Transaction', TransactionHistorySchema)

module.exports = { 
    users,
    accounts,
    transactions
}