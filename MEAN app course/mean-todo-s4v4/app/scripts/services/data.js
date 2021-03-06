'use strict';

function DataService ($http) {

  this.getTodos = function(cb) {
    $http.get('/api/todos').then(cb);
  };

  this.deleteTodo = function(todo) {
    console.log("I deleted the " + todo.name + " todo!");
  };

  this.saveTodos = function(todos) {
    console.log("I saved " + todos.length + " todos!");
  };

}

module.exports = DataService;
