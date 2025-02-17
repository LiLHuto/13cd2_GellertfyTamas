const express = require ("express");
const mysql = require ("mysql")
const app =express();
const cors = require("cors");
const  bodyparser =  require("body-parser");
app.use((cors));
app.use((bodyparser));
app.listen(3000,()=>(
    console.log("a szerver a 3000-es porton fut.")
))

const db  = mysql.createConnection(
    {
        user: "root",
        host: "localhost",
        port:3307,
        password:"",
        database:"teliolimpia"
    }
)
 //a szerver futásának ellenörzése// 
 app.get("/",(req,res) => {
    res.send("SzerverMüködik")
 }
)