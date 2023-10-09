const mongoose = require('mongoose')



const UserSchema = new mongoose.Schema({
  name: String,
  lesson: String,
  tichers: String
})

const UsersModel = mongoose.model("he", UserSchema)

module.exports = UsersModel