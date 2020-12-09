"use strict";

let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/testMongoose', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true, useCreateIndex: true}, function (error) {
  if (error) {
    console.error('Erreur de connection à la base de données');
  } else {
    console.log('Base de données connectée');
  }
});

let connection = function () {
  mongoose.connect('mongodb://localhost:27017/testMongoose', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true, useCreateIndex: true}, function (error) {
    if (error) {
      console.error('Erreur de connection à la base de données');
    } else {
      console.log('Base de données connectée');
    }
  });
}

let userSchema = mongoose.Schema({
  userNom: String,
  userPrenom: String,
  userPseudo: String,
  userVille: String
});
let User = mongoose.model('User', userSchema);

let insertion = function (nom, prenom, pseudo, ville) {
  let personnage = new User({
    userNom: nom,
    userPrenom: prenom,
    userPseudo: pseudo,
    userVille: ville
  });
  personnage.save(function (error) {
    if (error) {
      console.error('Erreur d\'insertion');
    } else {
      console.log('Insertion effectuée');
    }
  });
  User.find().exec(function (error, documents) {
    if (error) {
      console.error('Erreur de requete');
    } else {
      for (let d in documents) {
        console.log(d.userPseudo + ' : ' + d.userNom + ' ' + d.userPrenom + ' ' + d.userVille);
      }
    }
  });
};

let rechercheTotale = function () {
  //connection();
  console.log('Avant requete');
  User.find().exec(function (error, documents) {
    if (error) {
      console.error('Erreur de requete');
    } else {
      for (let d in documents) {
        console.log(d.userPseudo + ' : ' + d.userNom + ' ' + d.userPrenom + ' ' + d.userVille);
      }
    }
  });
}

// Phase d'insertion
insertion('Wayne', 'Bruce', 'Batman', 'Gotham City');
insertion('Kent', 'Clark', 'Superman', 'Metropolis');

// Phase de recherche de documents et affichage
//rechercheTotale();
/*for (let d in docs) {
  console.log(d.userPseudo + ' : ' + d.userNom + ' ' + d.userPrenom + ' ' + d.userVille);
}*/
