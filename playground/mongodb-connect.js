// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'admin',
  //   age: 35,
  //   location: '127.0.0.1'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to add user', err);
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(reuslt.ops[0]._id.getTimestamp());
  // })

  // console.log('Connected to MongoDB server');
  db.close();
});