/* 
  /api/crud.js
*/

// Importation du model de BDD "User"
const User = require("./../src/User.model");

// Récupère tous les enregistrements de la base
const getAll = async () => {
    users = await User.find().catch((e)=>{console.log(e); return "error";});
    return users;
};

// Ajoute un seul enregistrement dans la base
const addOne = async (name,status,presence,rdv) => {

    const user = new User({
        name:name,
        status:status,
        presence:presence,
        rdv:rdv
    });

    await user.save()
        .then(
            ()=>{ console.log(`User ${name} added!`);
            return "success";
        })
        .catch((e)=>{ console.log(e);
            return "error"; 
        });

};

// Export du module CRUD
module.exports = { getAll,addOne };