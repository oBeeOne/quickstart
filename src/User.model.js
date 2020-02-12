// Chargement du composant mongo : mongoose
const mongoose = require('mongoose');

// Construction du schema de la DBB mongo
const userSchema = new mongoose.Schema({
    name:{type:String},     // Champ nom type string
    status:{type:String},   // Champ status type string
    presence:{type:Boolean},// Champ presence type boolean
    rdv:{type:Date}         // Champ rdv type date
})

// Création du modèle de BDD
const User = mongoose.model("User", userSchema);

// Exportation du module "User"
module.exports = User;