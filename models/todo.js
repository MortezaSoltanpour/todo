const todoUtils = require("../utils/todos");
class Todo {
  constructor(id, text, completed = false) {
    this.id = id;
    this.text = text;
    this.completed = completed;
  }

  save(callback) {
    todoUtils.getTodos((todos) => {
      todos.push(this);
      todoUtils.saveTodos(todos, (err) => {
        callback(err);
      });
    });

    // fs.readFile(filePath, (err, fileContent) => {
    //   // if (err) return [];
    //   const todos = JSON.parse(fileContent);
    //   todos.push(this);

    //   fs.writeFile(filePath, JSON.stringify(todos), (err) => {
    //     if (err) callback(err);
    //     else return callback([]);
    //   });
    // });
  }

  static fetchAll(callback) {
    todoUtils.getTodos((todos) => {
      callback(todos);
    });

    // fs.readFile(filePath, (err, fileContent) => {
    //   if (err) return [];
    //   const todos = JSON.parse(fileContent);
    //   callback(todos);
    // });
  }

  static deleteTodo(id, callback) {
    todoUtils.getTodos((todos) => {
      const filteredTodos = todos.filter((t) => t.id != id);
      todoUtils.saveTodos(filteredTodos, (err) => {
        callback(err);
      });
    });

    // fs.readFile(filePath, (err, fileContent) => {
    //   const todos = JSON.parse(fileContent);
    //   const filteredTodo = todos.filter((t) => t.id != id);

    //   fs.writeFile(filePath, JSON.stringify(filteredTodo), (err) => {
    //     callback(err);
    //   });
    // });
  }

  static completeTodo(id, callback) {
    todoUtils.getTodos((todos) => {
      const todoIndex = todos.findIndex((t) => t.id == id);
      const todo = todos[todoIndex];
      todo.completed = true;
      todos[todoIndex] = todo;
      todoUtils.saveTodos(todos, (err) => {
        callback(err);
      });
    });

    // fs.readFile(filePath, (err, fileContent) => {
    //   const todos = JSON.parse(fileContent);
    //   const todoIndex = todos.findIndex((t) => t.id == id);
    //   const todo = todos[todoIndex];
    //   todo.completed = true;
    //   todos[todoIndex] = todo;
    //   fs.writeFile(filePath, JSON.stringify(todos), (err) => {
    //     callback(err);
    //   });
    // });
  }
}

module.exports = Todo;
