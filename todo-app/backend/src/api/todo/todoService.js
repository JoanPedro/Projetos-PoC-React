const Todo = require('./todo');

Todo.methods(['get', 'post', 'put', 'delete']);
Todo.updateOptions({
  new: true,
  runValidators: true,
}); // Para permitir que o mongo rode as atualizações.

module.exports = Todo;