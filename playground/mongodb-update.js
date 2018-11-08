const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5be42975d3972b46b85ff17f')
  }, {
    $set: {
      age: 35
    }
  }, {
    returnOriginal: false
  }).then(result => {
    console.log(result);
  });

  // db.close();
});