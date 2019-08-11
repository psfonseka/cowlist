const express = require('express')
const path = require('path');
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


var connection = mysql.createConnection({
    user: 'root',
    password: 'students',
    database: 'cows'
  })
  
  connection.connect()

app.use(express.static(path.join(__dirname,'../client/dist')));

app.get('/cows', (req, res) => {
    connection.query('SELECT * FROM cows', function (err, data, fields) {
        if (err) throw err
        res.statusCode = 200;
        res.send({results: data});
      })
});

app.post('/cows', (req, res) => {
    let newCow = req.body.cow;
    let newName = newCow.name;
    let newDescription = newCow.description;
    let post = "INSERT INTO cows (name, description) VALUES ?";
    let vals = [[newCow.name, newCow.description]];
    connection.query(post, [vals], function (err, result) {
        if (err) throw err;
        console.log("succesful post!");
      });

    res.statusCode = 201;
    res.send();
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));