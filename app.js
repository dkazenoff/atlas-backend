const express = require('express');
const app = express();
const path = require('path');
let cors = require('cors');
let bodyParser = require('body-parser');    //Extract data from Express







app.use(cors())

let datas = require('./routes/datas');

app.get('/dummy0', (req, res) => res.send('Dumb Response from Express Server! 2!'))

app.listen(8080);

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/datas', datas);
console.log("Server running on 8080")


app.use(express.static('./public/index.html'));

module.exports = app;