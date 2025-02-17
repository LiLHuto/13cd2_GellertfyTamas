const express = require("express");
const mysql = require("mysql")
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
app.use((cors));
app.use((bodyparser));
app.listen(3000, () => {
    console.log("a szerver a 3000-es porton fut.")
})

const db = mysql.createConnection(
    {
        user: "root",
        host: "localhost",
        port: 3307,
        password: "",
        database: "teliolimpia",
    }
)
//a szerver futásának ellenörzése// 
app.get("/", (req, res) => {
    res.send("Szerver Müködik")
}
)
app.get("/v", (req, res) => {
    const sql = "SELECT * FROM teliolimpia.versenyzok";
    db.query(sql, (err, result) => {
        if (err)
            return res.json(result);
    })
})
app.get("/v6", (req, res) => {
    const sql = "SELECT * FROM teliolimpia.versenyzok WHERE ID = 6";
    db.query(sql, (err, result) => {
        if (err)
            return res.json(result);
    })
})


app.post("/v6", (req, res) => {
    const sql = "INSERT INTO 'versenyzok' ('ID','versenyzo') VALUES(?,?)";
    const VALUES = (null, req.body.versenyzo);
    db.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: "hibás adatbáis müvelet" });
        return res.json(result);
    })
})