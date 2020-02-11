const mongoose = require("mongoose");
const User = ("./User.model");
const connection = "mongodb://mongo:27017/quick-start";
const connectDatabase = () =>{
    return mongoose.connect(connection);
};
module.exports = connectDatabase;