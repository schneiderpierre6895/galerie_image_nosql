"use strict";

/**
  @file generationPages.js
  @brief Module générant du code HTML au format texte
  @author Pierre SCHNEIDER
*/

/**
  @fn ligne
  @brief Fonction générant un saut de ligne dans une chaine de caractères
  @return Une chaine de caractères contenant un saut de ligne
*/
function ligne () {
  return '\n'
}

/**
  @fn debutPage
  @brief Fonction générant un début de page html avec un titre
  @param titre - Titre de la page html
  @return La chaine de caractères générée
*/
function debutPage (titre) {
  let code = '<!DOCTYPE html>' + ligne();
  code += '<html lang="fr" dir="ltr">' + ligne();
  code += '<head>' + ligne();
  code += '<meta charset="utf-8">' + ligne();
  code += '<title>' + titre + '</title>' + ligne();
  code += '</head>' + ligne();
  code += '<body>' + ligne();

  return code;
}

/**
  @fn finPage
  @brief Fonction générant une finc de page html
  @return La chaine de caractères générée
*/
function finPage () {
  let code = '</body>' + ligne();
  code += '</html>';

  return code;
}

/**
  @fn titre
  @brief Fonction générant le titre du site
  @return La chaine de caractères générée
*/
function titre () {
  return '<h1>Galerie d\'images</h1>' + ligne();
}

/**
  @fn titrePage
  @brief Fonction générant un sous-titre d'une page du site
  @param sousTitre - Sous-titre d'une page du site
  @return La chaine de caractères générée
*/
function titrePage (sousTitre) {
  return '<h2>' + sousTitre + '</h2>' + ligne();
}

/**
  @fn menu
  @brief Fonction générant un menu
  @return La chaine de caractères générée
*/
function menu () {
  let code = '<nav>' + ligne();
  code += '<ul>' + ligne();
  code += '<li><a href="/ajouteImage">Ajouter une image</a></li>' + ligne();
  code += '<li><a href="/visionnageImage">Visionner une image</a></li>' + ligne();
  code += '<li><a href="/listeImages">Lister toutes les images</a></li>' + ligne();
  code += '<li><a href="/classeImages">Classer des images dans des albums</a></li>' + ligne();
  code += '<li><a href="/voirAlbum">Parcourir un album</a></li>' + ligne();
  code += '</ul>' + ligne();
  code += '</nav>' + ligne();

  return code;
}

/**
  @fn formulaireLogin
  @brief Fonction générant un formulaire de login
  @return La chaine de caractères générée
*/
function formulaireLogin () {
  let code = '<form class="login" action="login" method="post"><p>' + ligne();
  code += '<label for="pseudo">Pseudo : </label>' + ligne();
  code += '<input type="text" name="pseudo" id="pseudo" value=""><br>' + ligne();
  code += '<label for="passwd">Mot de passe : </label>' + ligne();
  code += '<input type="password" name="passwd" id="passwd" value=""><br>' + ligne();
  code += '<input type="submit" name="valider" value="Valider"><br>' + ligne();
  code += '<a href="/inscription">S\'inscrire</a>' + ligne();
  code += '</p></form>' + ligne();

  return code;
}

/**
  @fn formulaireInscription
  @brief Fonction générant un formulaire d'inscription
  @return La chaine de caractères générée
*/
function formulaireInscription () {
  let code = '<form class="inscription" action="inscription/inscription" method="post"><p>' + ligne();
  code += '<label for="nom">Nom : </label>' + ligne();
  code += '<input type="text" name="nom" id="nom" value=""><br>' + ligne();
  code += '<label for="prenom">Prenom : </label>' + ligne();
  code += '<input type="text" name="prenom" id="prenom" value=""><br>' + ligne();
  code += '<label for="pseudo">Pseudo : </label>' + ligne();
  code += '<input type="text" name="pseudo" id="pseudo" value=""><br>' + ligne();
  code += '<label for="email">Email : </label>' + ligne();
  code += '<input type="text" name="email" id="email" value=""><br>' + ligne();
  code += '<label for="passwd">Mot de passe : </label>' + ligne();
  code += '<input type="password" name="passwd" id="passwd" value=""><br>' + ligne();
  code += '<input type="submit" name="valider" value="Valider"><br>' + ligne();
  code += '<a href="/">Se connecter</a>' + ligne();
  code += '</p></form>' + ligne();

  return code;
}

/**
  @fn formulaireAjouteImage
  @brief Fonction générant un formulaire de mise en ligne d'une image
  @return La chaine de caractères générée
*/
function formulaireAjouteImage () {
  let code = '<form class="ajouteImage" action="ajouteImage/form" method="post"><p>' + ligne();
  code += '<label for="titre">Titre avec extension : </label>' + ligne();
  code += '<input type="text" name="titre" id="titre" value=""><br>' + ligne();
  code += '<label for="image">Image : </label>' + ligne();
  code += '<input type="file" name="image" id="image" value=""><br>' + ligne();
  code += '<input type="submit" name="valider" value="Valider"><br>' + ligne();
  code += '</p></form>' + ligne();

  return code;
}

/**
  @fn formulaireVisionnageImage
  @brief Fonction générant un formulaire de visionnage d'image
  @return La chaine de caractères générée
*/
function formulaireVisionnageImage () {
  let code = '<form class="visionnageImage" action="visionnageImage/form" method="post"><p>' + ligne();
  code += '<label for="titre">Titre avec extension : </label>' + ligne();
  code += '<input type="text" name="titre" id="titre" value=""><br>' + ligne();
  code += '<input type="submit" name="valider" value="Valider"><br>' + ligne();
  code += '</p></form>' + ligne();

  return code;
}

/**
  @fn formulaireClasseImage
  @brief Fonction générant un formulaire de classification d'une image dans un album
  @return La chaine de caractères générée
*/
function formulaireClasseImage () {
  let code = '<form class="classeImage" action="classeImage/form" method="post"><p>' + ligne();
  code += '<label for="titre">Titre avec extension : </label>' + ligne();
  code += '<input type="text" name="titre" id="titre" value=""><br>' + ligne();
  code += '<label for="album">Nom de l\'album : </label>' + ligne();
  code += '<input type="text" name="album" id="album" value=""><br>' + ligne();
  code += '<input type="submit" name="valider" value="Valider"><br>' + ligne();
  code += '</p></form>' + ligne();

  return code;
}

/**
  @fn formulaireParcourirAlbum
  @brief Fonction générant un formulaire de parcours des images d'un album
  @return La chaine de caractères générée
*/
function formulaireParcourirAlbum () {
  let code = '<form class="voirAlbum" action="voirAlbum/form" method="post"><p>' + ligne();
  code += '<label for="album">Titre de l\'album : </label>' + ligne();
  code += '<input type="text" name="album" id="album" value=""><br>' + ligne();
  code += '<input type="submit" name="valider" value="Valider"><br>' + ligne();
  code += '</p></form>' + ligne();

  return code;
}

/**
  @fn pageLogin
  @brief Fonction générant la page de login
  @return La chaine de caractères générée
*/
function pageLogin () {
  let code = debutPage('Galerie d\'images');
  code += titre();
  code += menu();
  code += titrePage('Connexion');
  code += formulaireLogin();
  code += finPage();

  return code;
}

/**
  @fn pageInscription
  @brief Fonction générant la page d'inscription
  @return La chaine de caractères générée
*/
function pageInscription () {
  let code = debutPage('Galerie d\'images');
  code += titre();
  code += menu();
  code += titrePage('Inscription');
  code += formulaireInscription();
  code += finPage();

  return code;
}

/**
  @fn pageBienvenue
  @brief Fonction générant la page de bienvenue sur le site
  @param pseudo - pseudo de l'utilisateur
  @return La chaine de caractères générée
*/
function pageBienvenue (pseudo) {
  let code = debutPage('Galerie d\'images');
  code += titre();
  code += menu();
  code += '<p class="bienvenue">Bienvenue ' + pseudo + '</p><br>' + ligne();
  code += '<p><a href="/deconnexion">Déconnexion du site</a></p>' + ligne();
  code += finPage();

  return code;
}

/**
  @fn pageAjouteImage
  @brief Fonction générant la page d'ajout d'image
  @return La chaine de caractères générée
*/
function pageAjouteImage () {
  let code = debutPage('Galerie d\'images');
  code += titre();
  code += menu();
  code += titrePage('Mise en ligne d\'une image');
  code += formulaireAjouteImage();
  code += finPage();

  return code;
}

/**
  @fn pageVisionnageImageForm
  @brief Fonction générant le formulaire de visionnage d'images
  @return La chaine de caractères générée
*/
function pageVisionnageImageForm () {
  let code = debutPage('Galerie d\'images');
  code += titre();
  code += menu();
  code += titrePage('Visionnage d\'une image');
  code += formulaireVisionnageImage();
  code += finPage();

  return code;
}

/**
  @fn pageVisionnageImage
  @brief Fonction générant la page de visionnage d'une image donnée
  @param titre - Titre de l'image à afficher
  @return La chaine de caractères générée
*/
function pageVisionnageImage (titre) {
  let code = debutPage('Galerie d\'images');
  code += titre();
  code += menu();
  code += titrePage('Visionnage d\'une image');
  code += '<p>' + ligne();
  code += '<img src="/files/images/titre" alt="' + titre + '"><br>' + ligne();
  code += '<a href="/files/images/titre">' + titre + '</a>' + ligne();
  code += '</p>' + ligne();
  code += finPage();

  return code;
}

/**
  @fn pageListeImage
  @brief Fonction générant la page de visionnage de toutes les images
  @param titres - Array de tous les titres des images à afficher
  @return La chaine de caractères générée
*/
function pageListeImages (titres) {
  let code = debutPage('Galerie d\'images');
  code += titre();
  code += menu();
  code += titrePage('Visionnage de toutes les images');

  for (let i in titres) {
    code += '<p>' + ligne();
    code += '<img src="/files/images/titre" alt="' + i + '"><br>' + ligne();
    code += '<a href="/files/images/titre">' + i + '</a>' + ligne();
    code += '</p><br>' + ligne();
  }

  code += finPage();

  return code;
}

/**
  @fn pageClasseImageForm
  @brief Fonction générant la page de classement d'une image dans un album
  @return La chaine de caractères générée
*/
function pageClasseImageForm () {
  let code = debutPage('Galerie d\'images');
  code += titre();
  code += menu();
  code += titrePage('Classement d\'une image dans un album');
  code += formulaireClasseImage();
  code += finPage();
}

/**
  @fn pageParcourirAlbumForm
  @brief Fonction générant le formulaire de visionnage d'albums
  @return La chaine de caractères générée
*/
function pageParcourirAlbumForm () {
  let code = debutPage('Galerie d\'images');
  code += titre();
  code += menu();
  code += titrePage('Visionnage d\'un album');
  code += formulaireParcourirAlbum();
  code += finPage();

  return code;
}

/**
  @fn pageListeAlbum
  @brief Fonction générant la page de visionnage de toutes les images
  @param titres - Array de tous les titres des images à afficher
  @return La chaine de caractères générée
*/
function pageListeAlbum (titres) {
  let code = debutPage('Galerie d\'images');
  code += titre();
  code += menu();
  code += titrePage('Visionnage de toutes les images de l\'album');

  for (let i in titres) {
    code += '<p>' + ligne();
    code += '<img src="/files/images/titre" alt="' + i + '"><br>' + ligne();
    code += '<a href="/files/images/titre">' + i + '</a>' + ligne();
    code += '</p><br>' + ligne();
  }

  code += finPage();

  return code;
}



exports = module.exports = {
  pageLogin: pageLogin,
  pageInscription: pageInscription,
  pageBienvenue: pageBienvenue,
  pageVisionnageImageForm: pageVisionnageImageForm,
  pageVisionnageImage: pageVisionnageImage,
  pageListeImages: pageListeImages,
  pageClasseImageForm: pageClasseImageForm,
  pageParcourirAlbumForm: pageParcourirAlbumForm,
  pageListeAlbum: pageListeAlbum
}
