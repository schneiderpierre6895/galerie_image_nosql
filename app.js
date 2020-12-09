"use strict";

/**
  @file app.js
  @brief Implémentation de l'application avec ExpressJS
  @author Pierre SCHNEIDER
*/

let fs = require('fs');
let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let bdd = require('./bdd.js');
let generationPages = require('./generationPages');

let MongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost:27017';
let client = new MongoClient(url, {useNewUrlParser: true});
client.connect(function (error) {
  if (error) {
    console.error('Ouverture impossible de MongoDB');
    console.error('Erreur : ' + error);
  }
});
let db = client.db('galerie');


let app = express();
app.use('/files', express.static(__dirname + '/files'));
app.use(bodyParser());
// Création d'une session de 30 minutes
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

/**
  @fn verificationConnexion
  @brief Fonction vérifiant que l'utilisateur est bien connecté
  @param request - La requête au serveur
  @param response - La réponse du serveur
  @post Si l'utilisateur n'est pas connecté, il est redirigé vers la page de connexion
*/
function verificationConnexion (request, response) {
  if (!request.session.log) {
    response.redirect('/');
  }
}

// Accueil avec proposition de login, d'inscription ou de bienvenue
app.get('/', function (request, response, next) {
  if (!request.session.log) {
    response.send(generationPages.pageLogin());
  } else {
    response.send(generationPages.pageBienvenue(request.session.pseudo));
  }
  response.end();
  next();
});

// Gestion du login
app.post('/login', function (request, response, next) {
  let documentLog = bdd.chercheUtilisateur(db, request.body.pseudo);
  if (request.body.pseudo == documentLog.passwd) {
    request.session.log = true;
    request.session.pseudo = documentLog.pseudo;
  }
  // Redirection vers la page d'accueil
  response.redirect('/');
  next();
});

// Page d'inscription
app.get('/inscription', function (request, response, next) {
  response.send(generationPages.pageInscription());
  response.end();
  next();
});

// Gestion de l'inscription
app.post('inscription/inscription', function (request, response, next) {
  let nom = request.body.nom;
  let prenom = request.body.prenom;
  let pseudo = request.body.pseudo;
  let email = request.body.email;
  let passwd = request.body.passwd;

  // Création de l'utilisateur dans la base de données et redirection vers la page de connexion au site
  bdd.creationUtilisateur(db, nom, prenom, pseudo, email, passwd);
  response.redirect('/');
  next();
});

// Déconnexion de l'application
app.get('/deconnexion', function (request, response, next) {
  // La session n'est plus active, destruction de la session et redirection vers la page d'accueil
  request.session.log = false;
  response.redirect('/');
  next();
});

// Page d'ajout d'une image
app.get('/ajouteImage', function (request, response, next) {
  // Si l'utilisateur n'est pas connecté, on le renvoi à la page de connexion
  verificationConnexion(request, response);

  response.send(generationPages.pageAjouteImage());
  response.end();
  next();
});

// Gestion d'ajout d'une image
app.post('/ajouteImage/form', function (request, response, next) {
  // Sauvegarde du fichier sur le serveur
  let titre = request.body.titre;
  let fichier = fs.createWriteStream('/files/images/' + titre);
  request.pipe(fichier);

  // Enregistrement de l'image dans la base de données
  bdd.creationImage(db, titre, request.session.pseudo);
  response.redirect('/ajouteImage');
  next();
});

// Page de visionnage d'une image
app.get('/visionnageImage', function (request, response, next) {
  // Si l'utilisateur n'est pas connecté, on le renvoi à la page de connexion
  verificationConnexion(request, response);

  response.send(generationPages.pageVisionnageImageForm());
  response.end();
  next();
});

// Gestion de visionnage d'une image avec le lien direct
app.post('/visionnageImage/form', function (request, response, next) {
  response.send(generationPages.pageVisionnageImage(request.body.titre));
  response.end();
  next();
});

// Page de visionnage de toutes les images de l'utilisateur
app.get('/listeImages', function (request, response, next) {
  // Si l'utilisateur n'est pas connecté, on le renvoi à la page de connexion
  verificationConnexion(request, response);

  // Recherche des titres de toutes les images
  let titres = new Array();
  documents = bdd.chercheImagesParProprietaire(db, request.session.pseudo);

  for (d in documants) {
    titres.push(d.titre);
  }

  // Affichage de la page
  response.send(generationPages.pageListeImages(titres));
  response.end();
  next();
});

// Page de classage d'une image dans un album
app.get('/classeImages', function (request, response, next) {
  // Si l'utilisateur n'est pas connecté, on le renvoi à la page de connexion
  verificationConnexion(request, response);

  response.send(generationPages.pageClasseImageForm());
  response.end();
  next();
});

// Gestion de classage d'une image dans un album
app.post('/classeImages/form', function (request, response, next) {
  let titre = request.body.titre;
  let album = request.body.album;

  // Mise à jour de l'album auquel appartient l'image et redirection vers la page d'accueil
  bdd.ajouteImageDansAlbum(db, request.session.pseudo, image, album);
  response.redirect('/');
  next();
});

// Page de visionnage de toutes les images d'un album
app.get('voirAlbum', function (request, response, next) {
  // Si l'utilisateur n'est pas connecté, on le renvoi à la page de connexion
  verificationConnexion(request, response);

  response.send(generationPages.pageParcourirAlbumForm());
  response.end();
  next();
});

// Gestion du visionnage d'un album
app.post('voirAlbum/form', function (request, response, next) {
  // Recherche des titres de toutes les images
  let titres = new Array();
  documents = bdd.chercheImageParAlbum(db, request.session.pseudo, request.body.album);

  for (d in documants) {
    titres.push(d.titre);
  }

  // Affichage de la page
  response.send(generationPages.pageListeAlbum(titres));
  response.end();
  next();
});
