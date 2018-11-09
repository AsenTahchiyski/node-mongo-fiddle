const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// const id = '5be54ce0ff0b5cbc059bff80';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then(todo => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by id', todo);
// }).catch(e => console.log(e));

const userId = '5be44b5646bd4118238c52a2';

User.findById(userId).then(user => {
  if (!user) {
    return console.log('User not found');
  }

  console.log(JSON.stringify(user, undefined, 2));
}, e => {
  console.log(e);
});