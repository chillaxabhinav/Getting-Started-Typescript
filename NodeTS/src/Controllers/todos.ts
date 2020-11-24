import { RequestHandler } from 'express';

import { Todo } from '../Models/todo';

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
    const text = (req.body as {text: string}).text;
    console.log("Request text ", text);
    const newTodo = new Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.json({message: "Created TODO", createdTodo: newTodo});
}

export const getTodos: RequestHandler = (req, res, next) =>{
    res.json({todos : TODOS});
}

export const updateTodo: RequestHandler<{id:string}> = (req, res, next) => {
    const todoID = req.params.id;
    const updatedText = (req.body as {text: string}).text;
    const toUpdateTodo = TODOS.find((todo) => todo.id === todoID);
    if(toUpdateTodo){
        toUpdateTodo.text = updatedText;
        res.json({message : "Successfully Updated"});
    }
    else{
        res.json({message : "Todo not found !"});
    }
}