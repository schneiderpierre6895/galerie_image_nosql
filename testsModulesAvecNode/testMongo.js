let MongoClient = require('mongodb').MongoClient;

let url = 'mongodb://localhost:27017'

/*MongoClient.connect(url, { useUnifiedTopology: true }, function (error, client) {
  if (error) {
    console.log('Erreur');
  }
  let db = client.db('mydb');

  db.collection('MaCollection').insertOne({nom: 'Kent', prenom: 'Clark'}, function (error) {
    if (error) console.error('Erreur d\'insertion pour Superman');
  });
  db.collection('MaCollection').insertOne({nom: 'Wayne', prenom: 'Bruce'}, function (error) {
    if (error) console.error('Erreur d\'insertion pour Batman');
  });

  db.collection('MaCollection').find().each(function (error, document) {
    if (error) {
      return console.error(error);
    }
    if (document !== null) {
      console.log('Document trouvé : ' + JSON.stringify(document));
    } else {
      console.log('Tout les documents sont lus');
    }
  });
});*/

function testBase (documents) {
  return MongoClient.connect(url, function(err, client, documents) {
    if (err) {
      console.log('Erreur');
    }

    console.log('Connexion réussie');

    let db = client.db('mydb');
    let collection = db.collection('MaCollection');

    /*client.db('mydb').collection('MaCollection').insertOne({nom: 'Kent', prenom: 'Clark'},  function (error) {
      if (error) console.error('Erreur d\'insertion pour Superman');
      else console.log('Superman est dans la base');
    });
    client.db('mydb').collection('MaCollection').insertOne({nom: 'Wayne', prenom: 'Bruce'},  function (error) {
      if (error) console.error('Erreur d\'insertion pour Batman');
      else console.log('Batman est dans la base');
    });*/

    documents = collection.find();
    client.close();

    return documents;
  });
}


let documents = null;
testBase(documents);

for (let d in documents) {
  console.log(d.nom + ' ' + d.prenom);
}
