const express = require('express');
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const moment = require('moment');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var connection = mysql.createConnection({
    user: 'root',
    password: 'student',
    database: 'cows'
  })
  
  connection.connect()

app.use(express.static(path.join(__dirname,'../client/dist')));

app.get('/cows', (req, res) => {
    connection.query('SELECT * FROM cows', function (err, data, fields) {
        if (err) throw err;

        res.statusCode = 200;
        res.send({results: data});
      })
});

app.post('/cows', (req, res) => {
    let newCow = req.body.cow;
    let time = moment().format('MMMM Do YYYY, h:mm:ss a');
    let post = "INSERT INTO cows (name, description, time) VALUES ?";
    let vals = [[newCow.name, newCow.description, time]];
    connection.query(post, [vals], function (err, result) {
        if (err) throw err;
        console.log("succesful post!");
      });

    res.statusCode = 201;
    res.send();
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));