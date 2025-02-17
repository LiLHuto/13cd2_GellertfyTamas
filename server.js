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