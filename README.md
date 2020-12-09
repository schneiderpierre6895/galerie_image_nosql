# Galerie d'images
Projet de bases de données NoSQL avec une galierie d'images

# Instructions de pré-lancement
Installer les paquets avec la commande

```
npm install
```

Lancer le daemon de MongoDB avec la commande

```
mongod
```

Lancer le serveur NodeJS avec la commande

```
node app.js
```

# Lancement de l'application

Lancer l'application avec votre navigateur préféré à l'adresse

```
http://localhost:3000
```

# Bugs de l'application

J'ai effectué des tests de certains modules à part dans le répertoire testModulesAvecNode.
L'application comporte certains bugs que je ne comprends pas :
- Le serveur ne prend pas en comptes certaines routes GET ou POST alors que mes essais fonctionnaient
- J'ai essayé de recoder le module base de données avec mongoose, mais je tombe sur le même genre de problème qu'avec mongodb
- J'ai essayé préalablement de comprendre le fonctionnement des sessions et des formulaires qui fonctionnait sur des petits essais, cependant mon application ne semble pas se comporter de la même manière
- Petit bug avec le module serveur, j'ai mis cette partie dans le module app.js
- Node ne reconnait pas certaines fonctions de génération de code html comme des fonctions
- Je ne sais pas si mon module base de données fonctionne correctement, l'application de me permet pas d'y arriver pour le tester
