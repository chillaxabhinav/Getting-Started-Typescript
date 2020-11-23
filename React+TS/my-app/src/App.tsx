import React, { useState } from 'react';
import TodoList from './Components/TodoList';
import NewTodo from './Components/NewTodo';

interface Todo {
	id: string;
	text: string;
}

const App: React.FC = () => {

	const [todos, setTodos] = useState<Todo[]>([]);

	const todoAddHandler = (text: string) => {
		setTodos(prevTodos => [...prevTodos,{id: Math.random().toString(), text: text}]);
	}

	return (
		<div className="App">
			<NewTodo onAddTodo={todoAddHandler}/>
			<TodoList items={todos}/>
		</div>
	);
}

export default App;
