const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const rootDir = require("./path");

const filePath = path.join(rootDir, "data", "todos.json");

exports.getTodos = (callback) => {
  fs.readFile(filePath, (err, fileContent) => {
    if (err) return callback([]);
    else callback(JSON.parse(fileContent));
  });
};

exports.saveTodos = (todos, callback) => {
  fs.writeFile(filePath, JSON.stringify(todos), (err) => {
    callback(err);
  });
};

exports.generateRandomId = () => {
  return uuidv4();
};

exports.getCompletedTodos = (callback) => {
  this.getTodos((todos) => {
    const filteredTodo = todos.filter((t) => t.completed === true);
    callback(filteredTodo.length);
  });
};

exports.getRemainingTodos = (callback) => {
  this.getTodos((todos) => {
    const filteredTodo = todos.filter((t) => t.completed === false);
    callback(filteredTodo.length);
  });
};
