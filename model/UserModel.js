const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserType = {
    username : String,
    password : String
}

const UserModel = mongoose.model("user", new Schema(UserType))

module.exports = UserModel