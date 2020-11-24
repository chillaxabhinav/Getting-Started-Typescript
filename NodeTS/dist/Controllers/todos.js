"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
var todo_1 = require("../Models/todo");
var TODOS = [];
exports.createTodo = function (req, res, next) {
    var text = req.body.text;
    console.log("Request text ", text);
    var newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.json({ message: "Created TODO", createdTodo: newTodo });
};
exports.getTodos = function (req, res, next) {
    res.json({ todos: TODOS });
};
exports.updateTodo = function (req, res, next) {
    var todoID = req.params.id;
    var updatedText = req.body.text;
    var toUpdateTodo = TODOS.find(function (todo) { return todo.id === todoID; });
    if (toUpdateTodo) {
        toUpdateTodo.text = updatedText;
        res.json({ message: "Successfully Updated" });
    }
    else {
        res.json({ message: "Todo not found !" });
    }
};
