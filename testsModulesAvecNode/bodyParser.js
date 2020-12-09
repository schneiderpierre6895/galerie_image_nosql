let express = require('express');
let bodyParser = require('body-parser');
let app = express();

//app.use(express.static('forms'));
app.use(bodyParser());
app.get('/', function (request, response) {
  response.sendFile( __dirname  + '/form.html');
});
app.post('/form', function (request, response) {
  response.send(request.body.prenom + ' ' + request.body.nom);
  response.end();
});
app.listen(3000);
