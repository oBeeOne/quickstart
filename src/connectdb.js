/**
 * connectdb.js
 * 
 * Connexion à une base de données MongoDB
 * Version: 0.0.1
 * Author: Obeewoan
 * License: GNU GPL 3.0
 */

// Connection à mongoDB
const mongoose = require("mongoose");

// Importation du modèle "User"
const User = ("./User.model");

// Connexion à MongoDB
const connection = "mongodb://192.168.99.100:27017/quick-start";
const connectDatabase = () =>{
    return mongoose.connect(connection);
};

// Exportation du module de connexion
module.exports = connectDatabase;