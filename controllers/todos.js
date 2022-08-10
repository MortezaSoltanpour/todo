const Todo = require("../models/todo");
const todoUtils = require("../utils/todos");

exports.getIndex = (req, res) => {
  todoUtils.getCompletedTodos((compltedUtils) => {
    todoUtils.getRemainingTodos((remainingTodos) => {
      Todo.fetchAll((todos) => {
        res.render("index", {
          pageTitle: "کارهای روزمره",
          todos,
          compltedUtils,
          remainingTodos,
        });
      });
    });
  });
};
