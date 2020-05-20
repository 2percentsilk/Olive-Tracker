/* eslint-disable no-unused-vars */
var fs = require('fs')
var path = require('path');
var express = require('express');
var app = express();
var mongoClient = require('mongodb').MongoClient;
var mongoUrl = 'mongodb://localhost:27017/';
var mongoDb = 'ballparkTracker';
var mongoCollection = 'parks';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// app.use(express.json());

// main app page
app.get('/', (req, res) => res.render('index', { AZURE_MAPS_KEY: '' }));

// return a json list of ballparks
app.get('/api/parks', (req, res) => {
  var jsonFile = fs.readFileSync('public/data/location.geojson', 'utf8');
  res.send(jsonFile);
});

// Configuring static assets (css/js)
app.use(express.static('public'))

app.listen(3000);
if (!fs.existsSync(`${process.env.HOME}/.nodemon-running`)) console.log('Running at http://localhost:3000');
