const express = require('express');
const path = require('path');

const creationPages = require('./creationPages.js');

const app = express();

//app.use(express.static(path.join(__dirname, 'images')));
app.use('/images', express.static(__dirname + '/images'));

app.get('/', function (request, response, next) {
  /*let html = '';
  html += '<a href="./homer">Homer</a><br>';
  html += '<a href="./doh">D\'OH !!!</a><br>';
  html += '<a href="./wouhou">WOUHOU !!!</a><br>';
  response.end(html);
  next();*/
  response.send(creationPages.createMenu());
  response.end();
});

app.get('/homer', function (request, response, next) {
  /*let html = '';
  html += '<h1>Homer</h1>';
  html += '<p><img src="./images/homer_gros.gif" alt="HOMER"></p>';
  response.end(html);
  next();*/
  response.send(creationPages.createMenu() + creationPages.createHomer());
  response.end();
});

app.get('/doh', function (request, response, next) {
  /*let html = '';
  html += '<h1>D\'OH !!!</h1>';
  html += '<p><img src="./images/doh.jpg" alt="D\'OH"></p>';
  response.end(html);
  next();*/
  response.send(creationPages.createMenu() + creationPages.createDOH());
  response.end();
});

app.get('/wouhou', function (request, response, next) {
  /*let html = '';
  html += '<h1>WOUHOU !!!</h1>';
  html += '<p><img src="./images/wouhou.jpg" alt="WOUHOU"></p>';
  response.end(html);
  next();*/
  response.send(creationPages.createMenu() + creationPages.createWOUHOU());
  response.end();
});

exports = module.exports = app;
