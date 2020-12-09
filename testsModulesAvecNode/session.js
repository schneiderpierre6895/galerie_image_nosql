let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let app = express();

//app.use(express.static('forms'));
app.use(bodyParser());
app.use(session({
  secret: 'gestionImages',
  cookie: {
    secure: true,
    expires: new Date(Date.now() + 30 * 60 * 1000),
    maxAge: 30 * 60 * 1000
  }
}));
app.use(function (request, response, next) {
  if (typeof(request.session.log) == 'undefined') {
        request.session.log = false;
    }
    next();
});
app.get('/', function (request, response) {
  response.sendFile( __dirname  + '/form.html');
});
app.post('/form', function (request, response) {
  if (!request.session.log) {
    request.session.log = true;
    request.session.prenom = request.body.prenom;
    request.session.nom = request.body.nom
    response.send(request.session.prenom + ' ' + request.session.nom);
  }
  response.end();
});
app.listen(3000);
