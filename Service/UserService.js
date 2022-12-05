const UserModel = require('../model/UserModel')


const userService = {
    updateUser(_id, bodyUser) {

        return UserModel.updateOne({ _id }, bodyUser)
    },

    getUserList(page, limit) {
        return UserModel.find().sort({ username: 1 }).skip((page - 1) * limit).limit(limit)

    },

    deleteUser(_id){
        return UserModel.deleteOne({_id})
    },

    addUser(bodyUser) {
        return UserModel.create(
            bodyUser
          )
    }
}

module.exports = userService
