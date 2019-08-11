const express = require('express')
const path = require('path');
const mysql = require('mysql')
const app = express()
const port = 3000


var connection = mysql.createConnection({
    user: 'root',
    password: 'students',
    database: 'cows'
  })
  
  connection.connect()

app.use(express.static(path.join(__dirname,'../client/dist')));

// app.get('/', (req, res) => res.send('Hello World!'));


app.listen(port, () => console.log(`Example app listening on port ${port}!`));