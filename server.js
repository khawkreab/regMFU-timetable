const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');
const api = require('./server/routes/api');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/api', api);
app.use(express.static(path.join(__dirname, 'dist/regMFU-timetable/')));
app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const port = 8080;
app.listen(port, () => {
    console.log("Server is running" + port);
});

//Data base
const mogoClinet = require('mongoose');
const db = 'mongodb://192.168.56.1:27017/regMfu';
// const db = 'mongodb://localhost:27017/regMfu';

mogoClinet.Promise = global.Promise;
mogoClinet.connect(db, (err) => {
    if (err) console.log("Error" + err);
})