/**
  @file bdd.js
  @brief Implémentation du module d'accès à la base de données de l'application
  @author Pierre SCHNEIDER
*/

/**
  @fn creationUtilisateur
  @brief Fonction de création d'un utilisateur dans la base de données
  @param db - Base de données de travail
  @param nom - Nom de l'utilisateur à créer
  @param prenom - Prénom de l'utilisateur à créer
  @param pseudo - Pseudo de l'utilisateur à créer
  @param email - Email de l'utilisateur à créer
  @param passwd - Mot de passe de l'utilisateur à créer
*/
function creationUtilisateur (db, nom, prenom, pseudo, email, passwd) {
  let collection = db.collection('Utilisateurs');
  collection.insertOne({nom: nom, prenom: prenom, pseudo: pseudo, email: email, passwd: passwd});
}

/**
  @fn chercheUtilisateur
  @brief Fonction de recherche d'un utilisateur dans la base de données
  @param db - Base de données de travail
  @param pseudo - Pseudo de l'utilisateur à chercher dans la base de données
  @return Le document correspondant à l'utilisateur recherché
*/
function chercheUtilisateur (db, pseudo) {
  let collection = db.collection('Utilisateurs');
  return collection.find({pseudo: pseudo});
}

/**
  @fn creationImage
  @brief Méthode ajoutant une image dans la base de données
  @param db - Base de données de travail
  @param titre - Titre de l'image
  @param proprietaire - Propriétaire de l'image
  @note Par défaut l'image ne fait partie d'aucun album
*/
function creationImage (db, titre, proprietaire) {
  let collection = db.collection('Images');
  collection.insertOne({titre: titre, proprietaire: proprietaire, album: ''});
}

/**
  @fn chercheImageParProprietaire
  @brief Méthode recherchant toutes les images d'un Utilisateur
  @param db - Base de données de travail
  @param proprietaire - Propriétaire des images à chercher
  @return Un vecteur de documents concernant toutes les images
*/
function chercheImageParProprietaire (db, proprietaire) {
  let collection = db.collection('Images');
  return collection.find({proprietaire: proprietaire});
}

/**
  @fn chercheImageParAlbum
  @brief Méthode recherchant toutes les images d'un album d'un utilisateur
  @param db - Base de données de travail
  @param proprietaire - Propriétaire de l'album à chercher
  @param album
  @return Toutes les images de l'album
*/
function chercheImageParAlbum (db, proprietaire, album) {
  let collection = db.collection('Images');
  return collection.find({proprietaire: proprietaire, album: album});
}

/**
  @fn ajouteImageDansAlbum
  @brief Méthode ajoutant une image dans un nomAlbum
  @param proprietaire - Propriétaire de l'image
  @param image - Titre de l'image à mettre dans l'album
  @param album - Nom de l'album dans lequel l'image doit être insérée
*/
function ajouteImageDansAlbum (db, proprietaire, image, album) {
  let collection = db.collection('Images');
  collection.update({titre: image, proprietaire: proprietaire}, {album: album});
}

exports = module.exports = {
  creationUtilisateur: creationUtilisateur,
  chercheUtilisateur: chercheUtilisateur,
  creationImage: creationImage,
  chercheImageParProprietaire: chercheImageParProprietaire,
  chercheImageParAlbum: chercheImageParAlbum,
  ajouteImageDansAlbum: ajouteImageDansAlbum
}
