/* 
  /api/crud.js
*/

const User = require("./../src/User.model");

const getAll = async () => {
    users = await User.find();
    return users;
};

const addOne = async (name,status,presence,rdv) => {

    const user = new User({
        name:name,
        status:status,
        presence:presence,
        rdv:rdv
    });

    await user.save().then(()=>{ console.log(`User ${name} added!`); return "success"; })
    .catch((e)=>{ console.log(e); return "error"; });

};

module.exports = { getAll,addOne };