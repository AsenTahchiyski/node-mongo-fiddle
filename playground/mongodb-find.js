const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5be402a5d3972b46b85fe4be')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Error fetching document/s', err);
  // });

  db.collection('Users').find({name: 'admin'}).toArray().then((users) => {
    console.log('Users');
    console.log(JSON.stringify(users, undefined, 2));
  }, (err) => {
    console.log('Error fetching document/s', err);
  });

  // db.close();
});