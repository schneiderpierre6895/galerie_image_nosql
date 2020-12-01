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
  @return La chaine de caractère générée
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
  @return La chaine de caractère générée
*/
function finPage () {
  let code = '</body>' + ligne();
  code += '</html>';

  return code;
}

/**
  @fn titre
  @brief Fonction générant le titre du site
  @return La chaine de caractère générée
*/
function titre () {
  return '<h1>Galerie d\'images</h1>' + ligne();
}

/**
  @fn titrePage
  @brief Fonction générant un sous-titre d'une page du site
  @param sousTitre - Sous-titre d'une page du site
  @return La chaine de caractère générée
*/
function titrePage (sousTitre) {
  return '<h2>' + sousTitre + '</h2>' + ligne();
}

/**
  @fn menu
  @brief Fonction générant un menu
  @return La chaine de caractère générée
*/
function menu () {
  let code = '<nav>' + ligne();
  code += '<ul>' + ligne();
  code += '<li><a href="/ajouteImage">Ajouter une image</a></li>' + ligne();
  code += '<li><a href="/voirImage">Visionner une image</a></li>' + ligne();
  code += '<li><a href="/listeImage">Lister toutes les images</a></li>' + ligne();
  code += '<li><a href="/voirAlbum">Parcourir un album</a></li>' + ligne();
  code += '</ul>' + ligne();
  code += '</nav>' + ligne();

  return code;
}

/**
  @fn formulaireLogin
  @brief Fonction générant un formulaire de login
  @return La chaine de caractère générée
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
  @return La chaine de caractère générée
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
  @return La chaine de caractère générée
*/
function formulaireAjouteImage () {
  let code = '<form class="ajoutImage" action="ajouteImage/form" method="post"><p>' + ligne();
  code += '<label for="Titre">Titre avec extension : </label>' + ligne();
  code += '<input type="text" name="titre" id="titre" value=""><br>' + ligne();
  code += '<label for="image">Image : </label>' + ligne();
  code += '<input type="file" name="image" id="image" value=""><br>' + ligne();
  code += '<input type="submit" name="valider" value="Valider"><br>' + ligne();
  code += '</p></form>' + ligne();

  return code;
}

/**
  @fn pageLogin
  @brief Fonction générant la page de login
  @return La chaine de caractère générée
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
  @return La chaine de caractère générée
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
  @return La chaine de caractère générée
*/
function pageBienvenue (pseudo) {
  let code = debutPage('Galerie d\'images');
  code += titre();
  code += menu();
  code += '<p class="bienvenue">Bienvenue ' + pseudo + '</p>' + ligne();
  code += finPage();

  return code;
}

/**
  @fn pageAjouteImage
  @brief Fonction générant la page d'ajout d'image
  @return La chaine de caractère générée
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

exports = module.exports = {
  pageLogin: pageLogin,
  pageInscription: pageInscription,
  pageBienvenue: pageBienvenue
}
