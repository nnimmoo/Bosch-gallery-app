var express = require("express")
var mysql = require("mysql")
var app = express()
app.use(express.json())

const connection = mysql.createConnection({
    host: 'localhost',
    port: 8040,
    user: "root",
    password: "kjh08041990",
    database: "Bosch"
});

connection.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("connected")
    }
});

app.get("/fetch", (req, res) => {
    connection.query("select * from paintings", function (err, reslut, fields) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(reslut);
        }
    })
});

app.get("/fetchPaintingbyName/:name", (req, res) => {
    const fetchname = req.params.name;
    connection.query("select * from paintings where name=?", fetchname,
        function (err, reslut, fields) {
            if (err) {
                console.log(err);
            }
            else {
                res.send(reslut);
            }
        })
});

app.get("/fetchPaintingbyId/:id", (req, res) => {
    const fetchId = req.params.id;
    connection.query("select * from paintings where id=?", fetchId,
        function (err, reslut, fields) {
            if (err) {
                console.log(err);
            }
            else {
                res.send(reslut);
            }
        })
});

app.post("/subscribe", (req, res) => {
    const email = req.body.email;
    const id = req.body.id;
    connection.query("insert into Persons values(?,?)", [id, email],
        (err, reslut) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send(reslut);
            }
        })
});

app.listen(3001, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("on port 3001");
    }
})