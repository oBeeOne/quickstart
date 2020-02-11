const express = require('express');
const connection = require("./src/connectdb");
const crud = require('./api/crud');


const app = express();

const PORT = 8080;

app.listen(PORT,()=>{
    console.log(`Quickstart App is listening on PORT: ${PORT}`);

    connection().then(()=>{ console.log("Connected to Mongo!") });

});

app.get("/",(req,res)=>{
    data = {
        "name":"Quickstart App"
    }
    res.json(data);
});

app.get("/users",async (req,res)=>{

    await crud.getAll().then((result)=>{
        res.json(result);
        console.log("Users: " + result);
    }).catch(e=>{
        res.sendStatus(404);
    });

});

app.post("/insert",async (req,res)=>{
    await crud.addOne("Ruben","Apprenant",true,Date.now()).then(result=>{
        console.log(result);
        res.send(result);
    }).catch(e=>{ console.log(e) });
});