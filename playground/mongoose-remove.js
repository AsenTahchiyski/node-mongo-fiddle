const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then(remove => {
//   console.log(remove);
// });

// Todo.findOneAndRemove()
Todo.findByIdAndRemove('5be95aecd3972b46b86001d0').then(todo => {
  console.log(todo, undefined, 2);
});