const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{type:String},
    status:{type:String},
    presence:{type:Boolean},
    rdv:{type:Date}
})

const User = mongoose.model("User", userSchema);

module.exports = User;