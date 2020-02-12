const mongoose = require("mongoose");
const User = ("./User.model");
const connection = "mongodb://192.168.99.100:27017/quick-start";
const connectDatabase = () =>{
    return mongoose.connect(connection);
};
module.exports = connectDatabase;