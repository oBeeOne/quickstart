const mongoose = require("mongoose");
const User = ("./User.model");
const connection = "mongodb://localhost:27017/quick-start";
const connectDatabase = () =>{
    return mongoose.connect(connection);
};
module.exports = connectDatabase;